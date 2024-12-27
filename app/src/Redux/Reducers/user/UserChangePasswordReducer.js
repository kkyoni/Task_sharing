import {
  USER_CHANGE_PASSWORD_ERROR,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_change_password_data: "",
  loader: false,
};
const UserChangePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE_PASSWORD_SUCCESS:
      return {
        ...initialState.user_change_password_data,
        error: "",
        user_change_password_data: action.payload,
        loader: false,
      };
    case USER_CHANGE_PASSWORD_ERROR:
      return {
        ...initialState.user_change_password_data,
        error: action.error,
        user_change_password_data: "",
        loader: false,
      };
    case USER_CHANGE_PASSWORD_REQUEST:
      return {
        ...initialState.user_change_password_data,
        error: null,
        user_change_password_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserChangePasswordReducer;
