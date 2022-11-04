import { IoMdAdd } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate()
  return (
    <div className='flex px-6 mt-6'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='font-bold text-xl  dark:text-white'>Student List</h1>
        <div className=''>
          <Link
            to='/new-student'
            className='bg-[#00AB55] text-white hover:shadow-xl hover:shadow-green-400/10 hover:bg-green-700 outline-none hover:m-0 focus:ring-4 inline-flex items-center focus:ring-green-400/30 rounded-lg px-4 py-2 font-bold'>
            <IoMdAdd size={25} />
            New Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Student;
