import React, { useState } from "react";
import {
  Layout,
  Menu,
  List,
  Avatar,
  Button,
  Modal,
  Input,
  Typography,
} from "antd";

import Row from "../Row";
const {  Content, Footer } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
import axios from "axios";
import "antd/dist/antd.css";

function EmployeeView(props) {
  const [review, setReview] = useState("");
  const [currentFeedback, setCurrentFeedback] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const [modalType, setModalType] = useState(1);

  const data = props.feedbacks.map((feedback) => {
    let user = feedback.user[0];
    return {
      title: user.name,
      feedback: feedback.details,
      review: feedback.review,
      id: feedback._id,
      userId: user._id,
    };
  });

  const submitReview = () => {
    let req = { review, _id: currentFeedback.id };
    axios.put("/api/update-feedback", req).then((res) => {
      alert("Added successfully");
      props.refetch();
    });
  };

  const getFooter = () => {
    if (modalType === 1) {
      return [
        <Button key="back" onClick={() => setViewModal(false)}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            setViewModal(false);
            submitReview();
          }}
        >
          Submit
        </Button>,
      ];
    } else {
      [];
    }
  };

  return (
    <>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Row jc="center" m="1rem 0">
            <Title level={2}>FeedBacks</Title>
          </Row>

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Modal
              visible={viewModal}
              title={
                modalType === 1
                  ? "Please submit feedback"
                  : `Review from ${currentFeedback.title}`
              }
              onOk={() => setViewModal(false)}
              onCancel={() => setViewModal(false)}
              footer={getFooter()}
            >
              {modalType === 1 ? (
                <TextArea
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                  placeholder="Please type here ..."
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              ) : (
                <p>{currentFeedback.review}</p>
              )}
            </Modal>

            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => {
                let actions = [];
                if (item.review) {
                  actions.push(
                    <a
                      key="list-loadmore-more"
                      onClick={() => {
                        setViewModal(true);
                        setModalType(2);
                        setCurrentFeedback(item);
                      }}
                    >
                      View review
                    </a>
                  );
                } else {
                  actions.push(
                    <a
                      key="list-loadmore-edit"
                      onClick={() => {
                        setViewModal(true);
                        setModalType(1);
                        setCurrentFeedback(item);
                      }}
                    >
                      Add review
                    </a>
                  );
                }

                return (
                  <List.Item style={{ background: "white" }} actions={actions}>
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
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Created by PK ©2021</Footer>
      </Layout>
    </>
  );
}

export default EmployeeView;
