import React from 'react'
import CustomButton from '../customButton/CustomButton';
import './forgotPassword.css'

const ForgotPassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here, e.g., submit form data to backend
        console.log("Form submitted with data");
      };
  return (
    <div className="forgot-modal">
      <div className="">
        <h2>Reset password</h2>
        <p>Enter your email address to get instructions for resetting your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="work-email">Work Email</label>
            <input
              type="email"
              id="work-email"
              name="workEmail"
              required
            />
          </div>
          {/* <p className="forgot-password" onClick={() => setForgotPassword(true)}>
          Forgot password?
          </p> */}
          <div className="button">
            <CustomButton variant="primary" handleClick={handleSubmit} disabled >
              Sign up
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword