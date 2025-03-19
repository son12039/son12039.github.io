import React from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Background from "./components/Background";
import Navigation from "./components/Navigation";
import AppRoutes from "./routes/AppRoutes"; // 라우트를 별도의 파일로 분리

import "./App.css";

const App = () => {
  return (
    <Router>
      <Background />
      <div className="front" style={{ height: "300vh" }}>
        <Navigation />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
