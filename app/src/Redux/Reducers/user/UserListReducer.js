import {
  USER_LIST_ERROR,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_list_data: "",
  loader: false,
};
const UserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_SUCCESS:
      return {
        ...initialState.user_list_data,
        error: "",
        user_list_data: action.payload,
        loader: false,
      };
    case USER_LIST_ERROR:
      return {
        ...initialState.user_list_data,
        error: action.error,
        user_list_data: "",
        loader: false,
      };
    case USER_LIST_REQUEST:
      return {
        ...initialState.user_list_data,
        error: null,
        user_list_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserListReducer;
