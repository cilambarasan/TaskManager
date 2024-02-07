import React, { useState } from 'react';
import f1 from './Images/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './css/login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if both username and password are filled before navigating
    if (userName && password) {
      // Add your login logic here if needed
      Navigate('/home');
    } else {
      alert('Please fill in both username and password');
    }
  };

  return (
    <>
      <div className="LoginMain">
        <div className="cont">
          <div className="inn">
            <h2>Login</h2>
            <p>Welcome! Please fill username and password to sign in to your account </p>
            <form className="form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Enter UserName"
                className="nam"
                onChange={handleUserNameChange}
                required
              />
              <br></br>
              <br></br>
              <input
                type="password"
                placeholder="Enter Password"
                className="nam"
                onChange={handlePasswordChange}
                required
              />
              <br></br>
              <br></br>
              <Link to={'/forgot'} className="for">
                Forgot password
              </Link>
              <button className="but">Login</button>
            </form>
            <p className='sigp'>Don't have an Account?</p><Link to={'/signup'} className='no'>SignUp</Link>
          </div>
          <img src={f1} width={370} height={477} className="im" />
        </div>
      </div>
    </>
  );
};

export default Login;
