import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  let [Name, setName] = useState("Thanh");
  let [Copy, setCopy] = useState("");
  const [Todos, setTodos] = useState([
    { id: 1, title: "Watching video!" },
    { id: 2, title: "Fixing Bug!" },
  ]);

  const handleClick = () => {
    if (!Copy) {
      alert("Please select a video");
      return;
    }
    let todo = { id: Math.floor(Math.random() * 1000), title: Copy };
    setTodos([...Todos, todo]);
    setCopy("");
  };

  const handleOnchangeName = (event) => {
    setCopy(event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Hello {Name}</h2>
        <Todo Todos={Todos} />
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
        </button>
      </header>
    </div>
  );
};

export default App;
