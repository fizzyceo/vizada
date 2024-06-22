import { Home, Analytics, Login, Dashboard, Courses, SignUp } from "../pages";
import Activation from "../pages/Activate";
import Logout from "../pages/Auth/Logout";

const authProtectedRoutes = [
  { path: "/analytics", component: <Analytics /> },

  { path: "/dashboard", component: <Dashboard /> },
];

const publicRoutes = [
  { path: "/activate/:param1/:param2", component: <Activation /> },
  { path: "/", component: <Home /> },
  { path: "/Courses", component: <Courses /> },
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },

  { path: "/signup", component: <SignUp /> },
];

export { authProtectedRoutes, publicRoutes };
