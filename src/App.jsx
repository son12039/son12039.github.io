import BackgroundAnimation from "./components/BackgroundGlow";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="front" style={{ height: "300vh" }}>
      <Header />
      <div className="test">sdasd</div>
      <div className="test1">wasdqr</div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
