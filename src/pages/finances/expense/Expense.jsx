import React from "react";

const Expense = ({setChoice}) => {
  return (
    <div className='flex items-center justify-center'>
      <form className='flex rounded-lg w-[400px] font-sans'>
        <div className='flex text-gray-700 p-14 flex-col'>
          <span className='text-lg font-semibold'>
            Please enter the necessary expense
          </span>
          <div className='mt-8'>
            {/* Income title */}
            <div className='pb-4'>
              <label htmlFor='expense' className='block font-bold text-sm pb-2'>
                Expense Title
              </label>
              <input
                type='text'
                name='expense'
                placeholder='Expense description'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
              />
            </div>

            {/* amount expense */}
            <div className='pb-4'>
              <label htmlFor='amount' className='block font-bold text-sm pb-2'>
                Income Amount
              </label>
              <input
                type='number'
                name='amount'
                placeholder='amount'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
              />
            </div>

            {/* Date */}
            <div className='pb-4'>
              <label htmlFor='date' className='block font-bold text-sm pb-2'>
                Date
              </label>
              <input
                type='date'
                name='date'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
              />
            </div>

            {/* Category */}
            <div className='pb-4'>
              <label
                htmlFor='category'
                className='block font-bold text-sm pb-2'
              >
                Category
              </label>
              <select
                name='category'
                id='category'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
              >
                <option value='Bills'>Bills</option>
                <option value='Groceries'>Groceries</option>
                <option value='Office Supplies'>Office Supplies</option>
                <option value='Tuck-Shop'>Tuck-Shop</option>
                <option value='Salaries'>Salaries</option>
                <option value='Social-Events'>Social-Events</option>
                <option value='Student Affairs'>Student Affairs</option>
                <option value='Teacher Affairs'>Teacher Affairs</option>
                <option value='Others'>Others</option>
              </select>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-indigo-500 focus:ring-4 focus:ring-Indigo-300/75 font-[Poppins] text-sm text-white font-semibold block mt-6 py-2 px-4 rounded-lg'
                >
                  Add Expense
                </button>

                <button
                  className='bg-red-500 focus:ring-4 focus:ring-red-300/75 font-[Poppins] text-sm text-white font-semibold block mt-6 py-2 px-4 rounded-lg'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Expense;
