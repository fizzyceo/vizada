export const tokenHelper = {
  setToken: (accessToken) => {
    localStorage.setItem("AccessToken", accessToken);
  },
  setRefreshToken: (refreshToken) => {
    localStorage.setItem("RefreshToken", refreshToken);
  },
  getToken: () => {
    const x = localStorage.getItem("AccessToken");

    return localStorage.getItem("AccessToken");
  },
  getRefreshToken: () => {
    const x = localStorage.getItem("RefreshToken");

    return x;
  },

  removeToken: (key) => {
    return localStorage.removeItem("AccessToken");
  },
  removeRefreshToken: (key) => {
    return localStorage.removeItem("RefreshToken");
  },
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  removeUser: (key) => {
    return localStorage.removeItem("user");
  },
};
