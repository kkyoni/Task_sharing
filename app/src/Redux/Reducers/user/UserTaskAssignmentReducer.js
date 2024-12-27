import {
  USER_TASK_ASSIGNMENT_ERROR,
  USER_TASK_ASSIGNMENT_SUCCESS,
  USER_TASK_ASSIGNMENT_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_task_assignment_data: "",
  loader: false,
};
const UserTaskAssignmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TASK_ASSIGNMENT_SUCCESS:
      return {
        ...initialState.user_task_assignment_data,
        error: "",
        user_task_assignment_data: action.payload,
        loader: false,
      };
    case USER_TASK_ASSIGNMENT_ERROR:
      return {
        ...initialState.user_task_assignment_data,
        error: action.error,
        user_task_assignment_data: "",
        loader: false,
      };
    case USER_TASK_ASSIGNMENT_REQUEST:
      return {
        ...initialState.user_task_assignment_data,
        error: null,
        user_task_assignment_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserTaskAssignmentReducer;
