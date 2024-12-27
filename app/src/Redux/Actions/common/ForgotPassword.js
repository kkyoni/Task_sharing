import { message } from "antd";
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
} from "../../Types/common/Types";
import { ForgotPasswordApi } from "../../Apis/common/ApiConfig";

export const ForgotPasswordSuccess = (res) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: res,
  };
};
export const ForgotPasswordError = (error) => {
  return {
    type: FORGOT_PASSWORD_ERROR,
    error: error,
  };
};

export const ForgotPasswordActionHandler = (data) => {
  return async (dispatch) => {
    try {
      const res = await ForgotPasswordApi(data);
      const errorMessage =
        res?.data?.message || "An unexpected error occurred.";

      if (res?.data?.status === "success") {
        message.success(
          `If the email is registered, you will receive a password reset link shortly. Then Password: ${res.data.data}`
        );
        dispatch(ForgotPasswordSuccess(res.data.data));
      } else {
        message.error(errorMessage);
        dispatch(ForgotPasswordError(errorMessage));
      }
    } catch (err) {
      console.error(err);
      const errorMsg =
        err?.response?.data?.message || "Something Went Wrong!!!";
      message.error(errorMsg);
      dispatch(ForgotPasswordError(errorMsg));
    }
  };
};
