import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import Clock from "./views/Clock";
import Country from "./views/Country";
import Todo from "./views/Todo";
import Blog from "./views/Blog";
import BlogDetail from "./views/BlogDeteil";
import NotFound from "./views/NotFound";
import Love from "./views/lovePage/Love";

const Home = () => {
  return <div>Welcome to Thanh page</div>;
};

const App = () => {
  // let [Name, setName] = useState("Thanh");
  let [Copy, setCopy] = useState("");
  const [Todos, setTodos] = useState([
    { id: 1, title: "Watching video!", type: "non" },
    { id: 2, title: "Fixing Bug!", type: "non" },
  ]);

  const handleClick = () => {
    if (!Copy) {
      alert("Nhập dữ liệu");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: Copy,
      type: "thanh",
    };
    setTodos([...Todos, todo]);
    setCopy("");
  };

  const handleOnchangeName = (event) => {
    setCopy(event.target.value);
  };

  const handleOnDelete = (id) => {
    let currentTodo = Todos;
    currentTodo = Todos.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };

  useEffect(() => {}, [Todos]); //chay moi khi dc render
  const clockElement = <Clock />;
  const countryElement = <Country />;
  const todoElement = (
    <>
      <Todo Todos={Todos} title={"All todo"} Delete={handleOnDelete} />
      <Todo
        Todos={Todos.filter((item) => item.type === "thanh")}
        title={"Thanh todo"}
        Delete={handleOnDelete}
      />
      <input
        type="text"
        style={{ width: "12%" }}
        value={Copy}
        onChange={(event) => {
          handleOnchangeName(event);
        }}
      />
      <button
        className="btnds"
        onClick={() => {
          handleClick();
        }}
      >
        Click me
      </button>
    </>
  );

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Clock" element={clockElement} />
          <Route path="Country" element={countryElement} />
          <Route path="Todo" element={todoElement} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Blog/:id" element={<BlogDetail />} />
          <Route path="Love" element={<Love />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
