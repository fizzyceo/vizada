import { Home, Analytics, Login, Dashboard, Courses, SignUp } from "../pages";

const authProtectedRoutes = [
  { path: "/analytics", component: <Analytics /> },
  { path: "/dashboard", component: <Dashboard /> },
];

const publicRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  { path: "/", component: <Home /> },
  { path: "/Courses", component: <Courses /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <SignUp /> },
];

export { authProtectedRoutes, publicRoutes };
