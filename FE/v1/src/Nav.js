import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        //Link option is not working, href works
        <nav className="Nav">
        <ul>
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/preferences">Preferences</Link></li>
        </ul>
        </nav>
    );

}
export default Nav;