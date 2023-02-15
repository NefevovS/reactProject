import React, { useState } from "react";
import s from "../../App.module.css";
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    postName: "",
    postDescription: "",
  });
  function addNewPost(event) {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    setPost({ postName: "", postDescription: "" });
    create(newPost);
  }

  return (
    <form>
      <div className={s.container}>
        <div className={s.inputContainer}>
          <MyInput
            type="text"
            onChange={(event) =>
              setPost({ ...post, postName: event.target.value })
            }
            placeholder="Название поста"
            value={post.postName}
          />
          <MyInput
            type="text"
            onChange={(event) =>
              setPost({ ...post, postDescription: event.target.value })
            }
            placeholder="Описание поста"
            value={post.postDescription}
          />
        </div>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </div>
    </form>
  );
};

export default PostForm;
