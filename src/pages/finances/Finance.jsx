import React, { useState } from "react";
import Chart from "./Chart";
import Expense from "./expense/Expense";
import Income from "./income/Income"

const Finance = () => {
  const [choice, setChoice] = useState("")

  return (
    <div className='grid xl:justify-items-center'>
      <h1 className='text-center font-bold font-[Poppins] text-3xl dark:text-white mt-4'>
        Expense Tracker
      </h1>
      <div className='xl:flex grid gap-8 pt-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {/* income */}
        <div className='col-span-1 bg-white rounded-md justify-center items-center dark:bg-slate-700'>
          <h2 className='text-center pb-3 font-semibold round dark:text-white pt-3'>
            Income
          </h2>
          <Chart />
        </div>

        <div className='flex flex-col  items-center justify-center col-span-1 rounded-2xl shadow-2xl bg-white dark:bg-slate-700 p-4'>
          {choice === "income" && <Income setChoice={setChoice} />}
          {choice === "expense" && <Expense setChoice={setChoice} />}

          {choice === "" && (
            <>
              <h2 className='text-center mb-36 font-semibold dark:text-white mt-5'>
                Please Click a button to track finances
              </h2>

              <div className='flex gap-3 dark:text-white'>
                <button
                  onClick={() => setChoice("income")}
                  className=' animate-bounce transform active:scale-75 transition-transform focus:ring-4 outline-none focus:ring-green-400 text-white font-extrabold rounded-lg shadow-2xl py-2 px-4 bg-green-500 '>
                  Income
                </button>
                <button
                  onClick={() => setChoice("expense")}
                  className=' animate-bounce transform active:scale-y-75 transition-transform focus:ring-4 outline-none focus:ring-red-400  text-white font-extrabold rounded-lg shadow-2xl py-2 px-4 bg-red-500'>
                  Expense
                </button>
              </div>
            </>
          )}
        </div>

        {/* expense */}
        <div className='bg-white rounded-md justify-center items-center col-span-1 dark:bg-slate-700'>
          <h2 className='text-center pb-3 font-semibold dark:text-white pt-3'>Expense</h2>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Finance;
