import { UserProfileApi } from "../../Apis/user/ApiConfig";
import {
  USER_PROFILE_ERROR,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserProfileSuccess = (data) => ({
  type: USER_PROFILE_SUCCESS,
  payload: data,
});

export const UserProfileError = (error) => ({
  type: USER_PROFILE_ERROR,
  payload: error,
});

export const UserProfileRequest = () => ({
  type: USER_PROFILE_REQUEST,
});

export const UserProfileActionHandler = () => async (dispatch) => {
  dispatch(UserProfileRequest());

  try {
    const response = await UserProfileApi();

    if (response?.data?.status === "success") {
      dispatch(UserProfileSuccess(response.data.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected Error Occurred.";
      message.error(errorMessage);
      dispatch(UserProfileError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something Went Wrong!";
    message.error(errorMsg);
    dispatch(UserProfileError(errorMsg));
  }
};
