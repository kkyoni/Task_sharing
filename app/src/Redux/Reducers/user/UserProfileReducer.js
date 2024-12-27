import {
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_profile_data: "",
  loader: false,
};
const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...initialState.user_profile_data,
        error: "",
        user_profile_data: action.payload,
        loader: false,
      };
    case USER_PROFILE_ERROR:
      return {
        ...initialState.user_profile_data,
        error: action.error,
        user_profile_data: "",
        loader: false,
      };
    case USER_PROFILE_REQUEST:
      return {
        ...initialState.user_profile_data,
        error: null,
        user_profile_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserProfileReducer;
