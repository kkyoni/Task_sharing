import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../../Types/common/Types";

const initialState = {
  error: "",
  register_data: "",
  loader: false,
};
const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...initialState.register_data,
        error: "",
        register_data: action.payload,
        loader: false,
      };
    case REGISTER_ERROR:
      return {
        ...initialState.register_data,
        error: action.error,
        register_data: "",
        loader: false,
      };
    case REGISTER_REQUEST:
      return {
        ...initialState.register_data,
        error: null,
        register_data: "",
        loader: true,
      };
    default:
      return state;
  }
};
export default RegisterReducer;
