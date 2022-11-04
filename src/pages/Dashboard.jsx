
import List from "../components/List";
import StatsCard from "../components/StatsCard";
import Task from "./tasks/Task";

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-7 mt-5 mx-5 justify-center'>
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
      <div className=' px-2 py-8 mt-5 flex justify-items-center  mr-4'>
        <div className='bg-white hover:shadow-2xl text-center w-max flex flex-col rounded-lg p-4 shadow-xl ml-4 py-5'>
          <h4 className='font-semibold text-lg mb-2 '>Task </h4>
          <Task />
        </div>
        <div className='bg-white text-center hover:shadow-2xl flex flex-col flex-[4] rounded-lg p-4 shadow-xl ml-4 py-5'>
          <h4 className='font-semibold text-lg mb-2 '>Upcoming Events</h4>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
