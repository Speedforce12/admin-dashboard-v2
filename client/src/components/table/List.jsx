import { BsTrash, BsEye } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";

const List = ({ data, columns }) => {
  const {
    getTableProps,
    preGlobalFilteredRows,
    setGlobalFilter,
    getTableBodyProps,
    headerGroups,
    state,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    previousPage,
    pageOptions,
    page,
    prepareRow,
  } = useTable({ data, columns }, useGlobalFilter, usePagination);

  const {pageIndex, pageSize} = state;

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <table className='w-full table-auto' {...getTableProps()}>
        <thead className='bg-gray-50 border-b-2 border-gray-200 border-collapse'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className='w-7 p-3 text-sm font-bold tracking-wide text-left uppercase'
                  {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""} */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-gray-100' {...getTableBodyProps()}>
          {page?.map((row) => {
            prepareRow(row);
            return (
              <tr
                className='bg-white even:bg-white odd:bg-gray-300'
                {...row.getRowProps()}>
                {row.cells?.map((cell) => {
                  return (
                    <td
                      className='whitespace-nowrap p-3 text-sm text-gray-700'
                      {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}

                {/* <td className='flex gap-3 whitespace-nowrap p-3 text-sm text-gray-700'>
                <button>
                  <MdOutlineModeEditOutline className='h-5 w-5' />
                </button>
                <button>
                  <BsTrash className='h-5 w-5' />
                </button>

                <button>
                  <BsEye className='h-5 w-5' />
                </button>
              </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='flex justify-between p-4'>
        <button
          className='bg-indigo-400/70 py-2 px-4 rounded-lg hover:bg-indigo-600 font-semibold active:ring-2  focus:ring-indigo-500 cursor-pointer hover:text-white'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          Previous
        </button>

        <div>
          {" "}
          <span>
            Page{"  "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <select className="ml-5 rounded-lg py-1 focus:ring-0" value={pageSize} onChange={e=> setPageSize(Number(e.target.value))}>
            {
              [10, 25, 50].map(pageSize => (
                <option  value={pageSize} key={pageSize}>Show { pageSize}</option> 
              ))
}
          </select>
        </div>
        <button
          className='bg-indigo-400/70 py-2 px-4 rounded-lg hover:bg-indigo-600 font-semibold active:ring-2  focus:ring-indigo-500 cursor-pointer hover:text-white'
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default List;
