import React, { useEffect, useState } from "react";
import PostList from "./components/UI/PostList/PostList";
import PostForm from "./components/UI/form/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import PostServis from "./components/API/PostServis";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import { getPageCount, getPagesArray } from "./Utils/pages";
import "./App.css";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostServis.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <br />
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
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
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
