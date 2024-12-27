import { UserTaskAssignmentApi } from "../../Apis/user/ApiConfig";
import {
  USER_TASK_ASSIGNMENT_ERROR,
  USER_TASK_ASSIGNMENT_SUCCESS,
  USER_TASK_ASSIGNMENT_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserTaskAssignmentSuccess = (data) => ({
  type: USER_TASK_ASSIGNMENT_SUCCESS,
  payload: data,
});

export const UserTaskAssignmentError = (error) => ({
  type: USER_TASK_ASSIGNMENT_ERROR,
  payload: error,
});

export const UserTaskAssignmentRequest = () => ({
  type: USER_TASK_ASSIGNMENT_REQUEST,
});

export const UserTaskAssignmentActionHandler =
  (userId, taskId) => async (dispatch) => {
    dispatch(UserTaskAssignmentRequest());

    try {
      const response = await UserTaskAssignmentApi(userId, taskId);

      if (response?.data?.status === "success") {
        dispatch(UserTaskAssignmentSuccess(response.data.data));
      } else {
        const errorMessage =
          response?.data?.message || "Unexpected error occurred.";
        message.error(errorMessage);
        dispatch(UserTaskAssignmentError(errorMessage));
      }
    } catch (error) {
      const errorMsg = error?.message || "Something went wrong!";
      message.error(errorMsg);
      dispatch(UserTaskAssignmentError(errorMsg));
    }
  };
