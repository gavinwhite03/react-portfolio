import { Link } from "react-router-dom";
import Logo from "./assets/What's_4_Dinner_Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={Logo} alt="Logo" className="logo" />
        <h4>What's 4 Dinner</h4>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/pantry">Pantry</Link>
      </div>
    </nav>
  );
}

export default Navbar;
