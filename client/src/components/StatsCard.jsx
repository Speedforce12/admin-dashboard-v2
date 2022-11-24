import React from "react";
import { useEffect } from "react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getStudents } from "../action/student";
import { getTeachers } from "../action/teacher";
import { useValue } from "../context/AuthContext";

const StatsCard = () => {
  const {
    state: { currentUser, teachers, students },
    dispatch,
  } = useValue();

  useEffect(() => {
    if (teachers.length > 0 || teachers.length === 0)
      getTeachers(dispatch, currentUser);
    if (students.length > 0 || students.length === 0)
      getStudents(dispatch, currentUser);
  }, []);

  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-x-6 mb-5 gap-y-10'>
      <div className='h-full p-4 transform duration-200 ease-in-out hover:shadow-2xl hover:shadow-blue-500/40  bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl'>
        <div className='m-4'>
          <div className='flex justify-center text-white'>
            <FaUserGraduate size={30} />
          </div>
          <h3 className='text-center py-2 px-0 font-semibold text-2xl font-[Poppins] m-0'>
            Students
          </h3>
          <h2 className='text-center font-bold text-xl'>{students.length}</h2>
          <div className='flex justify-center'>
            <Link
              className='text-center font-medium hover:animate-pulse p-2 px-10 rounded-[2rem] bg-black/20 mt-2'
              to='students'>
              View
            </Link>
          </div>
        </div>
      </div>
      <div className='h-full  p-4 transform duration-200 ease-in-out hover:shadow-2xl hover:shadow-pink-500/40 bg-gradient-to-tr from-pink-600 to-pink-400  rounded-2xl'>
        <div className='m-4'>
          <div className='flex justify-center text-white'>
            <FaChalkboardTeacher size={30} />
          </div>
          <h3 className='text-center py-2 px-0 font-semibold text-2xl font-[Poppins] m-0'>
            Teachers
          </h3>
          <h2 className='text-center font-bold text-xl'>{teachers.length}</h2>
          <div className='flex justify-center'>
            <Link
              className='text-center font-medium hover:animate-pulse p-2 px-10 rounded-[2rem] bg-black/20 mt-2'
              to='students'>
              View
            </Link>
          </div>
        </div>
      </div>
      <div className='h-full  p-4 transform duration-200 ease-in-out hover:shadow-2xl  bg-gradient-to-tr from-green-600 to-green-400 hover:shadow-green-500/40 rounded-2xl'>
        <div className='m-4'>
          <div className='flex justify-center text-white'>
            <GiReceiveMoney size={30} />
          </div>
          <h3 className='text-center py-2 px-0 font-semibold text-2xl font-[Poppins] m-0'>
            Incomes
          </h3>
          <h2 className='text-center font-bold text-xl'>25</h2>
          <div className='flex justify-center'>
            <Link
              className='text-center font-medium hover:animate-pulse p-2 px-10 rounded-[2rem] bg-black/20 mt-2'
              to='students'>
              View
            </Link>
          </div>
        </div>
      </div>
      <div className='h-full p-4 transform duration-200 ease-in-out hover:shadow-2xl  bg-gradient-to-tr from-orange-600 to-orange-400 hover:shadow-orange-400/40 rounded-2xl'>
        <div className='m-4'>
          <div className='flex justify-center text-white'>
            <GiPayMoney size={30} />
          </div>
          <h3 className='text-center py-2 px-0 font-semibold text-2xl font-[Poppins] m-0'>
            Expenses
          </h3>
          <h2 className='text-center font-bold text-xl'>25</h2>
          <div className='flex justify-center'>
            <Link
              className='text-center font-medium hover:animate-pulse p-2 px-10 rounded-[2rem] bg-black/20 mt-2'
              to='students'>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
