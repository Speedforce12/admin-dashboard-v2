import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdBrightness7, MdBrightness4 } from "react-icons/md";
import ProfileMenu from "./ProfileMenu";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useValue } from "../context/AuthContext";

const Header = () => {
  const {state:{profile} ,dispatch} = useValue()
  
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const imgRef = useRef();
  const menuRef = useRef();
  const element = document.documentElement;
  // const darkQuery = window.matchMedia("(prefers-color-scheme: dark )");

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  // function onWindowMatch() {
  //   if (
  //     localStorage.theme === "dark " ||
  //     (!("theme" in localStorage) && darkQuery.matches)
  //   ) {
  //     element.classList.add("dark");
  //   } else {
  //     element.classList.remove("dark");
  //   }
  // }

  // onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        // onWindowMatch();
        break;
    }
  }, [theme]);

  // darkQuery.addEventListener("change", (e) => {
  //   if (!("theme" in localStorage)) {
  //     if (e.matches) {
  //       element.classList.add("dark");
  //     } else {
  //       element.classList.remove("dark")
  //     }
  //   }
  // })

  return (
    <div className='flex justify-between h-[10%] items-center mx-5'>
      <div className='flex mr-auto'>
        <div className='h-12 w-12 bg-[#dce4ff] flex justify-center items-center rounded-tl-lg rounded-bl-lg'>
          <FiSearch className='text-[#555555]' />
        </div>
        <input
          className='focus:border-none focus:outline-none focus:ring-0 rounded-tr-lg rounded-br-lg text-[#464646] border-none bg-[#dce4ff]'
          type='text'
          placeholder='Search'
        />
      </div>

      <div className='flex items-center gap-4 relative'>
        <button
          onClick={() => dispatch({ type: "SHOW_SIDEBAR" })}
          className='hover:bg-[#263238]/10 grid h-10 w-10 align-middle text-center rounded-lg relative max-h-[40px] max-w-[40px] dark:text-white font-medium uppercase xl:hidden hover:cursor-pointer active:bg-[#b0c1ca]'>
          <span className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <AiOutlineMenu size={25} />
          </span>
        </button>
        {theme === "light" ? (
          <MdBrightness4
            size={25}
            className='text-blue-400 cursor-pointer hidden xl:block'
            onClick={() => setTheme("dark")}
          />
        ) : (
          <MdBrightness7
            size={25}
            className='text-yellow-400 cursor-pointer hidden xl:block'
            onClick={() => setTheme("light")}
          />
        )}
        <img
          ref={imgRef}
          className='hidden lg:block h-12 w-12 rounded-[50%] cursor-pointer'
          src={profile.photoURL}
          alt='avatar'
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div
            ref={menuRef}
            className='block  absolute z-40 bg-white top-14 right-2 shadow-lg p-4 w-36 rounded-xl'>
            <ProfileMenu setOpen={setOpen} menuRef={menuRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
