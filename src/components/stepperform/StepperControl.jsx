import React from 'react'

const StepperControl = ({handleClick, steps, currentStep, userData}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      <button
        onClick={() => handleClick("back")}
        className={` ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""} bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}>
        Back
      </button>
      <button
        type={currentStep === steps.length ? "submit" : "button"}
        
        onClick={() => {
          if (currentStep === steps.length) {
            console.log(userData);
          } else {
            handleClick("next");
          }
        }
        }   
        className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
        {currentStep === steps.length ? "Submit" : "Next"}
      
      </button>
    </div>
  );
}

export default StepperControl