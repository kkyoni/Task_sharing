import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Select } from "antd";
import { UserAssiTaskListActionHandler } from "../../Redux/Actions/user/UserAssiTaskList";
import { UserListActionHandler } from "../../Redux/Actions/user/UserList";

function AssignmentUserPopupModel({ taskId, isOpen, onClose }) {
  const dispatch = useDispatch();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userOptions, setUserOptions] = useState([]);
  const userlistdata = useSelector(
    (state) => state?.UserListData?.user_list_data
  );

  const handleChange = (value) => {
    setSelectedUserId(value);
  };

  const handleAssignUser = () => {
    dispatch(UserAssiTaskListActionHandler(selectedUserId, taskId));
    onClose();
  };

  useEffect(() => {
    if (taskId) {
      dispatch(UserListActionHandler());
    }
  }, [dispatch, taskId]);

  useEffect(() => {
    if (userlistdata) {
      setUserOptions(userlistdata);
    }
  }, [userlistdata]);

  return (
    <>
      <Modal
        title="Assignment User"
        open={isOpen}
        onOk={handleAssignUser}
        onCancel={onClose}
      >
        <p>
          <Select
            style={{ width: 200 }}
            onChange={handleChange}
            options={userOptions.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
          />
        </p>
      </Modal>
    </>
  );
}

export default AssignmentUserPopupModel;
