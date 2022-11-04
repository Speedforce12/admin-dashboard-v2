const Stepper = () => {
  const displaySteps = (
    <div className='w-full items-center flex'>
      <div className='relative flex flex-col items-center to-teal-600 '>
        <div className='rounded-full transition duration-500 ease-out border-2 bg-gray-300 h-12 w-12 flex items-center justify-center py-3'>
          {/* display number */}
        </div>
        <div className='absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase'>
          {/* display descriptions */}
          description
        </div>
      </div>
      <div className='flex-auto border-t-2 transition duration-500 ease-in-out'>
        {/* display line */}
      </div>
    </div>
  );

  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
      {displaySteps}
    </div>
  );
};

export default Stepper;
