import "./SubmitForm.scss";
import { useState } from "react";

const AddNewBlog = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can send the form data to the server or perform other actions here
  };
  return (
    <div className="submit-form">
      <h2>Add new blog</h2>
      <div onSubmit={handleSubmit}>
        <div>Title:</div>
        <input type="text" onChange={handleChange} />

        <div>Content:</div>
        <input type="email" onChange={handleChange} />

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
