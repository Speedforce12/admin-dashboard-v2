import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { createExpense } from "../../../action/expense";
import { useValue } from "../../../context/AuthContext";

const validationSchema = yup.object({
  expense: yup.string().required("The Expense Title is required"),
  amount: yup.number().min(1, "Expense must be greater than 0").required("The amount is required"),
  date: yup.string().required("Please select a date"),
  category: yup.string().required('Please select a category')
});

const Expense = ({ setChoice }) => {
  const {state:{currentUser}, dispatch} = useValue()
  const formik = useFormik({
    initialValues: {
      expense: "",
      amount: 0,
      date: "",
      category: "Bills",
    },

    validationSchema: validationSchema,
    validateOnBlur: true,

    onSubmit: (values) => {
      const { expense, amount, date, category } = values;

      createExpense({ expense, amount, date, category }, currentUser, dispatch);
      formik.resetForm()
    },
  });

  return (
    <div className='flex items-center justify-center'>
      <form
        className='flex rounded-lg w-[400px] font-sans'
        onSubmit={formik.handleSubmit}>
        <div className='flex text-gray-700 p-14 flex-col'>
          <span className='text-lg font-semibold dark:text-white'>
            Please enter the necessary expense
          </span>
          <div className='mt-8'>
            {/* Income title */}
            <div className='pb-4'>
              <label
                htmlFor='expense'
                className={`block font-bold text-sm pb-2 ${
                  formik.touched.expense && formik.errors.expense
                    ? "text-red-400"
                    : "dark:text-white "
                } `}>
                {formik.touched.expense && formik.errors.expense
                  ? formik.errors.expense
                  : "Expense Title"}
              </label>
              <input
                type='text'
                name='expense'
                placeholder='Expense description'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
                value={formik.values.expense}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* amount expense */}
            <div className='pb-4'>
              <label
                htmlFor='amount'
                className={`block font-bold text-sm pb-2 ${
                  formik.touched.amount && formik.errors.amount
                    ? "text-red-400"
                    : "dark:text-white "
                } `}>
                {formik.touched.amount && formik.errors.amount
                  ? formik.errors.amount
                  : "Expense Amount"}
              </label>
              <input
                type='number'
                name='amount'
                placeholder='amount'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Date */}
            <div className='pb-4'>
              <label
                htmlFor='date'
                className={`block font-bold text-sm pb-2 ${
                  formik.touched.date && formik.errors.date
                    ? "text-red-400"
                    : "dark:text-white "
                } `}>
                {formik.touched.date && formik.errors.date
                  ? formik.errors.date
                  : "Date"}
              </label>
              <input
                type='date'
                name='date'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Category */}
            <div className='pb-4'>
              <label
                htmlFor='category'
                className='block font-bold text-sm pb-2 dark:text-white'>
                Category
              </label>
              <select
                name='category'
                id='category'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-5 pr-9 rounded-lg min-w-max'
                value={formik.values.category}
                onChange={formik.handleChange}>
                <option  value='Bills'>Bills</option>
                <option  value='Groceries'>Groceries</option>
                <option  value='Office Supplies'>Office Supplies</option>
                <option  value='Tuck-Shop'>Tuck-Shop</option>
                <option  value='Salaries'>Salaries</option>
                <option  value='Social-Events'>Social-Events</option>
                <option  value='Student Affairs'>Student Affairs</option>
                <option  value='Teacher Affairs'>Teacher Affairs</option>
                <option  value='Others'>Others</option>
              </select>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-indigo-500 focus:ring-4 focus:ring-Indigo-300/75 font-[Poppins] text-sm text-white font-semibold block mt-6 py-2 px-4 rounded-lg'>
                  Add Expense
                </button>

                <button
                  className='bg-red-500 focus:ring-4 focus:ring-red-300/75 font-[Poppins] text-sm text-white font-semibold block mt-6 py-2 px-4 rounded-lg'
                  onClick={() => setChoice("")}>
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
