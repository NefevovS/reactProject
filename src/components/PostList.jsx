import React from "react";
import s from "../App.module.css";
import PostItem from "./PostItem";

const PostList = ({ removePost, ...props }) => {
  return (
    <div className={s.postList}>
      {props.posts.map((item, index) => (
        <PostItem {...item} number={index + 1} removePost={removePost} />
      ))}
    </div>
  );
};

export default PostList;
