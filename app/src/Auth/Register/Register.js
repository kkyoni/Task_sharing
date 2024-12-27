import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RegisterActionHandler } from "../../Redux/Actions/common/Register";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingButton, setLoadingButton] = useState(false);

  const registerdata = useSelector((state) => state?.RegisterData);

  const onFinish = (values) => {
    setLoadingButton(true);
    dispatch(RegisterActionHandler(values));
  };

  useEffect(() => {
    setLoadingButton(registerdata.loader);
    if (registerdata.register_data) {
      navigate("/");
    }
  }, [navigate, registerdata]);

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
              Register
            </Title>
            <Form
              name="Register"
              layout="vertical"
              initialValues={{ name: "", email: "", password: "" }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="Enter your Name" />
              </Form.Item>

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
                  Submit
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
                Don't have an account? <Link to={"/login"}>Login now</Link>
              </Text>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
