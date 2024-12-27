import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserTaskAssignmentActionHandler } from "../../Redux/Actions/user/UserTaskAssignment";
import { UserTaskActionHandler } from "../../Redux/Actions/user/UserTask";
import { Button, Tabs } from "antd";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import ViewTask from "../Task/ViewTask/ViewTask";
import AddTask from "../Task/AddTask/AddTask";
import { Layout, Breadcrumb } from "antd";
import AddTaskPopupModel from "../PopupModel/AddTaskPopupModel";
const { Content } = Layout;

function Dashboard() {
  const dispatch = useDispatch();
  const [userTaskData, setUserTaskData] = useState([]);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
  const [userTaskAssignmentData, setUserTaskAssignmentData] = useState([]);

  // Get Task
  useEffect(() => {
    dispatch(UserTaskActionHandler());
  }, [dispatch]);

  const usertaskdata = useSelector(
    (state) => state?.UserTaskData?.user_task_data
  );

  useEffect(() => {
    if (usertaskdata) {
      setUserTaskData(usertaskdata);
    }
  }, [usertaskdata]);

  // Delete Task
  const usertaskdaletedata = useSelector(
    (state) => state?.UserTaskDeleteData?.user_task_dalete_data
  );

  useEffect(() => {
    if (usertaskdaletedata) {
      dispatch(UserTaskActionHandler());
    }
  }, [usertaskdaletedata, dispatch]);

  // Add Task Popup
  const showTaskModal = () => setIsModalTaskOpen(true);

  // Create Task
  const usercreatetaskdata = useSelector(
    (state) => state?.UserCreateTaskData?.user_create_task_data
  );

  useEffect(() => {
    if (usercreatetaskdata) {
      dispatch(UserTaskActionHandler());
      setIsModalTaskOpen(false);
    }
  }, [usercreatetaskdata, dispatch]);

  // View Assign Task
  const usertaskassignmentdata = useSelector(
    (state) => state?.UserTaskAssignmentData?.user_task_assignment_data
  );

  useEffect(() => {
    if (usertaskassignmentdata) {
      setUserTaskAssignmentData(usertaskassignmentdata);
    }
  }, [usertaskassignmentdata]);

  // View Task Status
  useEffect(() => {
    dispatch(UserTaskAssignmentActionHandler());
  }, [dispatch]);

  const usertaskassignmentcheckeddata = useSelector(
    (state) =>
      state?.UserTaskAssignmentCheckedData?.user_task_assignment_checked_data
  );

  useEffect(() => {
    if (usertaskassignmentcheckeddata) {
      dispatch(UserTaskAssignmentActionHandler());
    }
  }, [usertaskassignmentcheckeddata, dispatch]);

  return (
    <>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: "#fff",
            minHeight: 280,
            padding: 24,
            borderRadius: "8px",
          }}
        >
          <Button onClick={showTaskModal}>Add Task</Button>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: `Add Task`,
                icon: <AppleOutlined />,
                children: <AddTask userTaskData={userTaskData} />,
              },
              {
                key: "2",
                label: `View Task`,
                icon: <AndroidOutlined />,
                children: (
                  <ViewTask userTaskAssignmentData={userTaskAssignmentData} />
                ),
              },
            ]}
          />
        </div>
      </Content>

      {isModalTaskOpen && (
        <AddTaskPopupModel
          isModalTaskOpen={isModalTaskOpen}
          setIsModalTaskOpen={setIsModalTaskOpen}
        />
      )}
    </>
  );
}

export default Dashboard;
