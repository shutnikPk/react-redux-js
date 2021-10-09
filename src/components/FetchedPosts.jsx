import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchedPosts } from "../redux/actions";

import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  if (!posts.length)
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchedPosts())}
      >
        Загрузить посты
      </button>
    );
  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
