import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      postName: "аа",
      postDescription: "бб",
    },
    {
      id: 2,
      postName: "гг 2",
      postDescription: "аа",
    },
    {
      id: 3,
      postName: "вв 3",
      postDescription: "яя",
    },
  ]);
  const [modal, setModal] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedPosts = useMemo(() => {
    if (filter.sort)
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    return posts;
  }, [filter.sort, posts]);
  const sortedAndSearchedPost = useMemo(() => {
    if (filter.sort === "postDescription")
      return sortedPosts.filter((post) =>
        post.postDescription.toLowerCase().includes(filter.query.toLowerCase())
      );
    else
      return sortedPosts.filter((post) =>
        post.postName.toLowerCase().includes(filter.query.toLowerCase())
      );
  }, [filter.query, filter.sort, sortedPosts]);

  return (
    <div>
      <br />
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
