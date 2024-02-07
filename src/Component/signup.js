import React, { useState } from 'react';
import f1 from './Images/sign.jpg';
import './css/signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const Navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCreateAccount = () => {
    // Check if all fields are filled before navigating
    if (userName && email && phoneNumber && password && confirmPassword) {
      Navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <div className="LoginMain1">
        <div className="contsi">
          <div className="inns">
            <h2>SignUp</h2>
            <p>Welcome! Please fill all details to create your account </p>
            <form className="form">
              <input
                type="text"
                placeholder="Enter UserName"
                className="nam1"
                onChange={handleUserNameChange}
                required
              />
              <br></br>
              <br></br>
              <input
                type="email"
                placeholder="Enter Email"
                className="nam1"
                onChange={handleEmailChange}
                required
              />
              <br></br>
              <br></br>
              <input
                type="text"
                placeholder="Enter PhoneNumber"
                className="nam1"
                onChange={handlePhoneNumberChange}
                required
              />
              <br></br>
              <br></br>

              <input
                type="password"
                placeholder="Enter Password"
                className="nam1"
                onChange={handlePasswordChange}
                required
              />
              <br></br>
              <br></br>
              <input
                type="password"
                placeholder="Confirm Password"
                className="nam1"
                onChange={handleConfirmPasswordChange}
                required
              />
              <br></br>
              <br></br>
              <button className="but1" onClick={handleCreateAccount}>
                Create
              </button>
            </form>
          </div>
          <img src={f1} width={390} height={477} className="im1" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
