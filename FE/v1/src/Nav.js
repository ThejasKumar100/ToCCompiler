import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        //Link option is not working, href works
        <nav className="Nav">
        <ul>
            {/* <li>
                <Link to="/login">Login</Link>    
            </li> */}
            <li><a href="/login">Login</a></li>
            <li><a href="/main">Main</a></li>
            <li><a href="/preferences">Preferences</a></li>
        </ul>
        </nav>
    );

}
export default Nav;