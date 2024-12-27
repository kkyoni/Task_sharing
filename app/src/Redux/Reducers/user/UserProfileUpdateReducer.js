import {
  USER_PROFILE_UPDATE_ERROR,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_profile_update_data: "",
  loader: false,
};
const UserProfileUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...initialState.user_profile_update_data,
        error: "",
        user_profile_update_data: action.payload,
        loader: false,
      };
    case USER_PROFILE_UPDATE_ERROR:
      return {
        ...initialState.user_profile_update_data,
        error: action.error,
        user_profile_update_data: "",
        loader: false,
      };
    case USER_PROFILE_UPDATE_REQUEST:
      return {
        ...initialState.user_profile_update_data,
        error: null,
        user_profile_update_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserProfileUpdateReducer;
