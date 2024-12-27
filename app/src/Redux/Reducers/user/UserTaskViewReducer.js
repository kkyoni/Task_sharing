import {
  USER_TASK_VIEW_ERROR,
  USER_TASK_VIEW_SUCCESS,
  USER_TASK_VIEW_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_task_view_data: "",
  loader: false,
};
const UserTaskViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TASK_VIEW_SUCCESS:
      return {
        ...initialState.user_task_view_data,
        error: "",
        user_task_view_data: action.payload,
        loader: false,
      };
    case USER_TASK_VIEW_ERROR:
      return {
        ...initialState.user_task_view_data,
        error: action.error,
        user_task_view_data: "",
        loader: false,
      };
    case USER_TASK_VIEW_REQUEST:
      return {
        ...initialState.user_task_view_data,
        error: null,
        user_task_view_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserTaskViewReducer;
