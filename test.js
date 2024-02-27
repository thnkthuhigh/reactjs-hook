// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import { Clock } from "./views/Clock";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { useState, useEffect } from "react";

// import logo from "./logo.svg";
// import "./App.scss";
// import "react-toastify/dist/ReactToastify.css";
// import { Routes, Route } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";
// import Todo from "./views/Todo";
// import Nav from "./views/Nav";
// import Country from "./views/Country";
// import { Clock } from "./views/Clock";

// const App = () => {
//   let [Name, setName] = useState("Thanh");
//   let [Copy, setCopy] = useState("");
//   const [Todos, setTodos] = useState([
//     { id: 1, title: "Watching video!", type: "non" },
//     { id: 2, title: "Fixing Bug!", type: "non" },
//   ]);

//   const handleClick = () => {
//     if (!Copy) {
//       alert("Please select a video");
//       return;
//     }
//     let todo = {
//       id: Math.floor(Math.random() * 1000),
//       title: Copy,
//       type: "thanh",
//     };
//     setTodos([...Todos, todo]);
//     setCopy("");
//   };

//   const handleOnchangeName = (event) => {
//     setCopy(event.target.value);
//   };

//   const handleOnDelete = (id) => {
//     let currentTodo = Todos;
//     currentTodo = Todos.filter((item) => item.id !== id);
//     setTodos(currentTodo);
//   };

//   useEffect(() => {
//     console.log("Todos changed", Todos);
//   }, [Todos]); //chay moi khi dc render

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Nav />
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Hello {Name}</h2>{" "}
//         <Routes>
//           <Route path="/" element={<App />}>
//             <Route path="Todo" element={<Todo />} />
//             <Route path="Clock" element={<Clock />} />
//           </Route>
//         </Routes>
//         {/* <Clock />
//         <Country /> */}
//         <Todo Todos={Todos} title={"All todo"} Delete={handleOnDelete} />
//         <Todo
//           Todos={Todos.filter((item) => item.type === "thanh")}
//           title={"Thanh todo"}
//           Delete={handleOnDelete}
//         />
//         <input
//           type="text"
//           value={Copy}
//           onChange={(event) => {
//             handleOnchangeName(event);
//           }}
//         />
//         <button
//           onClick={() => {
//             handleClick();
//           }}
//         >
//           Click me
//         </button>
//       </header>
//     </div>
//   );
// };

// export default App;
