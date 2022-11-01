import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Router = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='flex-1'>
        <Header />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Router;
