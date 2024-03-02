import axios from "axios";
import "./SubmitForm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const AddNewBlogs = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setNewContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    let data = {
      title: newTitle,
      body: newContent,
      userId: 1,
    };

    if (!data.title || !data.body) {
      toast.error("Please enter a title or content");
      return;
    }

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    props.AddNewBlog(res.data);
    console.log(res.data);
  };

  return (
    <div className="submit-form">
      <h3 style={{ textAlign: "center" }}>Add new blog</h3>
      <div>Title:</div>
      <input type="text" value={newTitle} onChange={handleChangeTitle} />
      <div>Content:</div>
      <input type="text" value={newContent} onChange={handleChangeContent} />
      <button
        className="submit"
        type="submit"
        onClick={handleSubmit}
        style={{ borderRadius: "5px" }}
      >
        Submit
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddNewBlogs;
