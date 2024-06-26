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
export const useCoursesStore = create((set, get) => ({
  courses: [],
  categoryCourses: [],
  sousCategoryCourses: [],
  categories: [],
  subcategories: [],
  favorites: [],
  fetchingError: "",
  getCategories: async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/categorie/",

        config
      );
      set({ categories: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getSubCategories: async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/souscategorie/",

        config
      );
      set({ subcategories: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getCourses: async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/course/`,
        config
      );
      set({ courses: response.data });
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getCoursesByCategory: async (idcategory) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/course/category/${idcategory}/`,
        config
      );
      console.log(idcategory, response.data);
      set({ categoryCourses: response.data });
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getCoursesBySousCategory: async (idsouscategory) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/course/souscategory/${idsouscategory}/`,
        config
      );
      console.log(response.data);
      set({ sousCategoryCourses: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getFavorites: async () => {
    try {
      if (tokenHelper.getToken()) {
        let headers = {
          ...config.headers,
          Authorization: "Bearer " + tokenHelper.getToken(),
        };
        const response = await axios.get(
          `http://127.0.0.1:8000/api/favoritesbyuser/`,
          { headers: headers }
        );
        console.log(response.data);
        set({ favorites: response.data });
      } else {
        set({ favorites: [] });
      }
    } catch (e) {}
  },
  RemoveFavorite: async (id) => {
    try {
      // const { verifyRefreshAuthenticity } = useAuth((state) => state);
      // verifyRefreshAuthenticity();
      let token = tokenHelper.getToken();
      let headers = {
        ...config.headers,
        Authorization: "Bearer " + token,
      };
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/favorite/${id}/`,
        { headers: headers }
      );
      toast.success("A saved course has been removed from the list!");
      get().getFavorites();
    } catch (e) {
      console.log(e);
    }
  },
  insertFavorite: async (idu, idc) => {
    try {
      // const { verifyRefreshAuthenticity } = useAuth((state) => state);

      // verifyRefreshAuthenticity();
      let token = tokenHelper.getToken();
      let headers = {
        ...config.headers,
        Authorization: "Bearer " + token,
      };
      const response = await axios.post(
        `http://127.0.0.1:8000/api/favorite/`,
        { Id_user: idu, Id_c: idc },
        { headers: headers }
      );
      toast.success("A saved course has been added to the list!");
      get().getFavorites();
    } catch (e) {
      console.log(e);
    }
  },
  setFavorites: async () => {
    try {
    } catch (e) {}
  },
}));
