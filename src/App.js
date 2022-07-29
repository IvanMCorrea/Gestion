import NavBar from "./components/navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
