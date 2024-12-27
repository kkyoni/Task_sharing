import { UserChangePasswordApi } from "../../Apis/user/ApiConfig";
import {
  USER_CHANGE_PASSWORD_ERROR,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserChangePasswordSuccess = (data) => ({
  type: USER_CHANGE_PASSWORD_SUCCESS,
  payload: data,
});

export const UserChangePasswordError = (error) => ({
  type: USER_CHANGE_PASSWORD_ERROR,
  payload: error,
});

export const UserChangePasswordRequest = () => ({
  type: USER_CHANGE_PASSWORD_REQUEST,
});

export const UserChangePasswordActionHandler = (data) => async (dispatch) => {
  dispatch(UserChangePasswordRequest());

  try {
    const response = await UserChangePasswordApi(data);

    if (response?.data?.status === "success") {
      message.success("Password Changed Successfully!");
      dispatch(UserChangePasswordSuccess(response.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected Error Occurred.";
      message.error(errorMessage);
      dispatch(UserChangePasswordError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something Went Wrong!";
    message.error(errorMsg);
    dispatch(UserChangePasswordError(errorMsg));
  }
};
