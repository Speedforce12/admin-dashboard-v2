import { useContext, useEffect } from "react";
import { FormContext } from "./StepperMain";

const Stepper = ({ steps, currentStep }) => {
  const { activeStepIndex } = useContext(FormContext);

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);


    return (
      <div className='w-full flex flex-row items-center justify-center px-32 pt-10'>
        <div className='stepper-item w-8 h-8 text-center font-medium border-2 rounded-full'>
          1
        </div>
        <div className='flex-auto border-t-2'></div>
        <div className='stepper-item w-8 h-8 text-center font-medium border-2 rounded-full'>
          2
        </div>
        <div className='flex-auto border-t-2'></div>
        <div className='stepper-item w-8 h-8 text-center font-medium border-2 rounded-full'>
          3
        </div>
      </div>
    );
};

export default Stepper;
