import React, { useEffect, useMemo } from "react";
import { IoMdAdd } from "react-icons/io";
import List from "../../components/table/List";
import { useValue } from "../../context/AuthContext";
import { getUsers } from "../../action/user"
import {format} from "date-fns"

const Users = () => {

    const {
      state: { users, currentUser },
      dispatch,
  } = useValue();
  
  const COLUMNS = [
    { Header: "Avatar", accessor: "" },
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Email", accessor: "email" },
    { Header: "Created on", accessor: "createdAt", Cell: ({value})=> {return format(new Date(value), 'dd/MM/yyyy') } },
  ];

    useEffect(() => {
      getUsers(dispatch, currentUser);
    }, []);

    const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => users, [users]);
  
  return (
    <div className='px-6 mt-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl  dark:text-white'>User's List</h1>
          <button className='bg-[#00AB55] text-white hover:shadow-xl hover:shadow-green-400/10 hover:bg-green-700 outline-none hover:m-0 focus:ring-4 inline-flex items-center focus:ring-green-400/30 rounded-lg px-4 py-2 font-bold'>
            <IoMdAdd size={25} />
            New User
          </button>
      </div>
      <div className='bg-white rounded-xl shadow-md overflow-x-auto mt-8 p-6 px-0 pt-0 pb-2'>
        <List data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Users;
