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
      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Error />} />
      {/*{routes.map(({ path, component, exact }, key) => {*/}
      {/*  <Route path={path} element={component} key={key} />;*/}
      {/*})}*/}
    </Routes>
  );
};

export default AppRouter;
