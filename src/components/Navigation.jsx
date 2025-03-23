import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/Navigation.scss";
import GitLogo from "../assets/GitLOGO.jpg";
const Navigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToProjects = () => navigate("/project");
  const goToAbout = () => navigate("/about");
  const handleJBClick = () => {
    // JB를 클릭하면 새로고침
    window.location.reload();
  };
  const goTogithub = () => {
    window.open("https://github.com/son12039", "_blank");
  };
  return (
    <nav>
      <button className="JB" onClick={handleJBClick}>
        JB.
      </button>
      <div className="btn">
        <button onClick={goToHome}>Home</button>
        <button onClick={goToProjects}>Projects</button>
        <button onClick={goToAbout}>About</button>
        <button onClick={goTogithub}>
          <img src={GitLogo} className="gitLogo"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
