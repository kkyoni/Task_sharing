import { UserAssiTaskListApi } from "../../Apis/user/ApiConfig";
import {
  USER_ASSI_LIST_ERROR,
  USER_ASSI_LIST_SUCCESS,
  USER_ASSI_LIST_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserAssiTaskListSuccess = (res) => {
  return {
    type: USER_ASSI_LIST_SUCCESS,
    payload: res,
  };
};

export const UserAssiTaskListError = (error) => {
  return {
    type: USER_ASSI_LIST_ERROR,
    error: error,
  };
};

export const UserAssiTaskListRequest = () => {
  return {
    type: USER_ASSI_LIST_REQUEST,
  };
};

export const UserAssiTaskListActionHandler = (userId, TaskId) => {
  return async (dispatch) => {
    dispatch(UserAssiTaskListRequest());

    try {
      const res = await UserAssiTaskListApi(userId, TaskId);
      const errorMessage = res?.data?.message || "Something went wrong";

      if (res && res.data && res.data.status === "success") {
        message.success("Task Assignment Successful!");
        dispatch(UserAssiTaskListSuccess(res.data.data));
      } else {
        message.error(errorMessage);
        dispatch(UserAssiTaskListError(errorMessage));
      }
    } catch (err) {
      message.error("An error occurred while assigning task.");
      dispatch(UserAssiTaskListError("Something Went Wrong!!!"));
    }
  };
};
