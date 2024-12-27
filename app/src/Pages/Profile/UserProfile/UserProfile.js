import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import { UserProfileUpdateActionHandler } from "../../../Redux/Actions/user/UserProfileUpdate";

function UserProfile() {
  let dispatch = useDispatch();
  const [form] = Form.useForm();

  const userProfileData = useSelector(
    (state) => state.UserProfileData?.user_profile_data?.user
  );

  const userProfileUpdateData = useSelector(
    (state) => state.UserProfileUpdateData?.user_profile_update_data
  );

  const onFinish = (values) => {
    dispatch(UserProfileUpdateActionHandler(values));
  };

  useEffect(() => {
    if (userProfileData) {
      const { name, email } = userProfileData;
      form.setFieldsValue({
        name: name,
        email: email,
      });
    }
  }, [userProfileData, form]);

  useEffect(() => {
    if (userProfileUpdateData) {
      form.resetFields();
    }
  }, [userProfileUpdateData, form]);
  return (
    <>
      <Form
        form={form}
        initialValues={{ name: "", email: "" }}
        onFinish={onFinish}
        id="personalInformation"
      >
        <div className="mb-3">
          <label className="form-label" for="fullName">
            Name
          </label>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input placeholder="Name" className="form-control" id="fullName" />
          </Form.Item>
        </div>
        <div className="mb-3">
          <label className="form-label" for="emailID">
            Email ID
          </label>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Email ID"
              className="form-control"
              id="emailID"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="btn btn-primary"
            style={{ width: "179px", height: "50px" }}
          >
            {" "}
            Update Now{" "}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UserProfile;
