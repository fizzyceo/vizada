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
export const useContactStore = create((set, get) => ({
  contactError: "",

  sendContact: async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/sendcontactusemail/`,
        data,
        config
      );
    } catch (e) {
      if (
        e.response.data?.subject?.length > 0 ||
        e.response.data?.message?.length > 0 ||
        e.response.data?.sender_email?.length > 0
      ) {
        toast.error("enter valid Informations!");
      }
      set({ contactError: "error sending contact" });
    }
  },
}));
