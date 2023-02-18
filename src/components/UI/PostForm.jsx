import React, { useState } from "react";
import s from "../../App.module.css";
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  function addNewPost(event) {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    setPost({ title: "", body: "" });
    create(newPost);
  }

  return (
    <form>
      <div className={s.container}>
        <div className={s.inputContainer}>
          <MyInput
            type="text"
            onChange={(event) =>
              setPost({ ...post, title: event.target.value })
            }
            placeholder="Название поста"
            value={post.title}
          />
          <MyInput
            type="text"
            onChange={(event) => setPost({ ...post, body: event.target.value })}
            placeholder="Описание поста"
            value={post.body}
          />
        </div>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </div>
    </form>
  );
};

export default PostForm;
