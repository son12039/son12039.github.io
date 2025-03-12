import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Background from "./components/Background";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";

const App = () => {
  function NavigationWithNavigate() {
    const navigate = useNavigate();

    const goToHome = () => navigate("/");
    const goToProjects = () => navigate("/project");
    const goToAbout = () => navigate("/about");

    return (
      <div>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToProjects}>Projects</button>
        <button onClick={goToAbout}>About</button>
      </div>
    );
  }
  return (
    <Router>
      <Background />
      <div className="front" style={{ height: "300vh" }}>
        <NavigationWithNavigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
