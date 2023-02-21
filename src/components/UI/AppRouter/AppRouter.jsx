import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Posts from "../../../pages/Posts";
import About from "../../../pages/About";
import Error from "../../../pages/Error";
import PostIdPage from "../../../pages/PostIdPage";
import routes from "../../../routes/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((component) => (
        <Route path={component.path} element={component.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
