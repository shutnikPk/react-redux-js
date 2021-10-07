import React from "react";

const FetchedPosts = ({ posts }) => {
  if (!posts.length)
    return <button className="btn btn-primary">Загрузить посты</button>;
  return <></>;
};

export default FetchedPosts;
