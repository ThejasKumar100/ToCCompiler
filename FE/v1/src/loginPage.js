import './loginPage.css';
import { FaLock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const loginPage = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <div className="img"><MdOutlineMailOutline /></div>
                    <input type="email"/>
                </div>
                <div className="input">
                    <FaLock />
                    <input type="password"/>
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            <div className="submit-Container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>

            </div>

        </div>
    )
}
export default loginPage;