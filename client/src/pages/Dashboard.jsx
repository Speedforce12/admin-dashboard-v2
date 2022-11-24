import List from "../components/table/List";
import StatsCard from "../components/StatsCard";
import Task from "./tasks/Task";

const Dashboard = () => {
  return (
    <>
      <div className='mt-5'>
        <StatsCard />
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-x-6 gap-y-12'>
        <div className='bg-white hover:shadow-2xl text-center grid col-span-2 xl:col-span-1 overflow-x-scroll  rounded-lg items-center shadow-xl'>
          <h4 className='font-semibold text-lg mb-2'>Task </h4>
          <Task />
        </div>
        <div className='bg-white text-center hover:shadow-2xl grid lg:col-span-2 rounded-lg shadow-xl py-5 overflow-auto'>
          <h4 className='font-semibold text-lg mb-2 '>Upcoming Events</h4>
          {/* <List /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
