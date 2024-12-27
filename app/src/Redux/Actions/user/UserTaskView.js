import { UserTaskViewApi } from "../../Apis/user/ApiConfig";
import {
  USER_TASK_VIEW_ERROR,
  USER_TASK_VIEW_SUCCESS,
  USER_TASK_VIEW_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserTaskViewSuccess = (data) => ({
  type: USER_TASK_VIEW_SUCCESS,
  payload: data,
});

export const UserTaskViewError = (error) => ({
  type: USER_TASK_VIEW_ERROR,
  payload: error,
});

export const UserTaskViewRequest = () => ({
  type: USER_TASK_VIEW_REQUEST,
});

export const UserTaskViewActionHandler = (id) => async (dispatch) => {
  dispatch(UserTaskViewRequest());

  try {
    const response = await UserTaskViewApi(id);

    if (response?.data?.status === "success") {
      dispatch(UserTaskViewSuccess(response.data.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected error occurred.";
      message.error(errorMessage);
      dispatch(UserTaskViewError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something went wrong!";
    message.error(errorMsg);
    dispatch(UserTaskViewError(errorMsg));
  }
};
