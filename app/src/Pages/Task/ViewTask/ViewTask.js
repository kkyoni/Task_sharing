import React from "react";
import { Button, Table } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { UserTaskAssignmentCheckedActionHandler } from "../../../Redux/Actions/user/UserTaskAssignmentChecked";

function ViewTask({ userTaskAssignmentData }) {
  const dispatch = useDispatch();

  const userTaskChecked = (id) => {
    dispatch(UserTaskAssignmentCheckedActionHandler(id));
  };

  const columns = [
    {
      title: "Task Name",
      dataIndex: "task_list",
      key: "task_name",
      render: (taskList) => <>{taskList?.name}</>,
    },
    {
      title: "Assigned User Name",
      dataIndex: "task_list",
      key: "user_name",
      render: (taskList) => taskList?.task_user?.name || "N/A",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Completed",
      key: "completed",
      render: (_, record) => (
        <Button
          type="primary"
          icon={record.completed === 0 ? <CloseOutlined /> : <CheckOutlined />}
          size="small"
          onClick={() => record.completed === 0 && userTaskChecked(record.id)}
        >
          {record.completed === 0 ? "Not Completed" : "Completed"}
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={userTaskAssignmentData}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 10 }}
        bordered
        locale={{
          emptyText: "No Data Available",
        }}
      />
    </>
  );
}

export default ViewTask;
