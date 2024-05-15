// src/SignupPage.js
import React, { useState, useEffect } from "react";
import "./signup.css";
import Logo from "../../assets/images/logo.svg";
import SignupImage from "../../assets/images/SignupImage.svg";
import RightArrow from "../../assets/images/Arrow 2.svg";
import CustomButton from "../../components/customButton/CustomButton";
import { Link } from "react-router-dom";
import VerifyEmail from "../../components/verifyEmail/VerifyEmail";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setFormValid(isValid);
  }, [formData]);

  console.log("formValid", formValid);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.id]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let firstEmptyField = null;
  
    // Find the first empty field
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        if (!firstEmptyField) {
          firstEmptyField = key;
        }
      }
    });
  
    // If there's an empty field, focus on it and show its error message
    if (firstEmptyField) {
      document.getElementById(firstEmptyField).focus();
      setFormErrors({
        ...formErrors,
        [firstEmptyField]: "This field is required",
      });
      return;
    }
  
    // If all fields are filled, proceed with signup
    setIsSignupSuccess(true);
  };
  
  return (
    <div className="signup-page">
      <div className="left-section">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="svg-image">
          <img src={SignupImage} alt="signup img" />
        </div>
        <h1>
          Royalty collections,{" "}
          <span className="nowrap">simplified. It’s next level!</span>
        </h1>
        <p>
          Revenue based invoice collection to make royalty collection as easy
          as...
        </p>
      </div>

      <div className="right-section">
        {!isSignupSuccess ? (
          <>
            <Link to={"/sign-in"} className="login-link">
              <p>Login</p>
              <img src={RightArrow} alt="Logo" />
            </Link>
            <heading>
              <h2>Get started with Franchain</h2>
              <p>Create an account in 5 minutes.</p>
            </heading>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First name</label>
              <input id="firstName" onChange={handleChange} type="text" />
              {formErrors.firstName && (
                <p className="password-hint">{formErrors.firstName}</p>
              )}
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" onChange={handleChange} type="text" />
              {formErrors.lastName && (
                <p className="password-hint">{formErrors.lastName}</p>
              )}
              <label htmlFor="businessName">Business name</label>
              <input id="businessName" onChange={handleChange} type="text" />
              {formErrors.businessName && (
                <p className="password-hint">{formErrors.businessName}</p>
              )}
              <label htmlFor="email">Work email</label>
              <input id="email" onChange={handleChange} type="email" />
              {formErrors.email && (
                <p className="password-hint">{formErrors.email}</p>
              )}
              <label htmlFor="password">Password</label>
              <input id="password" onChange={handleChange} type="password" />
              {formErrors.password && (
                <p className="password-hint">{formErrors.password}</p>
              )}
              {/* <p className="password-hint">
                Password must be at least 12 characters
              </p> */}
              <div className="button">
                <CustomButton
                  variant="primary"
                  handleClick={handleSubmit}
                  // disabled={!formValid}
                >
                  Sign up
                </CustomButton>
              </div>
            </form>
            <p className="terms">
              By clicking "Start Application", I agree to Mercury's{" "}
              <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> and
              to receive electronic communication about my accounts and services
              per Mercury's <a href="#">Electronic Communications Agreement</a>,
              and acknowledge receipt of Mercury's{" "}
              <a href="#">USA PATRIOT Act disclosure</a>.
            </p>
          </>
        ) : (
          <VerifyEmail setIsSignupSuccess={setIsSignupSuccess} />
        )}
      </div>
    </div>
  );
};

export default Signup;
