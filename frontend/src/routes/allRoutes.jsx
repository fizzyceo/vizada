import { Home, Analytics, Login, Dashboard, Courses } from "../pages";

const authProtectedRoutes = [
  { path: "/analytics", component: <Analytics /> },
  { path: "/dashboard", component: <Dashboard /> },
];

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/Courses", component: <Courses /> },
  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
