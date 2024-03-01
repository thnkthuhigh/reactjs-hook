import { useState } from "react";
import useFetch from "../customize/fetch";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./Blog.scss";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, isLoading, isErr } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  const dataBlogs = data.slice(0, 9);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog />
        </Modal.Body>
      </Modal>

      <div className="blog-container">
        {isLoading === false &&
          dataBlogs &&
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
        {isLoading === true ? <div>isLoading...</div> : null}
        {isLoading === false && isErr === true ? (
          <div>Something wrong...</div>
        ) : null}
      </div>
    </>
  );
};

export default Blog;
