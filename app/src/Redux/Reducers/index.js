import { combineReducers } from "redux";
import LoginReducer from "./common/LoginReducer";
import RegisterReducer from "./common/RegisterReducer";
import ForgotPasswordReducer from "./common/ForgotPasswordReducer";
import UserProfileReducer from "./user/UserProfileReducer";
import UserProfileUpdateReducer from "./user/UserProfileUpdateReducer";
import UserChangePasswordReducer from "./user/UserChangePasswordReducer";
import UserTaskReducer from "./user/UserTaskReducer";
import UserListReducer from "./user/UserListReducer";
import UserAssiTaskReducer from "./user/UserAssiTaskReducer";
import UserTaskAssignmentReducer from "./user/UserTaskAssignmentReducer";
import UserTaskAssignmentCheckedReducer from "./user/UserTaskAssignmentCheckedReducer";
import UserCreateTaskReducer from "./user/UserCreateTaskReducer";
import UserTaskDeleteReducer from "./user/UserTaskDeleteReducer";
import UserTaskViewReducer from "./user/UserTaskViewReducer";

const rootReducer = combineReducers({
  LoginData: LoginReducer,
  RegisterData: RegisterReducer,
  ForgotPasswordData: ForgotPasswordReducer,
  UserProfileData: UserProfileReducer,
  UserProfileUpdateData: UserProfileUpdateReducer,
  UserChangePasswordData: UserChangePasswordReducer,
  UserTaskData: UserTaskReducer,
  UserListData: UserListReducer,
  UserAssiTaskData: UserAssiTaskReducer,
  UserTaskAssignmentData: UserTaskAssignmentReducer,
  UserTaskAssignmentCheckedData: UserTaskAssignmentCheckedReducer,
  UserCreateTaskData: UserCreateTaskReducer,
  UserTaskDeleteData: UserTaskDeleteReducer,
  UserTaskViewData: UserTaskViewReducer,
});
export default rootReducer;
