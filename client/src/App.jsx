import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import Register from "./components/register";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Formulario de login</h2>
        <Link to="/profile">profile</Link>
        <Link to="/register">register</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
