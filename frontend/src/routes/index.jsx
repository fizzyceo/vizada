import React from "react";
import { Routes, Route } from "react-router-dom";

//routes
import { authProtectedRoutes, publicRoutes, adminRoutes } from "./allRoutes";
import { AuthProtected, RoleProtected } from "./AuthProtected";
//do the same as authProtectedRoutes but with the admin routes & the other roles routes

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthProtected>{route.component}</AuthProtected>}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
        {/* Admin Routes */}

        <Route>
          {adminRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected>
                  <RoleProtected role={true}>{route.component}</RoleProtected>
                </AuthProtected>
              }
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
