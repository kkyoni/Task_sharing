import { UserCreateTaskListApi } from "../../Apis/user/ApiConfig";
import {
  USER_CREATE_TASK_LIST_ERROR,
  USER_CREATE_TASK_LIST_SUCCESS,
  USER_CREATE_TASK_LIST_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserCreateTaskListSuccess = (data) => ({
  type: USER_CREATE_TASK_LIST_SUCCESS,
  payload: data,
});

export const UserCreateTaskListError = (error) => ({
  type: USER_CREATE_TASK_LIST_ERROR,
  error,
});

export const UserCreateTaskListRequest = () => ({
  type: USER_CREATE_TASK_LIST_REQUEST,
});

export const UserCreateTaskListActionHandler = (name) => async (dispatch) => {
  dispatch(UserCreateTaskListRequest());

  try {
    const res = await UserCreateTaskListApi(name);

    if (res?.data?.status === "success") {
      message.success("Task Created Successfully!");
      dispatch(UserCreateTaskListSuccess(res.data.data));
    } else {
      const errorMessage = res?.data?.message || "Unknown Error";
      message.error(errorMessage);
      dispatch(UserCreateTaskListError(errorMessage));
    }
  } catch (err) {
    message.error("Something Went Wrong!!!");
    dispatch(UserCreateTaskListError("Something Went Wrong!!!"));
  }
};
