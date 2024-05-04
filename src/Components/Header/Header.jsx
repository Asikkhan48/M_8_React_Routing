import { Link, NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>

            <nav>
              
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/Home"}>Home</NavLink>
              <NavLink to={"/posts"}>Posts</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/user"}>Users</NavLink>
              <NavLink to={"/todos"}>Todos</NavLink>
            </nav>
        </div>
    );
};

export default Header;