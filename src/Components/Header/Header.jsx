import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>

            <nav>
              <Link to={"/about"}>About</Link>
              <Link to={"/Home"}>Home</Link>
              <Link to={"/posts"}>Posts</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/user"}>Users</Link>
              <Link to={"/todos"}>Todos</Link>
            </nav>
        </div>
    );
};

export default Header;