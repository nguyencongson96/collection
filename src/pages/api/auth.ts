import axiosClient from "./axiosClient";
import { LOGIN_ACCOUNT, UPDATE_ACCOUNT, REGISTER_ACCOUNT } from "@/types/custom";
import * as URL from "@/utlis/constant";

const authAPI = {
  login: (account: LOGIN_ACCOUNT) => axiosClient.post(URL.LOGIN_URL, account),

  logout: () => axiosClient.post(URL.LOGOUT_URL),

  updateUser: (info: UPDATE_ACCOUNT) => axiosClient.put(URL.UPDATE_USER_URL, info),

  register: (info: REGISTER_ACCOUNT) => axiosClient.post(URL.REGISTER_URL, info),

  forgotPassword: (data: { email: string }) => axiosClient.post(`${URL.FORGOT_URL}/${data.email}`),

  resetPassword: (data: { newPassword: string; passwordToken: string }) => {
    const newData = {
      password: data.newPassword,
      passwordToken: data.passwordToken,
    };
    return axiosClient.put(URL.RESET_URL, newData);
  },
};

export default authAPI;
