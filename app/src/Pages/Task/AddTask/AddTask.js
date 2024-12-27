import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Space, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import AssignmentUserPopupModel from "../../PopupModel/AssignmentUserPopupModel";
import { UserTaskDeleteActionHandler } from "../../../Redux/Actions/user/UserTaskDelete";
import ViewTaskPopupModel from "../../PopupModel/ViewTaskPopupModel";

function AddTask({ userTaskData }) {
  const dispatch = useDispatch();
  const [isAssignTaskModalOpen, setIsAssignTaskModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const [isModalViewTaskOpen, setIsModalViewTaskOpen] = useState(false);

  const showModal = (id) => {
    setSelectedTaskId(id);
    setIsAssignTaskModalOpen(true);
  };

  const closeAssignTaskModal = () => {
    setIsAssignTaskModalOpen(false);
    setSelectedTaskId(null);
  };

  const deleteTask = (id) => {
    dispatch(UserTaskDeleteActionHandler(id));
  };

  const viewTask = (id) => {
    setSelectedTaskId(id);
    setIsModalViewTaskOpen(true);
  };

  const closeViewTaskModal = () => {
    setIsModalViewTaskOpen(false);
    setSelectedTaskId(null);
  };

  const columns = [
    {
      title: "Task Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <>{text}</>,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "User List",
      key: "user_list",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<UsergroupAddOutlined />}
          size="small"
          onClick={() => showModal(record.id)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            size="small"
            onClick={() => console.log(`Edit Task ID: ${record.id}`)}
          />
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => deleteTask(record.id)}
          />
          <Button
            type="primary"
            icon={<EyeOutlined />}
            size="small"
            onClick={() => viewTask(record.id)}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={userTaskData}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 10 }}
        bordered
        locale={{
          emptyText: "No Data Available",
        }}
      />
      {isAssignTaskModalOpen && (
        <AssignmentUserPopupModel
          taskId={selectedTaskId}
          isOpen={isAssignTaskModalOpen}
          onClose={closeAssignTaskModal}
        />
      )}

      {isModalViewTaskOpen && (
        <ViewTaskPopupModel
          taskId={selectedTaskId}
          isOpen={isModalViewTaskOpen}
          onClose={closeViewTaskModal}
        />
      )}
    </>
  );
}

export default AddTask;
