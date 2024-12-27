import { BASEURL } from "../../../config";
import authAxios from "../../../Config/AuthAxios";

export const UserProfileApi = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: BASEURL + "getProfile",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserProfileUpdateApi = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: BASEURL + "updateProfile",
      data: JSON.stringify(data),
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserChangePasswordApi = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: BASEURL + "changePassword",
      data: JSON.stringify(data),
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserTaskApi = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: BASEURL + "getTask",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserListApi = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: BASEURL + "getUserList",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserAssiTaskListApi = async (userId, TaskId) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: BASEURL + "userAssiTaskList",
      data: {
        userId,
        TaskId,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserTaskAssignmentApi = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: BASEURL + "getUserTaskAssignment",
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserTaskAssignmentCheckedApi = async (TaskId) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: BASEURL + "userTaskAssignmentChecked",
      data: {
        TaskId,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserCreateTaskListApi = async (name) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: BASEURL + "userCreateTaskList",
      data: {
        name,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserTaskDeleteApi = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      url: BASEURL + "userTaskDelete",
      data: {
        id,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const UserTaskViewApi = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await authAxios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: `${BASEURL}getUserTaskView/${id}`,
    });

    return res;
  } catch (err) {
    return err;
  }
};
