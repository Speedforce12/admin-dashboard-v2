import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Router = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar />

      <div className='p-4 xl:ml-80 '>
        <Header />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Router;
