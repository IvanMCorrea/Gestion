import NavBar from "./components/NavBar";
import Main from "./components/Main";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
