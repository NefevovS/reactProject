import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../../routes/routes";

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((component) => (
        <Route path={component.path} element={component.element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((component) => (
        <Route path={component.path} element={component.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
