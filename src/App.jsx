import React from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Background from "./components/Background";
import Navigation from "./components/Navigation";
import AppRoutes from "./routes/AppRoutes"; // 라우트를 별도의 파일로 분리

const App = () => {
  return (
    <Router>
      <Background />
      <Navigation />
      <AppRoutes />
    </Router>
  );
};

export default App;
