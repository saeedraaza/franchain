import React from "react";
import FeatureSection from "../../featureSection/FeatureSection";
import PlaceholderImage from "../../../assets/images/placeholderImage.svg";
import CustomButton from "../../customButton/CustomButton";

const FranchainInvoicesSection = ({ setCurrentStep }) => {
  return (
    <div className="kyc-sec-page">
      <div className="kyc-left-section">
        <div className="back-button">
          <CustomButton
            variant="secondary"
            handleClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          >
            Back
          </CustomButton>
        </div>
        <img src={PlaceholderImage} alt="Logo" />
      </div>
      <div className="kyc-right-section">
        <div>
          <FeatureSection
            setCurrentStep={setCurrentStep}
            title="Upload invoices and let Franchain<br> collect royalties based on each<br> locations revenue"
            buttonText="Next: Complete KYC"
          />
        </div>
        <p className="terms">
          Want to complete KYC later? <a href="#"> Visit the dashboard</a>
        </p>
      </div>
    </div>
  );
};

export default FranchainInvoicesSection;
