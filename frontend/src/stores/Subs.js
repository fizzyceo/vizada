import { create } from "zustand";
import { axiosHelper, tokenHelper } from "./helpers";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./Auth";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
export const useSubStore = create((set, get) => ({
  subs: [],
  users: [],
  isError: null,
  isLoading: false,
  currentSub: null,
  fetchingError: "",
  getSubs: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/subscribedetails/`,

        config
      );
      set({ subs: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },

  createSub: async (body) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/subscribe/`,
        body,
        config
      );
      toast.success("a New Subscription has been created");
      get().getOneSub(body.Id_user);
      return response.data;
    } catch (e) {
      set({ fetchingError: "error creating sub" });
    }
  },
  getOneSub: async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/check_subscription/${id}`,

        config
      );
      set({ currentSub: response.data });

      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting sub" });
    }
  },
  getUsers: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/getusers/`,

        config
      );
      set({ users: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  modifySubState: async (id, data) => {
    try {
      console.log(data);
      const response = await axios.put(
        `${import.meta.env.VITE_BACKNED_URL}/api/subscribe/${id}/`,
        data,
        config
      );

      toast.success("subscription activated successfully");
      get().getSubs();
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  ApplySubscription: async () => {},
}));
