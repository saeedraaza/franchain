import React from "react";
import "./featureSection.css";
import CustomButton from "../customButton/CustomButton";

const FeatureSection = ({
  title,
  description = "",
  buttonText,
  setCurrentStep,
}) => {
  return (
    <div className="feature-section">
      <h2>
        {title.split("<br>").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== title.split("<br>").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      {description && <p>{description}</p>}
      <div className="feature-btn">
        <CustomButton
          variant="primary"
          handleClick={() => {
            setCurrentStep((prevStep) => (prevStep === 7 ? prevStep : prevStep + 1));
          }}
        >
          {buttonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default FeatureSection;
