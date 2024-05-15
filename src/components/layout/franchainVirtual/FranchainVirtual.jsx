import React from 'react'
// import '../franchainKycSection/'
import FeatureSection from "../../featureSection/FeatureSection";
import PlaceholderImage from "../../../assets/images/placeholderImage.svg";
import CustomButton from '../../customButton/CustomButton';

const FranchainVirtualSection = ({setCurrentStep}) => {
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
                title="Create and assign local virtual <br> IBANs to your operators"
                buttonText="Next"
              />
            </div>
          </div>
    </div>
  )
}

export default FranchainVirtualSection