import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoginActionHandler } from "../../Redux/Actions/common/Login";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingButton, setLoadingButton] = useState(false);
  const logindata = useSelector((state) => state?.LoginData);
  const onFinish = (values) => {
    setLoadingButton(true);
    dispatch(LoginActionHandler(values));
  };

  useEffect(() => {
    setLoadingButton(logindata.loader);
    if (logindata.login_data) {
      setTimeout(() => {
        localStorage.setItem("token", logindata.login_data.token);
        localStorage.setItem(
          "userDetails",
          JSON.stringify(logindata.login_data.user)
        );
        navigate("/");
      }, 2000);
    }
  }, [navigate, logindata]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f2f5",
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col xs={24} sm={16} md={12} lg={8} offset={8}>
          <div
            style={{
              padding: "30px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Title
              level={3}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Login
            </Title>
            <Form
              name="login"
              layout="vertical"
              initialValues={{ email: "", password: "" }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters long",
                  },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loadingButton}
                >
                  Login
                </Button>
              </Form.Item>

              <Text
                type="secondary"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <Link to={"/forgot-password"}>Forgot your password?</Link>
              </Text>

              <Text
                type="secondary"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Don't have an account?{" "}
                <Link to={"/register"}>Register now</Link>
              </Text>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
