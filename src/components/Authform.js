import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Auth.css';

function Authform() {
    const [isLogin, setIsLogin] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false); // state for forgot password
    const [email, SetEmail] = useState(""); // Email state
    const [password, SetPassword] = useState("");
    const [confermPassword, SetconfermPassword] = useState("");

    const funcforgotpassword = async () => {
        try {
            const response = await axios.post('https://localhost:44341/api/Account/ForgotPassword', {
                email
            });
            if (response.data === true) {
                alert("Your password is reset successfully.");
            } else {
                alert("Your password is not reset successfully. Please try again.");
            }
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    {!forgotPassword ?
                        <>
                            <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                            <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                        </> : ""
                    }
                </div>

                {forgotPassword ? (
                    <div className='form'>
                        <h2>Forgot Password</h2>
                        <input 
                            type='email' 
                            value={email} // Use email state here
                            onChange={(e) => SetEmail(e.target.value)} // Update state on input change
                            placeholder='Enter your email' 
                        />
                        <button onClick={funcforgotpassword}>Reset Password</button>
                        <p>
                            Remembered your password?{' '}
                            <Link to="#" onClick={() => { setForgotPassword(false); setIsLogin(true); }}>
                                Login here
                            </Link>
                        </p>
                    </div>
                ) :
                    isLogin ?
                        <div className='form'>
                            <h2>Login Form</h2>
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='Password' />
                            <Link to="#" onClick={() => setForgotPassword(true)}>Forgot Password</Link>
                            <button>Login</button>
                            <p>Not a Member{''}? <Link to="#" onClick={() => setIsLogin(false)}>SignUp Now</Link></p>
                        </div>
                        :
                        <div className='form'>
                            <h2>SignUp Form</h2>
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='Password' />
                            <input type='password' placeholder='Conferm Password' />
                            <button>SignUp</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Authform;
