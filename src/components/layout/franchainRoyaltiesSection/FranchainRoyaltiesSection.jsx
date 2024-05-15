import "./franRoyaltySec.css";
import FeatureSection from "../../featureSection/FeatureSection";
import FounderImage from "../../../assets/images/FounderImage.svg";
import CustomButton from "../../customButton/CustomButton";

const FranchainRoyaltiesSection = ({ setCurrentStep }) => {
  return (
    <div className="royalty-sec-page">
      <div className="royalty-left-section">
        <div className="back-button">
          <CustomButton
            variant="secondary"
            handleClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          >
            Back
          </CustomButton>
        </div>
        <div>
          <FeatureSection
            setCurrentStep={setCurrentStep}
            title="‘’Franchain helps us collect royalties daily from our franchisees without the need for ever chasing’’"
            buttonText="Next up: How it works"
          />
        </div>
      </div>
      <div className="royalty-right-section">
        <img src={FounderImage} alt="founder image" />
      </div>
    </div>
  );
};

export default FranchainRoyaltiesSection;
