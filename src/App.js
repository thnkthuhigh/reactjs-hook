import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Helo Thanh</h2>
      </header>
    </div>
  );
};

export default App;
