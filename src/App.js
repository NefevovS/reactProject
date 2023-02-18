import React, { useEffect, useState } from "react";
import PostList from "./components/UI/PostList/PostList";
import PostForm from "./components/UI/form/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import PostServise from "./components/API/PostServis";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    setIsPostLoading(true);
    const post = await PostServise.getAll();
    setPosts(post);
    setIsPostLoading(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);
  return (
    <div>
      <br />
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : sortedAndSearchedPost.length !== 0 ? (
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
