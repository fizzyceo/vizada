import { create } from "zustand";
import { axiosHelper, tokenHelper } from "./helpers";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./Auth";

const config = {
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_SLICK_PAY_TOKEN}`,
  },
};
export const useInvoiceStore = create((set, get) => ({
  subs: [],
  users: [],
  isError: null,
  isLoading: false,

  fetchingError: "",
  CreateInvoice: async (body, navigate) => {
    try {
      const response = await axios.post(
        "https://devapi.slick-pay.com/api/v2/users/invoices",
        body,
        config
      );
      if (response.data.success) {
        console.log(response.data);
        const invoiceUrl = response.data.url;
        console.log("Navigating to:", invoiceUrl);

        // Set browser location to invoice URL
        window.location.href = invoiceUrl;

        return response.data;
      } else {
        console.log(response);
      }
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  GetInvoice: async (id, navigate, email) => {
    try {
      const response = await axios.get(
        `https://devapi.slick-pay.com/api/v2/users/invoices/${id}`,

        config
      );
      if (response.data.completed) {
        if (response.data.data.email !== email) {
          navigate("/logout");
        }
      }
      return response.data;
    } catch (e) {
      if (e.response.status === 404) {
        navigate("/logout");

        toast.error("no invoice with that id");
      }
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
