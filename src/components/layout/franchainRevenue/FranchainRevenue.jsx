import React from 'react'
// import '../franchainKycSection/'
import FeatureSection from "../../featureSection/FeatureSection";
import PlaceholderImage from "../../../assets/images/placeholderImage.svg";
import CustomButton from '../../customButton/CustomButton';

const FranchainRevenueSection = ({setCurrentStep}) => {
  return (
    <div className='kyc-sec-page'>
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
                title="Direct your operators to divert all <br> merchant revenue to their new <br> dedicated virtual IBAN"
                buttonText="Next"
              />
            </div>
          </div>
    </div>
  )
}

export default FranchainRevenueSection