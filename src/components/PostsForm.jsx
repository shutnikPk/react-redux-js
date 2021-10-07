import React, { useState } from "react";

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const { title } = title;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
    setTitle({ title: "" });
  };
  const changeInputHandler = (event) => {
    event.persist();
    setTitle((prev) => ({
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
            value={title.title}
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

export default PostsForm;
