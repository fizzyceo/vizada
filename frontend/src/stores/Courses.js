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
  coursesSearch: [],
  navSearch: async (key) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/courses?search=${key}`,

        config
      );
      set({ coursesSearch: response.data });

      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting search" });
    }
  },
  getCategories: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/categorie/`,

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
        `${import.meta.env.VITE_BACKNED_URL}/api/souscategorie/`,

        config
      );
      set({ subcategories: response.data });
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getSubCategoriesDetails: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/souscategoriedetail/`,

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
        `${import.meta.env.VITE_BACKNED_URL}/api/course/`,
        config
      );
      set({ courses: response.data });
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getOneCourses: async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/course/${id}/`,
        config
      );
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getOneSousCategory: async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/souscategorie/${id}/`,
        config
      );
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  ModifySousCategory: async (id, data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKNED_URL}/api/souscategorie/${id}/`,
        data,
        config
      );
      toast.success("A categorie has been modified successfully!");
      get().getSubCategoriesDetails();

      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  ModifyCourse: async (id, data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKNED_URL}/api/course/${id}/`,
        data,
        config
      );
      toast.success("A course has been modified successfully!");
      get().getCoursesDetails();

      return response.data;
    } catch (e) {
      console.log(e.response);
      if (e.response.data?.image?.length > 0) {
        toast.error("insert a valid image");
        console.log(e.response.data?.image[0]);
      }
      if (e.response.data?.link?.length > 0) {
        toast.error("insert a valid link");
        console.log(e.response.data?.link[0]);
      }
      set({ fetchingError: "error getting categories" });
    }
  },
  AddCourse: async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/course/`,
        data,
        config
      );
      toast.success("A course has been added successfully!");
      get().getCoursesDetails();

      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  AddSousCategory: async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKNED_URL}/api/souscategorie/`,
        data,
        config
      );
      toast.success("A new subcategorie has been added successfully!");
      get().getSubCategoriesDetails();

      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  deleteCourse: async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKNED_URL}/api/course/${id}/`,
        config
      );
      toast.success("A course has been removed successfully!");
      get().getCoursesDetails();
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  deleteSousCategory: async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKNED_URL}/api/souscategorie/${id}/`,
        config
      );
      get().getSubCategoriesDetails();

      toast.success("A categorie has been removed successfully!");

      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getCoursesDetails: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/coursedetail/`,
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
      const capitalizedIdCategory =
        idcategory.charAt(0).toUpperCase() + idcategory.slice(1);

      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKNED_URL
        }/api/course/category/${capitalizedIdCategory}/`,
        config
      );
      console.log(idcategory, response.data);
      set({ categoryCourses: response.data });
      return response.data;
    } catch (e) {
      set({ fetchingError: "error getting categories" });
    }
  },
  getCoursesBySousCategory: async (name) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKNED_URL}/api/course/souscategory/${name}/`,
        config
      );
      console.log(response.data);
      return response.data;
      // set({ sousCategoryCourses: response.data });
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
          `${import.meta.env.VITE_BACKNED_URL}/api/favoritesbyuser/`,
          { headers: headers }
        );
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
        `${import.meta.env.VITE_BACKNED_URL}/api/favorite/${id}/`,
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
        `${import.meta.env.VITE_BACKNED_URL}/api/favorite/`,
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
