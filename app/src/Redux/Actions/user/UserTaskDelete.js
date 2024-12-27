import { UserTaskDeleteApi } from "../../Apis/user/ApiConfig";
import {
  USER_TASK_DELETE_ERROR,
  USER_TASK_DELETE_SUCCESS,
  USER_TASK_DELETE_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserTaskDeleteSuccess = (data) => ({
  type: USER_TASK_DELETE_SUCCESS,
  payload: data,
});

export const UserTaskDeleteError = (error) => ({
  type: USER_TASK_DELETE_ERROR,
  payload: error,
});

export const UserTaskDeleteRequest = () => ({
  type: USER_TASK_DELETE_REQUEST,
});

export const UserTaskDeleteActionHandler = (id) => async (dispatch) => {
  dispatch(UserTaskDeleteRequest());

  try {
    const response = await UserTaskDeleteApi(id);

    if (response?.data?.status === "success") {
      message.success("Task Deleted Successfully!");
      dispatch(UserTaskDeleteSuccess(response.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected Error Occurred.";
      message.error(errorMessage);
      dispatch(UserTaskDeleteError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something Went Wrong!";
    message.error(errorMsg);
    dispatch(UserTaskDeleteError(errorMsg));
  }
};
