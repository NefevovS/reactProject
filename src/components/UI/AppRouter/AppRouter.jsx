import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../../routes/routes";
import { AuthContext } from "../../../Context/authContext";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((component) => (
        <Route
          path={component.path}
          element={component.element}
          key={component.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((component) => (
        <Route
          path={component.path}
          element={component.element}
          key={component.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
