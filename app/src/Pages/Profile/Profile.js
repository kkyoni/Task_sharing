import { Tabs } from "antd";
import React from "react";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import UserProfile from "./UserProfile/UserProfile";
import UserChangePassword from "./UserChangePassword/UserChangePassword";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

function Profile() {
  return (
    <>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: "#fff",
            minHeight: 280,
            padding: 24,
            borderRadius: "8px",
          }}
        >
          <Tabs
            tabPosition={"left"}
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: `Profile Update`,
                icon: <UserOutlined />,
                children: <UserProfile />,
              },
              {
                key: "2",
                label: `Change Password`,
                icon: <UnlockOutlined />,
                children: <UserChangePassword />,
              },
            ]}
          />
        </div>
      </Content>
    </>
  );
}

export default Profile;
