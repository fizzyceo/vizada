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

  fetchingError: "",
  getSubs: async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/subscribedetails/",

        config
      );
      set({ subs: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getUsers: async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/getusers/",

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
        `http://127.0.0.1:8000/api/subscribe/${id}/`,
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
