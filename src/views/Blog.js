import React from "react";
import useFetch from "../customize/fetch";
import { Link } from "react-router-dom";

import "./Blog.scss";

const Blog = () => {
  const {
    data: dataBlogs,
    isLoading,
    isErr,
    setData,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);

  console.log(dataBlogs);

  return (
    <div className="blog-container">
      {dataBlogs &&
        dataBlogs.length > 0 &&
        dataBlogs.map((item) => (
          <div className="blog-item" key={item.id}>
            <div className="Title">Title: {item.title}</div>
            <div className="body">Content: {item.body}</div>
            <Link to={`/Blog/${item.id}`} relative="path">
              <button> Views deteil</button>{" "}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Blog;
