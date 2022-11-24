import { GiSchoolBag } from "react-icons/gi";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GiTakeMyMoney, GiTeacher } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import {IoClose} from "react-icons/io5"
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgLogOut } from "react-icons/cg";
import { createElement, useMemo } from "react";
import { useValue } from "../context/AuthContext";

const Sidebar = () => {
  const { state: { ShowSidebar }, dispatch } = useValue()
  
  const List = useMemo(
    () => [
      {
        title: "Dashboard",
        icon: MdOutlineDashboard,
        link: "/",
      },
      {
        title: "Finance",
        icon: GiTakeMyMoney,
        link: "finances",
      },
      {
        title: "Student",
        icon: FaUserGraduate,
        link: "students",
      },
      {
        title: "Teacher",
        icon: GiTeacher,
        link: "teachers",
      },
      {
        title: "User",
        icon: HiOutlineUserGroup,
        link: "users",
      },
    ],
    []
  );

  return (
    <div
      className={`h-[calc(100vh-32px)] my-4 flex flex-col ml-4 top-0 left-0 text-white bg-gradient-to-br from-[#37474f] to-[#263238] rounded-xl ${ShowSidebar ? "translate-x-0" : "-translate-x-80"} fixed inset-0 z-50 transition-transform duration-300 xl:translate-x-0 w-64 `}>
      <div className='border-b border-white/20 relative'>
        <div className='flex items-center gap-4 py-6 px-8'>
          <GiSchoolBag size={25} className='inline-block w-9 h-9 rounded-md' />
          <h6 className='block antialiased font-[Poppins] tracking-normal text-base font-semibold leading-relaxed'>
            School System
          </h6>
        </div>
        <button
          onClick={() => dispatch({ type: "HIDE_SIDEBAR" })}
          className='middle none font-medium text-center uppercase transition-all w-8 max-w-[32px] h-8 max-h-[32px] xl:hidden rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none '
          type='button'>
          <span className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <IoClose className='h-5 w-5 text-white' />
          </span>
        </button>
      </div>

      {/* sidebar items */}
      <div className='m-4'>
        <div className='flex flex-col gap-5 mb-6'>
          {List.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className='hover:font-bold flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200/25 rounded-md hover:shadow-2xl'>
              <div>{createElement(item?.icon, { size: "20" })}</div>

              <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
        {/* action button */}

        <div className='sm:mt-56 mt-28 flex items-center py-12 justify-center bg-white rounded-xl'>
          <button className='inline-flex items-center px-4 py-2 gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-32'>
            <CgLogOut size={20} className='flex items-center justify-center' />
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
