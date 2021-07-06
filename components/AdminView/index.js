import React, { useState } from "react";
import {
  Layout,
  Menu,
  List,
  Avatar,
  Button,
  Modal,
  Radio,
  Input,
  Form,
  Popover,
  Dropdown,
} from "antd";
import {
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Row from "../Row";
const {  Content, Footer } = Layout;
import axios from "axios";
import "antd/dist/antd.css";

function AdminView(props) {
  const [view, setView] = useState(1);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(null);
  const [details, setDetails] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [currentFeedback, setCurrentFeedback] = useState({});
  const [viewModal, setViewModal] = useState(false);

  const clearForm = () => {
    setName("");
    setReview("");
    setDetails("");
    setId("");
    setUserId(null);
    setCurrentFeedback({});
    setUser("");
  };

  const data = props.feedbacks.map((feedback) => {
    let user = feedback.user[0];
    return {
      title: user.name,
      feedback: feedback.details,
      review: feedback.review,
      id: feedback._id,
      details: feedback.details,
      userId: user._id,
    };
  });

  const users = props.users.map((user) => {
    return user.name;
  });



  const addEmployee = () => {
    let req = { name };
    if (name) {
      axios.post("/api/user", req).then((res) => {
        alert("Added successfully");
        clearForm();
        props.refetch();
      });
    }
  };

  const addFeedback = () => {
    let req = { details, user: userId };
    if (details) {
      axios.post("/api/feedback", req).then((res) => {
        alert("Added successfully");
        clearForm();
        props.refetch();
      });
    }
  };

  const updateFeedBack = () => {
    let req = { review, details, user: userId, _id: id };
    axios.put("/api/update-feedback", req).then((res) => {
      alert("updated successfully");
      clearForm();
      props.refetch();
    });
  };

  const getUserAddForm = () => {
    return (
      <>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
        >
          <Form.Item
            label="name"
            rules={[
              {
                required: true,
                message: "Please input employee name!",
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              onClick={() => addEmployee()}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  };

  const menu = () => {
    let res = props.users.map((user) => {
      return (
        <Menu.Item
          onClick={() => {
            setUserId(user._id);
            setUser(user.name);
          }}
          key="1"
          icon={<UserOutlined />}
        >
          {user.name}
        </Menu.Item>
      );
    });
    res = <Menu onClick={() => {}}>{res}</Menu>;

    return res;
  };

  const getFeedbackAddForm = () => {
    return (
      <>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
        >
          <Form.Item
            label="Details"
            rules={[
              {
                required: true,
                message: "Please input employee name!",
              },
            ]}
          >
            <Input
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="User"
            rules={[
              {
                required: true,
                message: "Please input employee name!",
              },
            ]}
          >
            <Dropdown.Button
              overlay={menu()}
              placement="bottomCenter"
              icon={<UserOutlined />}
            >
              {user || " Please select"}
            </Dropdown.Button>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              onClick={() => addFeedback()}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  };

  return (
    <>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Row jc="center" m="1rem 0">
            <Radio.Group
              defaultValue={view === 1 ? "a" : "b"}
              buttonStyle="solid"
            >
              <Radio.Button value="a" onClick={() => setView(1)}>
                Employees
              </Radio.Button>
              <Radio.Button value="b" onClick={() => setView(2)}>
                Feedbacks
              </Radio.Button>
            </Radio.Group>
          </Row>

          <Row jc="flex-end" m="1rem 0">
            {view === 1 ? (
              <Popover
                content={getUserAddForm()}
                title="Please fill the details"
              >
                <Button type="primary" icon={<UserAddOutlined />}>
                  Add Employee
                </Button>
              </Popover>
            ) : (
              <Popover
                placement="leftTop"
                content={getFeedbackAddForm()}
                title="Please fill the details"
              >
                <Button type="primary">Add Feedback</Button>
              </Popover>
            )}
          </Row>

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Modal
              visible={viewModal}
              title={"Update"}
              onOk={() => {
                setViewModal(false);
                updateFeedBack();
              }}
              onCancel={() => setViewModal(false)}
            >
              <>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={() => {}}
                  onFinishFailed={() => {}}
                >
                  <Form.Item
                    label="Feedback"
                    rules={[
                      {
                        required: true,
                        message: "Please input details!",
                      },
                    ]}
                  >
                    <Input
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Review"
                    rules={[
                      {
                        message: "Please input review!",
                      },
                    ]}
                  >
                    <Input
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item label="User">
                    <Dropdown.Button
                      overlay={menu()}
                      placement="bottomCenter"
                      icon={<UserOutlined />}
                    >
                      {user || " Please select"}
                    </Dropdown.Button>
                  </Form.Item>
                </Form>
              </>
            </Modal>
            {view === 1 ? (
              <List
                itemLayout="horizontal"
                dataSource={[...users]}
                renderItem={(item) => {
                  return (
                    <List.Item style={{ background: "white" }}>
                      <List.Item.Meta
                        title={
                          <a
                            style={{
                              textTransform: "uppercase",
                              marginLeft: "1rem",
                            }}
                          >
                            {item}
                          </a>
                        }
                      />
                    </List.Item>
                  );
                }}
              />
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => {
                  let actions = [
                    <a
                      key="list-loadmore-more"
                      onClick={() => {
                        setViewModal(true);
                        setCurrentFeedback(item);
                        setDetails(item.feedback);
                        setReview(item.review);
                        setName(item.title);
                        setId(item.id);
                        setUserId(item.userid);
                        setUser(item.title);
                      }}
                    >
                      Edit
                    </a>,
                  ];

                  return (
                    <List.Item
                      style={{ background: "white" }}
                      actions={actions}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={
                          <a style={{ textTransform: "uppercase" }}>
                            {item.title}
                          </a>
                        }
                        description={item.feedback}
                      />
                    </List.Item>
                  );
                }}
              />
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Created by PK ©2021</Footer>
      </Layout>
    </>
  );
}

export default AdminView;
