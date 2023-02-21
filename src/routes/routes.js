import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

const routes = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostIdPage },
  { path: "*", element: Error },
  { path: "/", element: Posts },
];
export default routes;
