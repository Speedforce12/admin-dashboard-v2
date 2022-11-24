import React, { useState, createContext } from "react";

import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import Steps from "./Steps";


export const FormContext = createContext()

const StepperMain = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formData, setFormData] = useState({});


  const steps = ["Student Details", "Parent Details", "Acceptance"];
;

  // const handleClick = (direction) => {
  //   let newStep = currentStep;

  //   direction === 'next' ? newStep++ : newStep--;
  //   newStep > 0  && newStep <= steps.length && setCurrentStep(newStep)

  // };

  return (
    <FormContext.Provider value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
      <div className='md:w-11/12  shadow-xl rounded-2xl pb-2 bg-white mx-auto mt-10'>
        <div className='container horizontal mt-5'>
          <Stepper />

          <div>
            <Steps />
          </div>

        </div>
        {/* <StepperControl
          userData={userData}
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        /> */}
      </div>
    </FormContext.Provider>
  );
};

export default StepperMain;
