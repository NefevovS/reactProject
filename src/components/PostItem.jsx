import React from "react";
import "../App.css";
import MyButton from "./UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (post) => {
  const router = useNavigate();
  return (
    <div>
      <div className="postItem">
        <div>
          <div>
            <strong>
              {post.id}.{post.title}
            </strong>
          </div>
          <div>{post.body}</div>
        </div>
        <div className="btnGroup">
          <MyButton onClick={() => router(`/posts/${post.id}`)}>
            Открыть
          </MyButton>
          <MyButton onClick={() => post.removePost(post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
