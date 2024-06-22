import { create } from "zustand";
import { axiosHelper, tokenHelper } from "./helpers";
import axios from "axios";
import { toast } from "react-toastify";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
export const useAuth = create((set) => ({
  user: tokenHelper.getUser(),
  accessToken: tokenHelper.getToken(),
  refreshToken: tokenHelper.getRefreshToken(),
  isLoading: null,
  loadingRegister: null,
  LoadingActivation: null,
  LoadingAuthenticity: null,
  error: null,
  errorMsg: null,
  RegistrationComplete: false,

  login: async (data, router) => {
    console.log(router);
    set({ isLoading: true, errorMsg: null });
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/jwt/user/",
        data,
        config
      );
      // const response = await axiosHelper.post("/v1/auth/jwt/create/", data);
      // if (!response.data) {
      //   return;
      // }
      console.log(response?.data);

      //verification

      //tous va bien

      tokenHelper.setToken(response?.data?.access);
      tokenHelper.setRefreshToken(response?.data?.refresh);
      tokenHelper.setUser(response.data?.user);
      set({ user: response.data?.user, accessToken: response.data?.access });
      set({ isLoading: false });
      navigateAfterLogin(false, router);
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
      console.log(data);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/users/",
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
  logout: () => {
    tokenHelper.removeToken();
    tokenHelper.removeUser();
    set({ user: null, accessToken: null, refreshToken: null });
    tokenHelper.removeRefreshToken();
  },

  resetPassword: async (newPassword, router) => {
    try {
      set({ isLoading: true });
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/jwt/user/",
        data,
        config
      );

      if (response.result) {
        set((state) => ({ ...state, user: (state.user.tempPassword = false) }));
        router.navigate("/");
      }
    } catch (error) {
      console.log(error);
      // router.navigate("/login",);
    } finally {
      set({ isLoading: false });
    }
  },
  ActivateUser: async (uid, token, router) => {
    try {
      set({ LoadingActivation: true });
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/users/activation/",
        { uid, token },
        config
      );

      toast.success("Activation Completed!");
      router.navigate("/login");
    } catch (error) {
      console.log(error?.response?.status);
      if (error?.response?.status === 400) {
        toast.error("Corrupted Activation Link!");
        return;
      }
      // router.navigate("/login",);
    } finally {
      set({ LoadingActivation: false });
    }
  },
  verifyRefreshAuthenticity: async (router) => {
    //token
    try {
      set({ LoadingAuthenticity: true });
      console.log("Checking refresh authentication");
      const responseRefreshToken = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/jwt/verify/",
        { token: tokenHelper.getRefreshToken() },
        config
      );
    } catch (error) {
      toast.error("Session expired, Please login again");
      router.navigate("/login");
    } finally {
      set({ LoadingAuthenticity: false });
    }
    try {
      console.log("Checking Access authentication");
      const responseAccessToken = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/jwt/verify/",
        { token: tokenHelper.getToken() },
        config
      );

      if (responseAccessToken.status !== 200) {
        toast.error("access Token Expired");
      }
    } catch (error) {
      console.log(error.response.status === 400);
      console.log("Generate a new token");
      const resNewAT = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/jwt/refresh/",
        { refresh: tokenHelper.getRefreshToken() },
        config
      );
      console.log(resNewAT);
      tokenHelper.setToken(resNewAT.data.access);
      toast.info("Regenerating new Access Token");
    } finally {
      set({ LoadingAuthenticity: false });
    }
  },
}));

const navigateAfterLogin = (tempPassword, router) => {
  router.navigate("/dashboard");
};

const navigateAfterResetPassword = (x, router) => {};
