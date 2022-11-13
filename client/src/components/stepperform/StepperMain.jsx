import React, { useState } from "react";
import Acceptance from "../form/Acceptance";
import ParentDetail from "../form/ParentDetail";
import PersonalDetail from "../form/PersonalDetail";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

const StepperMain = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Student Details", "Parent Details", "Acceptance"];
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    birth: "",
    student_type: "",
    gender: "",
    religion: "",
    medical: "",
    prevSchool: "",
    fatherName: "",
    fatherAddress: "",
    fatherOccupation: "",
    fatherHome: "",
    fatherCell: "",
    fatherWork: "",
    fatherEmail: "",
    motherName: "",
    motherAddress: "",
    motherOccupation: "",
    motherHome: "",
    motherCell: "",
    motherWork: "",
    motherEmail: "",
    guardianName: "",
    guardianAddress: "",
    guardianHome: "",
    guardianCell: "",
    guardianWork: "",
    guardianEmail: "",
    file_upload: "",
  });

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetail userData={userData} setUserData={setUserData} />;
      case 2:
        return <ParentDetail userData={userData} setUserData={setUserData} />;
      case 3:
        return <Acceptance userData={userData} setUserData={setUserData} />;
      default:
        break;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    newStep > 0  && newStep <= steps.length && setCurrentStep(newStep)

  };

  return (
    <div className='md:w-11/12  shadow-xl rounded-2xl pb-2 bg-white ml-8'>
      <div className='container horizontal mt-5'>
        <Stepper steps={steps} currentStep={currentStep} />

        <div className=''>
          {displayStep(currentStep)}
        </div>
      </div>
      <StepperControl
        userData={userData}
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
};

export default StepperMain;
