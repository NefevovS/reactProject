import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import React from "react";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "*", element: <Error /> },
  { path: "/", element: <Posts /> },
];
export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <Login /> },
];
