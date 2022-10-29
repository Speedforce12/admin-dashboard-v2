import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <div className='sm:flex-col flex h-[97vh] rounded-[2rem] bg-gradient-to-br from-white/0 to-[#e6e4ff]/70'>
      <Sidebar />

      <div className='sm:flex sm:flex-col sm:w-full sm:mt-4 sm:mx-0 sm:mb-0 rounded-br-[2rem] rounded-tr-[2rem] my-4 mr-32 ml-8 w-[80%] bg-gradient-to-br from-white/0 to-[#e6e4ff]/70'>
        {<Outlet />}
      </div>
    </div>
  );
};

export default Router;
