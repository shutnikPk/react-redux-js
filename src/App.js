import React from "react";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import PostsForm from "./components/PostsForm";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostsForm />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
