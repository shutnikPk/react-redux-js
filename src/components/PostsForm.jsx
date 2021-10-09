import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

const PostsForm = (props) => {
  const [postTitle, setPostTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const { title } = postTitle;
    if (!title || !title.trim()) return;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    props.createPost(newPost);
    // console.log(newPost);
    setPostTitle({ title: "" });
  };

  const changeInputHandler = (event) => {
    event.persist();
    setPostTitle((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Posts title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={postTitle.title}
            name="title"
            onChange={changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostsForm);
