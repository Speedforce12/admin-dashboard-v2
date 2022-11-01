import React, { useState } from "react";
import Chart from "./Chart";
import Expense from "./expense/Expense";
import Income from "./income/Income"

const Finance = () => {
  const [choice, setChoice] = useState("")

  return (
    <div className='grid  gap-5 px-16'>
      <h1 className='text-center font-bold font-[Poppins] text-3xl'>
        Expense Tracker
      </h1>
      <div className='flex flex-row gap-8 p-8'>
        {/* income */}
        <div className='flex-[2] p-8 w-[20%] bg-white rounded-md justify-center items-center'>
          <h2 className='text-center pb-3 font-semibold round'>Income</h2>
          <Chart />
        </div>

        <div className='flex-[3] flex flex-col items-center justify-center w-96 rounded-2xl shadow-2xl bg-white'>
          {choice === "income" && <Income setChoice={setChoice} />}
          {choice === "expense" && <Expense setChoice={setChoice} />}

          {choice === "" && (
            <>
              <h2 className='text-center mb-36'>
                Please Click a button to track finances
              </h2>

              <div className='flex gap-3'>
                <button
                  onClick={() => setChoice("income")}
                  className=' animate-bounce transform active:scale-75 transition-transform focus:ring-4 outline-none focus:ring-green-400 text-white font-extrabold rounded-lg shadow-2xl py-2 px-4 bg-green-500 '
                >
                  Income
                </button>
                <button
                  onClick={() => setChoice("expense")}
                  className=' animate-bounce transform active:scale-y-75 transition-transform focus:ring-4 outline-none focus:ring-red-400  text-white font-extrabold rounded-lg shadow-2xl py-2 px-4 bg-red-500'
                >
                  Expense
                </button>
              </div>
            </>
          )}
        </div>

        {/* expense */}
        <div className='flex-[2] p-8 bg-white rounded-md justify-center items-center'>
          <h2 className='text-center pb-3 font-semibold'>Expense</h2>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Finance;
