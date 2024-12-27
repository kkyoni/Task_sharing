import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Modal, Table } from "antd";
import { UserTaskViewActionHandler } from "../../Redux/Actions/user/UserTaskView";

function ViewTaskPopupModel({ taskId, isOpen, onClose }) {
  const dispatch = useDispatch();

  const usertaskviewdata = useSelector(
    (state) => state?.UserTaskViewData?.user_task_view_data
  );

  useEffect(() => {
    if (taskId) {
      dispatch(UserTaskViewActionHandler(taskId));
    }
  }, [taskId, dispatch]);

  const expandDataSource =
    usertaskviewdata?.task_list?.map((task) => ({
      key: task.id.toString(),
      date: `${new Date(task.created_at).toLocaleString()} - ${new Date(
        task.updated_at
      ).toLocaleString()}`,
      name: task.user?.name,
      completed: task.completed,
    })) || [];

  const dataSource = [
    {
      key: usertaskviewdata?.id?.toString(),
      name: usertaskviewdata?.name,
      created_at: new Date(usertaskviewdata?.created_at).toLocaleString(),
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];

  const expandColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
      render: (completed) =>
        completed === 0 ? (
          <Badge status="error" text="Not Completed" />
        ) : (
          <Badge status="success" text="Finished" />
        ),
    },
  ];

  const expandedRowRender = () => (
    <Table
      columns={expandColumns}
      dataSource={expandDataSource}
      pagination={false}
    />
  );

  return (
    <Modal
      title="View Task"
      open={isOpen}
      footer={null}
      onCancel={onClose}
      width={1000}
    >
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={dataSource}
        size="small"
      />
    </Modal>
  );
}

export default ViewTaskPopupModel;
