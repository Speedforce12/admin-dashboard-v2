import React, { useState } from 'react'
import { useAsyncDebounce } from "react-table";


const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {

const count = preGlobalFilteredRows.length;

  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);
  return (
    <div className='mb-6 mt-6 flex items-center ml-3'>
      <h2 className='text-xl text-gray-600 mr-6'>Search DataTable</h2>
      <input
        type='text'
        className='h-8 border-2 border-solid border-indigo-400/25 focus:ring-0 outline-none p-4 rounded-lg'
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </div>
  );
};

export default GlobalFilter