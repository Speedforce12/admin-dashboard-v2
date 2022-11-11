
const List = () => {
    return (
      <>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='w-7 p-3 text-sm font-semibold tracking-wide text-left'>
                  No.
                </th>
                <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>
                  Details
                </th>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'>
                  Status
                </th>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'>
                  Date
                </th>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'>
                  Total
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              <tr className='bg-white'>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  1
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  Gaming Mouse
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  <span className='p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg text-gray-800 bg-gray-200/50'>
                    Cancelled
                  </span>
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  15/10/22
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  $521
                </td>
              </tr>
              <tr className='bg-gray'>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  2
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  Gaming Mouse
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  <span className='p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg text-yellow-800 bg-yellow-200/50'>
                    Shipped
                  </span>
                </td>
                <td>15/10/22</td>
                <td>$471</td>
              </tr>
              <tr className='bg-white'>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  3
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  Laptop
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  <span className='p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg text-green-800 bg-green-200/50'>
                    Delivered
                  </span>
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  15/10/22
                </td>
                <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                  $811
                </td>
              </tr>
            </tbody>
          </table>
      </>
    );
};

export default List;
