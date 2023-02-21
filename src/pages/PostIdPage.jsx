import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../components/hooks/useFetching";
import PostServis from "../components/API/PostServis";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [fetchPostByID, isLoading, error] = useFetching(async () => {
    const response = await PostServis.getByID(params.id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostByID(params.id);
  }, []);

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostServis.getCommentsByPostId(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchComments(params.id);
  }, []);
  const [comments, setComments] = useState([]);
  return (
    <div>
      <h1>Страница поста {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <strong>{post.id}</strong>
          {post.title}
        </div>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        comments.map((item) => (
          <div style={{ margin: "15px" }}>
            <h5>{item.email}</h5>
            <div>{item.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostIdPage;
