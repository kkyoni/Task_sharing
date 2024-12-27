import { UserProfileUpdateApi } from "../../Apis/user/ApiConfig";
import {
  USER_PROFILE_UPDATE_ERROR,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_REQUEST,
} from "../../Types/user/Types";
import { message } from "antd";

export const UserProfileUpdateSuccess = (data) => ({
  type: USER_PROFILE_UPDATE_SUCCESS,
  payload: data,
});

export const UserProfileUpdateError = (error) => ({
  type: USER_PROFILE_UPDATE_ERROR,
  payload: error,
});

export const UserProfileUpdateRequest = () => ({
  type: USER_PROFILE_UPDATE_REQUEST,
});

export const UserProfileUpdateActionHandler = (data) => async (dispatch) => {
  dispatch(UserProfileUpdateRequest());

  try {
    const response = await UserProfileUpdateApi(data);

    if (response?.data?.status === "success") {
      message.success("Profile updated successfully!");
      dispatch(UserProfileUpdateSuccess(response.data));
    } else {
      const errorMessage =
        response?.data?.message || "Unexpected Error Occurred.";
      message.error(errorMessage);
      dispatch(UserProfileUpdateError(errorMessage));
    }
  } catch (error) {
    const errorMsg = error?.message || "Something Went Wrong!";
    message.error(errorMsg);
    dispatch(UserProfileUpdateError(errorMsg));
  }
};
