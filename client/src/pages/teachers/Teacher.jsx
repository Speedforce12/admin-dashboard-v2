import React, { useMemo, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import List from "../../components/table/List";
import { useValue } from "../../context/AuthContext";
import { useEffect } from "react";
import { getTeachers } from "../../action/teacher";

const Teacher = () => {
  const {
    state: { teachers, currentUser },
    dispatch,
  } = useValue();

  const COLUMNS = [
    { Header: "Name", accessor: "fullName" },
    { Header: "Address", accessor: "address" },
    { Header: "Email", accessor: "email" },
    { Header: "Contact", accessor: "contact" },
  ];

  useEffect(() => {
    getTeachers(dispatch, currentUser);
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => teachers, [teachers]);


  return (
    <div className='px-6 mt-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl  dark:text-white'>Teacher List</h1>
        <Link
          to='/new-teacher'
          className='bg-[#00AB55] text-white hover:shadow-xl hover:shadow-green-400/10 hover:bg-green-700 outline-none hover:m-0 focus:ring-4 inline-flex items-center focus:ring-green-400/30 rounded-lg px-4 py-2 font-bold'>
          <IoMdAdd size={25} />
          New Teacher
        </Link>
      </div>
      <div className='bg-white rounded-xl shadow-md overflow-x-auto mt-8 p-6 px-0 pt-0 pb-2'>
        <List data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Teacher;
