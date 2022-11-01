import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const StatsCard = () => {
  return (
    <div className='h-full flex-1 p-4 transform duration-200 ease-in-out hover:shadow-2xl  bg-[#C8FACD] rounded-2xl'>
      <div className='m-4'>
        <div className='flex justify-center'>
          <FaUserGraduate size={30} />
        </div>
        <h3 className='text-center py-2 px-0 font-semibold text-2xl font-[Poppins] m-0'>
          Students
        </h3>
        <h2 className='text-center font-bold text-xl'>25</h2>
        <div className="flex justify-center">
          <Link
            className='text-center font-medium hover:animate-pulse p-2 px-10 rounded-[2rem] bg-black/20 mt-2'
            to='students'
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
