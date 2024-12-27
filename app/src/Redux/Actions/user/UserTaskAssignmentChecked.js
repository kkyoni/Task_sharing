import { UserTaskAssignmentCheckedApi } from "../../Apis/user/ApiConfig";
import {
  USER_TASK_ASSIGNMENT_CHECKED_ERROR,
  USER_TASK_ASSIGNMENT_CHECKED_SUCCESS,
  USER_TASK_ASSIGNMENT_CHECKED_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserTaskAssignmentCheckedSuccess = (data) => ({
  type: USER_TASK_ASSIGNMENT_CHECKED_SUCCESS,
  payload: data,
});

export const UserTaskAssignmentCheckedError = (error) => ({
  type: USER_TASK_ASSIGNMENT_CHECKED_ERROR,
  payload: error,
});

export const UserTaskAssignmentCheckedRequest = () => ({
  type: USER_TASK_ASSIGNMENT_CHECKED_REQUEST,
});

export const UserTaskAssignmentCheckedActionHandler =
  (TaskId) => async (dispatch) => {
    dispatch(UserTaskAssignmentCheckedRequest());

    try {
      const response = await UserTaskAssignmentCheckedApi(TaskId);

      if (response?.data?.status === "success") {
        message.success("Task Status Changed Successfully!");
        dispatch(UserTaskAssignmentCheckedSuccess(response.data.data));
      } else {
        const errorMessage =
          response?.data?.message || "Unexpected Error Occurred.";
        message.error(errorMessage);
        dispatch(UserTaskAssignmentCheckedError(errorMessage));
      }
    } catch (error) {
      const errorMsg = error?.message || "Something Went Wrong!";
      message.error(errorMsg);
      dispatch(UserTaskAssignmentCheckedError(errorMsg));
    }
  };
