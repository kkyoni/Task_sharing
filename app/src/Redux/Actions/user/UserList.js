import { UserListApi } from "../../Apis/user/ApiConfig";
import {
  USER_LIST_ERROR,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserListSuccess = (data) => ({
  type: USER_LIST_SUCCESS,
  payload: data,
});

export const UserListError = (error) => ({
  type: USER_LIST_ERROR,
  payload: error,
});

export const UserListRequest = () => ({
  type: USER_LIST_REQUEST,
});

export const UserListActionHandler = () => async (dispatch) => {
  dispatch(UserListRequest());

  try {
    const response = await UserListApi();

    if (response?.data?.status === "success") {
      dispatch(UserListSuccess(response.data.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected Error Occurred.";
      message.error(errorMessage);
      dispatch(UserListError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something Went Wrong!";
    message.error(errorMsg);
    dispatch(UserListError(errorMsg));
  }
};
