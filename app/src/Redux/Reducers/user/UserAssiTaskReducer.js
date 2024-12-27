import {
  USER_ASSI_LIST_ERROR,
  USER_ASSI_LIST_SUCCESS,
  USER_ASSI_LIST_REQUEST,
} from "../../Types/user/Types";

const initialState = {
  error: "",
  user_assi_task_data: "",
  loader: false,
};
const UserAssiTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ASSI_LIST_SUCCESS:
      return {
        ...initialState.user_assi_task_data,
        error: "",
        user_assi_task_data: action.payload,
        loader: false,
      };
    case USER_ASSI_LIST_ERROR:
      return {
        ...initialState.user_assi_task_data,
        error: action.error,
        user_assi_task_data: "",
        loader: false,
      };
    case USER_ASSI_LIST_REQUEST:
      return {
        ...initialState.user_assi_task_data,
        error: null,
        user_assi_task_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default UserAssiTaskReducer;
