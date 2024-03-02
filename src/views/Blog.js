import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./Blog.scss";
import AddNewBlogs from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [dataBlogs, setDataBlogs] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, isLoading, isErr } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  useEffect(() => {
    // Update dataBlogs only after fetching data
    if (data && data.length > 0) {
      setDataBlogs(data.slice(0, 9));
    }
  }, [data]);

  const AddNewBlog = (blog) => {
    setShow(false);
    setDataBlogs([blog, ...dataBlogs]); // Add the new blog at the beginning of the list
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlogs AddNewBlog={AddNewBlog} />
        </Modal.Body>
      </Modal>

      <div className="blog-container">
        {isLoading === false &&
          dataBlogs &&
          dataBlogs.length > 0 &&
          dataBlogs.map((item, index) => (
            <div className="blog-item" key={index}>
              <div className="Title">Title: {item.title}</div>
              <div className="body">Content: {item.body}</div>
              <Link to={`/Blog/${item.id}`} relative="path">
                <button className="btnds"> Views detail</button>{" "}
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
