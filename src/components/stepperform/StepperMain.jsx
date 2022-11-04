import React from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

const StepperMain = () => {
  const steps = ["Personal Details", "Address Details", "Complete"];

  const displaySteps = (steps) => {
    switch (step) {
      case 1:
        
        
        break;
    
      default:
        break;
    }
  }

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      <div className='container horizontal mt-5'>
        <Stepper />
      </div>

      <StepperControl />
    </div>
  );
};

export default StepperMain;
