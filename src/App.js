import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";

import Todo from "./views/Todo";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Country from "./views/Country";

const App = () => {
  let [Name, setName] = useState("Thanh");
  let [Copy, setCopy] = useState("");
  const [Todos, setTodos] = useState([
    { id: 1, title: "Watching video!", type: "non" },
    { id: 2, title: "Fixing Bug!", type: "non" },
  ]);

  const handleClick = () => {
    if (!Copy) {
      alert("Please select a video");
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

  useEffect(() => {
    console.log("Todos changed", Todos);
  }, [Todos]); //chay moi khi dc render

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Hello {Name}</h2>

        <Country />
        {/* <Todo Todos={Todos} title={"All todo"} Delete={handleOnDelete} />
        <Todo
          Todos={Todos.filter((item) => item.type === "thanh")}
          title={"Thanh todo"}
          Delete={handleOnDelete}
        />
        <input
          type="text"
          value={Copy}
          onChange={(event) => {
            handleOnchangeName(event);
          }}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Click me
        </button> */}
      </header>
    </div>
  );
};

export default App;
