import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      postName: "JavaScript",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos dolor ex nisi numquam optio quisquam\n" +
        "        repellendus? Aliquam, cum ducimus laudantium minus odit quibusdam tempora voluptas! Culpa et modi tempore.",
    },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const [selectedSort, setSelectedSort] = useState("");
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
  };
  return (
    <div>
      <br />
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={"Сортировка по"}
        options={[
          { value: "postName", name: "По названию" },
          { value: "postDescription", name: "По описанию" },
        ]}
      />
      {posts.length !== 0 ? (
        <PostList posts={posts} removePost={removePost} title="Посты про JS" />
      ) : (
        <h1>Постов не найдено</h1>
      )}
    </div>
  );
}

export default App;
