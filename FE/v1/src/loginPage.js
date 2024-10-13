import React from 'react'
import {useState} from 'react';
import './loginPage.css';
import { FaLock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const LoginPage = () => {
    const [action, setAction] = useState('');

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <div className="img"><MdOutlineMailOutline /></div>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                <div className="img"><FaLock /></div>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>

            </div>

        </div>
    )
}
export default LoginPage;