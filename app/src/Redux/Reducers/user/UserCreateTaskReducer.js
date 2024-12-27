import {
  USER_CREATE_TASK_LIST_ERROR,
  USER_CREATE_TASK_LIST_SUCCESS,
  USER_CREATE_TASK_LIST_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_create_task_data: "",
  loader: false,
};
const UserCreateTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATE_TASK_LIST_SUCCESS:
      return {
        ...initialState.user_create_task_data,
        error: "",
        user_create_task_data: action.payload,
        loader: false,
      };
    case USER_CREATE_TASK_LIST_ERROR:
      return {
        ...initialState.user_create_task_data,
        error: action.error,
        user_create_task_data: "",
        loader: false,
      };
    case USER_CREATE_TASK_LIST_REQUEST:
      return {
        ...initialState.user_create_task_data,
        error: null,
        user_create_task_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserCreateTaskReducer;
