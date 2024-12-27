import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { ForgotPasswordActionHandler } from "../../Redux/Actions/common/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingButton, setLoadingButton] = useState(false);

  const forgotpassworddata = useSelector((state) => state?.ForgotPasswordData);

  const onFinish = (values) => {
    setLoadingButton(true);
    dispatch(ForgotPasswordActionHandler(values));
  };

  useEffect(() => {
    setLoadingButton(forgotpassworddata.loader);
    if (forgotpassworddata.forgot_password_data) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [navigate, forgotpassworddata]);

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
              Forgot Password
            </Title>
            <Text
              type="secondary"
              style={{
                display: "block",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Enter your registered email address below, and we’ll send you a
              link to reset your password.
            </Text>
            <Form
              name="forgot-password"
              layout="vertical"
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
                <Input placeholder="Enter your registered email" />
              </Form.Item>

              <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loadingButton}
                >
                  Send Reset Link
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
                <Link to={"/login"}>Back to Login</Link>
              </Text>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ForgotPassword;
