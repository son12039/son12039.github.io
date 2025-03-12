import "../scss/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="head">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/project">
          <button>Projects</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </>
  );
};
export default Header;
