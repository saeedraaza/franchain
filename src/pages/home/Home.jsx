import React, { useState } from "react";
import "./home.css";
import FeatureSection from "../../components/featureSection/FeatureSection";
import SandTimeImage from "../../assets/images/Sand.svg";
import FranchainRoyaltiesSection from "../../components/layout/franchainRoyaltiesSection/FranchainRoyaltiesSection";
import FranchainGoalSection from "../../components/layout/franchainGoalSection/FranchainGoalSection";
import FranchainKycSection from "../../components/layout/franchainKycSection/FranchainKycSection";
import FranchainInviteSection from "../../components/layout/franchainInvite/FranchainInvite";
import FranchainVirtualSection from "../../components/layout/franchainVirtual/FranchainVirtual";
import FranchainRevenueSection from "../../components/layout/franchainRevenue/FranchainRevenue";
import FranchainInvoicesSection from "../../components/layout/franchainInvoices/FranchainInvoices";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      {currentStep === 0 && (
        <div className="home-page">
          <div className="home-left-section">
            <img src={SandTimeImage} alt="Logo" />
          </div>
          <div className="home-right-section">
            <div>
              <FeatureSection
                setCurrentStep={setCurrentStep}
                title="Let’s get you set up"
                description="To activate your account and check Franchain is the right solution for your business, we need to learn a bit about you."
                buttonText="Next"
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 1 && (
        <FranchainGoalSection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 2 && (
        <FranchainRoyaltiesSection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 3 && (
        <FranchainKycSection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 4 && (
        <FranchainInviteSection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 5 && (
        <FranchainVirtualSection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 6 && (
        <FranchainRevenueSection setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 7 && (
        <FranchainInvoicesSection setCurrentStep={setCurrentStep} />
      )}
    </>
  );
};

export default Home;
