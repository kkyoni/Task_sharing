import { message } from "antd";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../Types/common/Types";
import { LoginApi } from "../../Apis/common/ApiConfig";

export const LoginSuccess = (res) => ({
  type: LOGIN_SUCCESS,
  payload: res,
});

export const LoginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const LoginActionHandler = (data) => {
  return async (dispatch) => {
    try {
      const res = await LoginApi(data);
      const errorMessage =
        res?.data?.message || "An unexpected error occurred.";

      if (res?.data?.status === "success") {
        message.success("Login Successfully!");
        dispatch(LoginSuccess(res.data.data));
      } else {
        message.error(errorMessage);
        dispatch(LoginError(errorMessage));
      }
    } catch (err) {
      console.error(err);
      const errorMsg =
        err?.response?.data?.message || "Something Went Wrong!!!";
      message.error(errorMsg);
      dispatch(LoginError(errorMsg));
    }
  };
};
