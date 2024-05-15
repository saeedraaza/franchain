import React from "react";
import CustomButton from "../customButton/CustomButton";
import LeftArrow from '../../assets/images/BackArrow.svg'
import './verifyEmail.css';

const VerifyEmail = ({setIsSignupSuccess}) => {
    const handleSubmit = () => {
        console.log('button clicked')
    }
  return (
    <div className="verify-email">
      <div onClick={() => setIsSignupSuccess(false)} className="back-link">
      <img src={LeftArrow} alt="Logo" />
        <p>Go back</p>
      </div>
      <heading>
        <h2>Check your email for code</h2>
      </heading>
      <form>
        <label htmlFor="code">Enter code</label>
        <input id="code" type="text" />

        <div className="button">
          <CustomButton
            variant="primary"
            handleClick={handleSubmit}
            disabled
          >
            Continue
          </CustomButton>
        </div>
      </form>
      <p className="terms">
        Don't receive a code? check your span folder or {" "}
        <a href="#">click to resend</a>,
      </p>
    </div>
  );
};

export default VerifyEmail;
