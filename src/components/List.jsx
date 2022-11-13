import { BsTrash, BsEye } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";

const List = ({ data, columns }) => {
  return (
    <>
      <table className='w-full table-auto'>
        <thead className='bg-gray-50 border-b-2 border-gray-200 border-collapse'>
          <tr>
            {columns?.map((head) => (
              <th className='w-7 p-3 text-sm font-bold tracking-wide text-left uppercase' key={head.header}>
                {head.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {data?.map((row) => (
            <tr className='bg-white even:bg-white odd:bg-gray-300' key={row.id}>
              <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                {row.id}
              </td>
              <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                {row.name}
              </td>
              <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                {row.address}
              </td>
              <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                {row.date}
              </td>
              <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                {row.order}
              </td>
              <td className='flex gap-3 whitespace-nowrap p-3 text-sm text-gray-700'>
                <button>
                  <MdOutlineModeEditOutline className='h-5 w-5' />
                </button>
                <button>
                  <BsTrash className='h-5 w-5' />
                </button>

                <button>
                  <BsEye className='h-5 w-5' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
