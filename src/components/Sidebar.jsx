import { GiSchoolBag } from "react-icons/gi";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GiTakeMyMoney, GiTeacher } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgLogOut } from "react-icons/cg";
import { createElement, useMemo } from "react";

const Sidebar = () => {
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
    <div className='flex flex-col ml-12 top-0 left-0 text-gray-600  bg-[#f0eff5] w-60 h-screen border-r-2 border-dashed border-gray-200'>
      <div className='flex justify-start  items-center gap-2 pr-2 mt-6'>
        <GiSchoolBag size={25} />
        <h1 className='font-semibold text-2xl'>School System</h1>
      </div>

      {/* sidebar items */}
      <div className='mt-8 flex flex-col gap-4 relative'>
        {List.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className='hover:font-bold flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-indigo-300/70 rounded-md hover:shadow-2xl hover:shadow-indigo-500 hover:text-indigo-500'
          >
            <div>{createElement(item?.icon, { size: "20" })}</div>

            <h2>{item.title}</h2>
          </Link>
        ))}
      </div>

      {/* action button */}

      <div className='mt-64  flex items-center justify-start'>
        <button className='inline-flex items-center px-4 py-2 gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-32'>
          <CgLogOut size={20} className='flex items-center justify-center' />
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
