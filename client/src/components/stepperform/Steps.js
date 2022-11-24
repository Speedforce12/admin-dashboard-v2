import React, { useContext } from "react";
import { FormContext } from "../stepperform/StepperMain";
import Acceptance from "../form/Acceptance";
import ParentDetail from "../form/ParentDetail";
import PersonalDetail from "../form/PersonalDetail";

function Steps() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <PersonalDetail />;
      break;
    case 1:
      stepContent = <ParentDetail />;
      break;
    case 2:
      stepContent = <Acceptance />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Steps;
