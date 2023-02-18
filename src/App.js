import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "аа",
      body: "бб",
    },
    {
      id: 2,
      title: "гг 2",
      body: "аа",
    },
    {
      id: 3,
      title: "вв 3",
      body: "яя",
    },
  ]);
  const [modal, setModal] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setPosts(response.data);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  return (
    <div>
      <br />
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPost.length !== 0 ? (
        <PostList
          posts={sortedAndSearchedPost}
          removePost={removePost}
          title="Посты про JS"
        />
      ) : (
        <h1>Постов не найдено</h1>
      )}
    </div>
  );
}

export default App;
