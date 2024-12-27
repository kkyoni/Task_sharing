import { message } from "antd";
import { REGISTER_ERROR, REGISTER_SUCCESS } from "../../Types/common/Types";
import { RegisterApi } from "../../Apis/common/ApiConfig";

export const RegisterSuccess = (res) => ({
  type: REGISTER_SUCCESS,
  payload: res,
});

export const RegisterError = (error) => ({
  type: REGISTER_ERROR,
  error,
});

export const RegisterActionHandler = (data) => {
  return async (dispatch) => {
    try {
      const res = await RegisterApi(data);
      const errorMessage =
        res?.data?.message || "An unexpected error occurred.";

      if (res?.data?.status === "success") {
        message.success("Registered Successfully!");
        dispatch(RegisterSuccess(res.data.data));
      } else {
        message.error(errorMessage);
        dispatch(RegisterError(errorMessage));
      }
    } catch (err) {
      console.error(err);
      const errorMsg =
        err?.response?.data?.message || "Something Went Wrong!!!";
      message.error(errorMsg);
      dispatch(RegisterError(errorMsg));
    }
  };
};
