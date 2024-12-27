import { UserTaskApi } from "../../Apis/user/ApiConfig";
import {
  USER_TASK_ERROR,
  USER_TASK_SUCCESS,
  USER_TASK_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserTaskSuccess = (data) => ({
  type: USER_TASK_SUCCESS,
  payload: data,
});

export const UserTaskError = (error) => ({
  type: USER_TASK_ERROR,
  payload: error,
});

export const UserTaskRequest = () => ({
  type: USER_TASK_REQUEST,
});

export const UserTaskActionHandler = () => async (dispatch) => {
  dispatch(UserTaskRequest());

  try {
    const response = await UserTaskApi();

    if (response?.data?.status === "success") {
      dispatch(UserTaskSuccess(response.data.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected Error Occurred.";
      message.error(errorMessage);
      dispatch(UserTaskError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something Went Wrong!";
    message.error(errorMsg);
    dispatch(UserTaskError(errorMsg));
  }
};
