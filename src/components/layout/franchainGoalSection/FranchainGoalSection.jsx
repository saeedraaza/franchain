import React from 'react'
import './franGoalSec.css'
import CustomButton from '../../customButton/CustomButton'
import InfoCard from '../../infoCard/InfoCard'

const FranchainGoalSection = ({setCurrentStep}) => {
  return (
    <div className='fran-goal'>
      <div className="goal-header">
        <div>
        <CustomButton
            variant="secondary"
            handleClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          >
            Back
          </CustomButton>
        </div>
        <div className='heading-text'>
        <h2>What’s your goal with Franchain?</h2>
      <p>No wrong answers here. And it doesn’t matter if you change your mind later.</p>
        </div>
        <div>
          
        </div>
      </div>

      <div className='goal-container'>

        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>

      </div>
      <div className='next-btn'>
      <CustomButton variant="primary" handleClick={() => setCurrentStep((prevStep) => prevStep + 1)}>
        Next
      </CustomButton>
      </div>
    </div>
  )
}

export default FranchainGoalSection