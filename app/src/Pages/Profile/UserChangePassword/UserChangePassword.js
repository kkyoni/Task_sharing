import React, { useEffect } from "react";
import { UserChangePasswordActionHandler } from "../../../Redux/Actions/user/UserChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, notification } from "antd";

function UserChangePassword() {
  let dispatch = useDispatch();
  const [form] = Form.useForm();

  const userChangePasswordData = useSelector(
    (state) => state.UserChangePasswordData?.user_change_password_data
  );

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
      placement: "topRight",
    });
  };

  const onFinish = (values) => {
    const { old_password, new_password, confirm_password } = values;
    if (new_password !== confirm_password) {
      openNotification(
        "error",
        "New Password and Confirm Password do not match!"
      );
      return;
    }

    dispatch(
      UserChangePasswordActionHandler({
        old_password,
        new_password,
        confirm_password,
      })
    );
  };

  useEffect(() => {
    if (userChangePasswordData?.message) {
      form.resetFields();
    }
  }, [userChangePasswordData, form]);

  return (
    <>
      <Form
        form={form}
        initialValues={{
          old_password: "",
          new_password: "",
          confirm_password: "",
        }}
        onFinish={onFinish}
        id="changePassword"
      >
        <div className="mb-3">
          <label className="form-label" htmlFor="existingPassword">
            Old Password
          </label>
          <Form.Item
            name="old_password"
            rules={[
              {
                required: true,
                message: "Please input your Old Password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Old Password"
              className="form-control"
              id="existingPassword"
            />
          </Form.Item>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="newPassword">
            New Password
          </label>
          <Form.Item
            name="new_password"
            rules={[
              {
                required: true,
                message: "Please input your New Password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
          >
            <Input.Password
              placeholder="New Password"
              className="form-control"
              id="newPassword"
            />
          </Form.Item>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Form.Item
            name="confirm_password"
            dependencies={["new_password"]}
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              className="form-control"
              id="confirmPassword"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="btn btn-primary"
            style={{ width: "208px", height: "50px" }}
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UserChangePassword;
