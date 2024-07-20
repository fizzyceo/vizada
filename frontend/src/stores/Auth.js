import { create } from "zustand";
import { axiosHelper, tokenHelper } from "./helpers";
import axios from "axios";
import { toast } from "react-toastify";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
export const useAuth = create((set, get) => ({
  user: tokenHelper.getUser(),
  accessToken: tokenHelper.getToken(),
  refreshToken: tokenHelper.getRefreshToken(),

  isLoading: null,
  loadingRegister: null,
  LoadingActivation: null,
  LoadingAuthenticity: null,
  loadChangePass: null,
  changeCompleted: false,
  error: null,
  errorMsg: null,
  RegistrationComplete: false,

  login: async (data, router) => {
    set({ isLoading: true, errorMsg: null });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/jwt/user/`,
        data,
        config
      );

      tokenHelper.setToken(response?.data?.access);
      tokenHelper.setRefreshToken(response?.data?.refresh);
      tokenHelper.setUser(response.data?.user);
      set({ user: response.data?.user, accessToken: response.data?.access });
      set({ isLoading: false });
      navigateAfterLogin(response?.data?.user?.role, router);
    } catch (error) {
      if (error.response.data.non_field_errors) {
        set({ isLoading: false });
        toast.error("Error: " + error.response.data.non_field_errors);
      }
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (data) => {
    try {
      set({ loadingRegister: true });
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/auth/users/`,
        data,
        config
      );

      set({ loadingRegister: true, RegistrationComplete: true });
    } catch (error) {
      if (
        error.response.data.email?.length > 0 ||
        error.response.data.password?.length > 0 ||
        error.response.data.first_name?.length > 0 ||
        error.response.data.last_name?.length > 0 ||
        error.response.data.ntel?.length > 0
      ) {
        set({ loadingRegister: false, RegistrationComplete: false });
        if (error.response.data?.first_name?.length > 0) {
          toast.error("first Name: " + error.response.data.first_name[0]);
        }
        if (error.response.data?.last_name?.length > 0) {
          toast.error("Last Name: " + error.response.data.last_name[0]);
        }

        if (error.response.data?.email?.length > 0) {
          toast.error("Error: " + error.response.data.email[0]);
        }
        if (error.response.data?.password?.length > 0) {
          toast.error("Error: " + error.response.data.password[0]);
        }
        if (error.response.data?.ntel?.length > 0) {
          toast.error("Error: " + error.response.data.ntel[0]);
        }
      }
    } finally {
      set({ loadingRegister: false });
    }
  },
  logout: async () => {
    let refresh = tokenHelper.getRefreshToken();
    let token = tokenHelper.getToken();
    let headers = {
      ...config.headers,
      Authorization: "Bearer " + token,
    };

    if (refresh && token) {
      tokenHelper.removeToken();
      tokenHelper.removeUser();
      tokenHelper.removeRefreshToken();

      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/auth/logout/`,
        { refresh: refresh },
        { headers: headers }
      );
    }

    set({ user: null, accessToken: null, refreshToken: null });
  },

  ActivateUser: async (uid, token, router) => {
    try {
      set({ LoadingActivation: true });
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/users/activation/`,
        { uid, token },
        config
      );

      toast.success("Activation Completed!");
      router.navigate("/login");
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error("Corrupted Activation Link!");
        return;
      }
    } finally {
      set({ LoadingActivation: false });
    }
  },
  ForgetPassword: async (uid, token, new_password, re_new_password, router) => {
    try {
      set({ LoadingActivation: true });
      const response = await axios.post(
        `${
          import.meta.env.VITE_BACKNED_URL
        }/api/v1/auth/users/reset_password_confirm/`,
        { uid, token, new_password, re_new_password },
        config
      );

      toast.success("Password Changed!");
      router.navigate("/login");
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error("Corrupted Activation Link!");
        return;
      }
      // router.navigate("/login",);
    } finally {
      set({ LoadingActivation: false });
    }
  },
  sendEmailResetPass: async (email) => {
    try {
      set({ LoadingActivation: true });
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/users/reset_password/`,
        { email: email },
        config
      );

      toast.success("Email Sent!");
      router.navigate("/login");
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error("Corrupted Activation Link!");
        return;
      }
      // router.navigate("/login",);
    } finally {
      set({ LoadingActivation: false });
    }
  },
  verifyingRefresh: async (router) => {
    try {
      set({ LoadingAuthenticity: true });
      console.log("Checking refresh authentication");
      const responseRefreshToken = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/jwt/verify/`,
        { token: tokenHelper.getRefreshToken() },
        config
      );
    } catch (error) {
      router.navigate("/logout");
    } finally {
      set({ LoadingAuthenticity: false });
    }
  },
  verifyRefreshAuthenticity: async (router) => {
    //token
    try {
      set({ LoadingAuthenticity: true });
      const responseRefreshToken = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/jwt/verify/`,
        { token: tokenHelper.getRefreshToken() },
        config
      );
    } catch (error) {
      router.navigate("/logout");
    } finally {
      set({ LoadingAuthenticity: false });
    }
    try {
      const responseAccessToken = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/jwt/verify/`,
        { token: tokenHelper.getToken() },
        config
      );
      if (responseAccessToken.status !== 200) {
      }
    } catch (error) {
      const resNewAT = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/jwt/refresh/`,
        { refresh: tokenHelper.getRefreshToken() },
        config
      );

      tokenHelper.setToken(resNewAT.data?.access);
      tokenHelper.setRefreshToken(resNewAT.data?.refresh);
    } finally {
      set({ LoadingAuthenticity: false });
    }
  },
  changePassword: async (current_password, new_password, re_new_password) => {
    try {
      set({ loadChangePass: false });

      get().verifyRefreshAuthenticity();
      let headers = {
        ...config.headers,
        Authorization: "Bearer " + tokenHelper.getToken(),
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/v1/auth/users/set_password/`,
        {
          current_password: current_password,
          new_password,
          re_new_password,
        },
        { headers: headers }
      );
      set({ loadChangePass: true, changeCompleted: true });
      toast.success("Password updated successfully");
    } catch (e) {
      if (e.response.data.current_password[0].length > 0) {
        toast.error("Invalid Password");
      }
    }
  },
  updateProfile: async (accessToken, data) => {
    try {
      get().verifyRefreshAuthenticity();
      let headers = {
        ...config.headers,
        Authorization: "Bearer " + accessToken,
      };

      const responseUpdateDevice = await axios.put(
        `${import.meta.env.VITE_BACKNED_URL}/api/updateprofile/`,
        { ...data },
        { headers: headers }
      );

      if (responseUpdateDevice.status === 200) {
        toast.success("Profile updated successfully");
        console.log({
          ...tokenHelper.getUser(),
          ...responseUpdateDevice.data,
        });
        tokenHelper.setUser({
          ...tokenHelper.getUser(),
          ...responseUpdateDevice.data,
        });
      }
    } catch (e) {
      if (e.response?.data?.ntel?.length > 0) {
        toast.error("Update Failed: Phone Number already in use.");
      }
      if (e.response?.data?.detail?.length > 0) {
        toast.error(`Update Failed: ${e.response.data.detail[0]}.`);
      }
      console.log(e);
    }
  },
}));

const navigateAfterLogin = (role, router) => {
  if (role === true) router.navigate("/analytics1");
  else router.navigate("/dashboard");
};

const navigateAfterResetPassword = (x, router) => {};
