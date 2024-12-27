import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Modal, Button } from "antd";
import { UserCreateTaskListActionHandler } from "../../Redux/Actions/user/UserCreateTaskList";

function AddTaskPopupModel({ isModalTaskOpen, setIsModalTaskOpen }) {
  const dispatch = useDispatch();

  const onFinish = (value) => {
    const name = value.name;
    dispatch(UserCreateTaskListActionHandler(name));
  };

  return (
    <Modal
      title="Add Task"
      open={isModalTaskOpen}
      onCancel={() => setIsModalTaskOpen(false)}
      footer={null}
    >
      <Form
        name="loginForm"
        initialValues={{ name: "" }}
        onFinish={onFinish}
        className="login-class-form"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddTaskPopupModel;
