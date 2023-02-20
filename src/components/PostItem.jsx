import React from "react";
import "../App.css";
import MyButton from "./UI/Button/MyButton";

const PostItem = (post) => {
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
        <MyButton onClick={() => post.removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
