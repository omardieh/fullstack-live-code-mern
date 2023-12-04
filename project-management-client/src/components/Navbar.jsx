import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">
        <button> Home</button>
      </NavLink>
      <NavLink to="/projects">
        <button>Projects </button>
      </NavLink>
    </nav>
  );
}
