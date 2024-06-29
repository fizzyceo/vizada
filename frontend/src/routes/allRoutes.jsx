import {
  Home,
  Analytics,
  Login,
  Dashboard,
  Courses,
  SignUp,
  Saved,
} from "../pages";
import Activation from "../pages/Activate";
import Logout from "../pages/Auth/Logout";
import ChangePass from "../pages/ChangePass";
import ForgetPass from "../pages/ForgetPass";
import Profile from "../pages/Profile";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  {
    path: "/profile",
    component: <Profile />,
  },
];

const adminRoutes = [{ path: "/analytics", component: <Analytics /> }];
const publicRoutes = [
  { path: "/activate/:param1/:param2", component: <Activation /> },
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/password/reset/confirm/:param1/:param2",
    component: <ChangePass />,
  },
  {
    path: "/saved",
    component: <Saved />,
  },
  {
    path: "/forget",
    component: <ForgetPass />,
  },

  { path: "/Courses", component: <Courses /> },
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },

  { path: "/signup", component: <SignUp /> },
];

export { authProtectedRoutes, publicRoutes, adminRoutes };
