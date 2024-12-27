import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserProfileActionHandler } from "../../Redux/Actions/user/UserProfile";
import { Layout, Dropdown, Space, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

function Header() {
  const Logo = "/images/logo.png";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userProfileData = useSelector(
    (state) => state.UserProfileData?.user_profile_data?.user
  );

  const logoutHandler = () => {
    try {
      localStorage.clear();
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  useEffect(() => {
    dispatch(UserProfileActionHandler());
  }, [dispatch]);

  const items = [
    { key: "1", label: <Link to="/profile">Profile</Link> },
    { key: "2", label: <Link onClick={logoutHandler}>Log Out</Link> },
  ];

  return (
    <AntHeader
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        className="demo-logo"
        style={{ height: "60px", marginRight: "20px" }}
      />
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Button
          type="link"
          style={{ display: "flex", alignItems: "center" }}
          onClick={(e) => e.preventDefault()}
        >
          <Space>
            {userProfileData?.name || "User"}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </AntHeader>
  );
}

export default Header;
