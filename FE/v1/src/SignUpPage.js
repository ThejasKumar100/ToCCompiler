import React from 'react'
import {useState} from 'react';
import './loginPage.css';
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaCheck } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

const SignUpPage = () => {
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
                <div className="input">
                    <div className='img'><FaCheck /></div>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
                
 
                
            </div>
            <div className="extra">Already have an account? <Link to="/login">Log In Here!</Link></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>

        </div>
    )
}
export default SignUpPage;