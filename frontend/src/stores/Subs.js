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
        "http://127.0.0.1:8000/api/categorie/",

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
        "http://127.0.0.1:8000/api/souscategorie/",

        config
      );
      set({ users: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
}));
