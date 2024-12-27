import axios from "axios";
import { BASEURL } from "../config";
import Swal from "sweetalert2";
import { message } from "antd";
import { StatusCodes } from "http-status-codes";

const token = localStorage.getItem("token");
const authAxios = axios.create({
  baseURL: BASEURL,
  headers: {
    token: token,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    switch (error?.response?.status) {
      case StatusCodes.BAD_REQUEST:
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            error.response?.data?.data === typeof String
              ? error.response?.data?.data
              : error.response?.data?.data?.email[0],

          confirmButtonColor: "rgb(231,52,70)",
        });
        break;
      case StatusCodes.INTERNAL_SERVER_ERROR:
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,

          confirmButtonColor: "rgb(231,52,70)",
        });
        break;

      case 401:
        message.warning("Unauthorized. Redirecting to login page...");
        window.location.href = "/login";
        break;

      default:
        return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default authAxios;
