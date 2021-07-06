import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import { Layout, Menu, Result, Skeleton, Input } from "antd";
import { UserSwitchOutlined, UserOutlined } from "@ant-design/icons";

import Row from "../components/Row";
import Img from "../components/Img";
import EmployeeView from "../components/EmployeeView";
import AdminView from "../components/AdminView";
import axios from "axios";
const { Sider } = Layout;

import "antd/dist/antd.css";

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState("1");

  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [fetchingFeedbacks, setFetchingFeedbacks] = useState(true);
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [visible, setVisible] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    // Dismiss manually and asynchronously

    axios
      .get("/api/users")
      .then((res) => {
        setFetchingUsers(false);
        setUsers([...res.data]);
      })
      .catch(() => {
        setFetchingUsers(false);
        setFetchError(true);
      });

    axios
      .get("/api/feedbacks")
      .then((res) => {
        setFetchingFeedbacks(false);
        setFeedbacks([...res.data]);
      })
      .catch(() => {
        setFetchingFeedbacks(false);
        setFetchError(true);
      });
  }, [user, refetch]);

  return (
    <>
      <Head title={"PayPay | Home"} />

      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[user]} mode="inline">
            {!collapsed && (
              <Row
                m="2rem 0"
                height="100%"
                alignItems="center"
                jc="center"
                bg="white"
              >
                <Img
                  width="auto"
                  height="2rem"
                  src="https://image.paypay.ne.jp/page/common/images/img_logo.png"
                />
              </Row>
            )}

            <Menu.Item
              onClick={() => {
                setUser("1");
              }}
              key="1"
              icon={<UserSwitchOutlined />}
            >
              Admin
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                setUser("2");
              }}
              icon={<UserOutlined />}
            >
              Employee
            </Menu.Item>
          </Menu>
        </Sider>

        {fetchError ? (
          <Row jc="center">
            <Result
              status="500"
              title="Oops!"
              subTitle="Sorry, something went wrong. try again later"
            />
          </Row>
        ) : fetchingUsers && fetchingFeedbacks ? (
          <Skeleton active />
        ) : user === "2" ? (
          <EmployeeView
            refetch={() => {
              setRefetch(!refetch);
            }}
            users={users}
            feedbacks={feedbacks}
          />
        ) : (
          <AdminView
            refetch={() => {
              setRefetch(!refetch);
            }}
            users={users}
            feedbacks={feedbacks}
          />
        )}
        {}
      </Layout>
    </>
  );
}

export default Home;
