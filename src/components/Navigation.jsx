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
      <button onClick={goToHome}>Home</button>
      <button onClick={goToProjects}>Projects</button>
      <button onClick={goToAbout}>About</button>
    </nav>
  );
};

export default Navigation;
