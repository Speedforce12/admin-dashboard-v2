import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { createIncome } from "../../../action/income";
import { useValue } from "../../../context/AuthContext";

const validationSchema = yup.object({
  income: yup.string().required("The Income Title is required"),
  amount: yup
    .number()
    .min(1, "Income must be greater than 0")
    .required("The amount is required"),
  date: yup.string().required("Please select a date"),
  category: yup.string().required("Please select a category"),
});

const Income = ({ setChoice }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  const formik = useFormik({
    initialValues: {
      income: "",
      amount: 0,
      date: "",
      category: "Government",
    },

    validationSchema: validationSchema,
    validateOnBlur: true,

    onSubmit: (values) => {
      const { income, amount, date, category } = values;

      createIncome({ income, amount, date, category }, currentUser, dispatch);
      formik.resetForm();
    },
  });

  return (
    <div className='flex items-center justify-center'>
      <form
        className='flex rounded-lg w-[400px] font-sans'
        onSubmit={formik.handleSubmit}>
        <div className='flex text-gray-700 p-14 flex-col'>
          <span className='text-lg font-semibold dark:text-white'>
            Please enter the necessary income
          </span>
          <div className='mt-8'>
            {/* Income title */}
            <div className='pb-4'>
              <label
                htmlFor='income'
                className={`block font-bold text-sm pb-2 ${
                  formik.touched.income && formik.errors.income
                    ? "text-red-400"
                    : "dark:text-white "
                } `}>
                {formik.touched.income && formik.errors.income
                  ? formik.errors.income
                  : "Income Title"}
              </label>
              <input
                type='text'
                name='income'
                placeholder='Income description'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 px-4 rounded-lg min-w-max'
                value={formik.values.income}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* amount income */}
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
                  : "Income Amount"}
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
                className={`block font-bold text-sm pb-2 ${
                  formik.touched.category && formik.errors.category
                    ? "text-red-400"
                    : "dark:text-white "
                } `}>
                {formik.touched.category && formik.errors.category
                  ? formik.errors.category
                  : "Category"}
              </label>
              <select
                name='category'
                id='category'
                className='focus:outline-none focus:border-lime-400 border-2 py-2 rounded-lg min-w-max'
                value={formik.values.category}
                onChange={formik.handleChange}>
                onBlur={formik.handleBlur}
                <option className='px-6' value='Government'>
                  Government
                </option>
                <option className='px-6' value='school fee'>
                  School Fee
                </option>
              </select>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-lime-500 focus:ring-4 focus:ring-lime-300/75 font-[Poppins] text-sm text-white font-semibold block mt-6 py-2 px-4 rounded-lg'>
                  Add Income
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

export default Income;
