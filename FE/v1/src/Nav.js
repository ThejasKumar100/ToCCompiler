import { Link } from "react-router-dom";
import './Nav.css';
import logo from './Logo2.png'

const Nav = () => {
    return (
        //Link option is not working, href works
        <nav className="Nav">
        <ul>
            <img src = {logo}></img>
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/preferences">Preferences</Link></li>
        </ul>
        </nav>
    );

}
export default Nav;