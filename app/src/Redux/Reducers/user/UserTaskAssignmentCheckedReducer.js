import {
  USER_TASK_ASSIGNMENT_CHECKED_ERROR,
  USER_TASK_ASSIGNMENT_CHECKED_SUCCESS,
  USER_TASK_ASSIGNMENT_CHECKED_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_task_assignment_checked_data: "",
  loader: false,
};
const UserTaskAssignmentCheckedReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TASK_ASSIGNMENT_CHECKED_SUCCESS:
      return {
        ...initialState.user_task_assignment_checked_data,
        error: "",
        user_task_assignment_checked_data: action.payload,
        loader: false,
      };
    case USER_TASK_ASSIGNMENT_CHECKED_ERROR:
      return {
        ...initialState.user_task_assignment_checked_data,
        error: action.error,
        user_task_assignment_checked_data: "",
        loader: false,
      };
    case USER_TASK_ASSIGNMENT_CHECKED_REQUEST:
      return {
        ...initialState.user_task_assignment_checked_data,
        error: null,
        user_task_assignment_checked_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserTaskAssignmentCheckedReducer;
