import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink
    to="/"
    className="nav-bar"
    >
    Home  
    </NavLink> 
    <NavLink
    to="/directors"
    className="nav-bar"
    >
    Directors  
    </NavLink>    
    <NavLink
    to="/actors"
    className="nav-bar"
    >
    Actors  
    </NavLink> 
    </nav>
    );
};

export default NavBar;
