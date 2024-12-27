import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "../../Types/common/Types";

const initialState = {
  error: "",
  forgot_password_data: "",
  loader: false,
};
const ForgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...initialState.forgot_password_data,
        error: "",
        forgot_password_data: action.payload,
        loader: false,
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...initialState.forgot_password_data,
        error: action.error,
        forgot_password_data: "",
        loader: false,
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...initialState.forgot_password_data,
        error: null,
        forgot_password_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default ForgotPasswordReducer;
