// src/components/NavBar.js
import { Link } from "react-router-dom";
import "./NavBar.css"; // Importa o CSS

function NavBar() {
  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tasks" className="nav-link">Tasks</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}

export default NavBar;
