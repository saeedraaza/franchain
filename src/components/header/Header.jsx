import React from "react";
import "./header.css";
import CustomButton from "../customButton/CustomButton";

const Header = () => {
    const handleSubmit = () => {
        console.log('button clicked')
    }
  return (
    <header className="header">
      <h1>FRANCHAIN</h1>
      <nav>
      <div className="button">
          <CustomButton
            variant="secondary"
            handleClick={handleSubmit}
          >
            Support
          </CustomButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
