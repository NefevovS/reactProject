import React from "react";
import "../../../App.css";
import PostItem from "../../PostItem";
import "./PostList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ removePost, ...props }) => {
  return (
    <div>
      <TransitionGroup className="postList">
        {props.posts.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="post">
            <PostItem {...item} number={index + 1} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
