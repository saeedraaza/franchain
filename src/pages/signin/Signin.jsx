import React, { useState } from "react";
import "./signin.css";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import RightArrow from "../../assets/images/Arrow 2.svg";
import ForgotPassword from "../../components/forgotPassword/ForgotPassword";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    workEmail: "",
    password: "",
  });
  const [forgotPassword, setForgotPassword] = useState(false)
  const [formValid, setFormValid] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const isFormValid = formData.workEmail.trim() !== "" && formData.password.trim() !== "";
    setFormValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  };
  const handleNavigate = () => {
    if (forgotPassword) {
      setForgotPassword(false)
    } else {
      navigate('/sign-up')
    }
  };

  return (
    <div className="sign-in">
      <header>
      <img src={Logo} alt="Logo" />
      <div onClick={handleNavigate} className="nav-link">
              <p>{forgotPassword ? 'Return to login' : 'Create account'}</p>
              <img src={RightArrow} alt="Logo" />
            </div>
      </header>
      {!forgotPassword ? 
      <div className="login-modal">
      <div className="login-content">
        <h2>Login to Franchain</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="work-email">Work Email</label>
            <input
              type="email"
              id="work-email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p className="forgot-password" onClick={() => setForgotPassword(true)}>
          Forgot password?
          </p>
          <div className="button">
            <CustomButton variant="primary" handleClick={handleSubmit} disabled={!formValid} >
              Log in
            </CustomButton>
          </div>
        </form>
      </div>
    </div> : 
    <ForgotPassword/>

      }
    </div>
  );
};

export default Signin;
