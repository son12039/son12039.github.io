import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/Navigation.scss";
const Navigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToProjects = () => navigate("/project");
  const goToAbout = () => navigate("/about");

  return (
    <nav>
      <div className="JB">JB.</div>
      <div className="btn">
        <button onClick={goToHome}>Home</button>
        <button onClick={goToProjects}>Projects</button>
        <button onClick={goToAbout}>About</button>
      </div>
    </nav>
  );
};

export default Navigation;
