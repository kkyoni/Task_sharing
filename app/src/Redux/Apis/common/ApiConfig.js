import authAxios from "../../../Config/AuthAxios";

export const LoginApi = async (data) => {
  try {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    const res = await authAxios.post("login", loginData);
    return res;
  } catch (err) {
    return err;
  }
};

export const RegisterApi = async (data) => {
  try {
    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const res = await authAxios.post("register", registerData);
    return res;
  } catch (err) {
    return err;
  }
};

export const ForgotPasswordApi = async (data) => {
  try {
    const forgotPasswordData = {
      email: data.email,
    };
    const res = await authAxios.post("forgotPassword", forgotPasswordData);
    return res;
  } catch (err) {
    return err;
  }
};
