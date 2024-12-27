import {
  USER_TASK_DELETE_ERROR,
  USER_TASK_DELETE_SUCCESS,
  USER_TASK_DELETE_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_task_dalete_data: "",
  loader: false,
};
const UserTaskDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TASK_DELETE_SUCCESS:
      return {
        ...initialState.user_task_dalete_data,
        error: "",
        user_task_dalete_data: action.payload,
        loader: false,
      };
    case USER_TASK_DELETE_ERROR:
      return {
        ...initialState.user_task_dalete_data,
        error: action.error,
        user_task_dalete_data: "",
        loader: false,
      };
    case USER_TASK_DELETE_REQUEST:
      return {
        ...initialState.user_task_dalete_data,
        error: null,
        user_task_dalete_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserTaskDeleteReducer;
