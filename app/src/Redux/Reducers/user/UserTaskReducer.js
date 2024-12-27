import {
  USER_TASK_ERROR,
  USER_TASK_SUCCESS,
  USER_TASK_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_task_data: "",
  loader: false,
};
const UserTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TASK_SUCCESS:
      return {
        ...initialState.user_task_data,
        error: "",
        user_task_data: action.payload,
        loader: false,
      };
    case USER_TASK_ERROR:
      return {
        ...initialState.user_task_data,
        error: action.error,
        user_task_data: "",
        loader: false,
      };
    case USER_TASK_REQUEST:
      return {
        ...initialState.user_task_data,
        error: null,
        user_task_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserTaskReducer;
