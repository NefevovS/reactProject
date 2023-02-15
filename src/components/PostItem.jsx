import React from "react";
import s from "../App.module.css";
import MyButton from "./UI/Button/MyButton";

const PostItem = (post) => {
  return (
    <div>
      <div className={s.postItem}>
        <div>
          <div>
            <strong>
              {post.number}.{post.postName}
            </strong>
          </div>
          <div>{post.postDescription}</div>
        </div>
        <MyButton onClick={() => post.removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
