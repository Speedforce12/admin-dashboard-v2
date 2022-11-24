import { useFormik } from "formik";
import * as yup from "yup";
import React, { useContext } from "react";
import { FormContext } from "../stepperform/StepperMain";

const validationSchema = yup.object({
  fatherName: yup.string().required("Father name required"),
  fatherAddress: yup.string().required("Father address required"),
  fatherOccupation: yup.string().required("Father Occupation required"),
  fatherHome: yup.string(),
  fatherCell: yup.string().required("Father cell required"),
  fatherWork: yup.string(),
  fatherEmail: yup
    .string()
    .email("Please enter a valid email address")
    .required(),
  motherName: yup.string().required("Mother name required"),
  motherAddress: yup.string().required("Mother address required"),
  motherOccupation: yup.string().required("Mother Occupation required"),
  motherHome: yup.string(),
  motherCell: yup.string().required("Mother Cell Number is Required"),
  motherWork: yup.string(),
  motherEmail: yup
    .string()
    .email("Please enter a valid email address")
    .required(),
});

const ParentDetail = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      fatherName: "",
      fatherAddress: "",
      fatherOccupation: "",
      fatherHome: "",
      fatherCell: "",
      fatherWork: "",
      fatherEmail: "",
      motherName: "",
      motherAddress: "",
      motherOccupation: "",
      motherHome: "",
      motherCell: "",
      motherWork: "",
      motherEmail: "",
    },

    validateOnBlur: true,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      setActiveStepIndex(activeStepIndex + 1);
      console.log(values);
    },
  });

  return (
    <div className='flex flex-col  relative w-full  my-0 mx-4 p-8'>
      <header className='text-xl font-semibold relative text-gray-700 before:absolute before:-bottom-1 before:h-1 before:w-7 before:rounded-lg before:left-0 before:bg-blue-600'>
        Parents Information
      </header>
      <div className='flex-auto px-4 lg:px-10 py-5 pt-5'>
        <form onSubmit={formik.handleSubmit}>
          {/* <h6 className='text-gray-500 text-sm mt-3 mb-6 font-bold uppercase'>
            Parent's Information
          </h6> */}
          <div className='flex w-full'>
            <div className='lg:w-1/2 lg:border-r-2 mr-5'>
              <h6 className='text-gray-500 text-sm mt-3 mb-6 font-bold uppercase'>
                Father Information
              </h6>
              <div className='flex-wrap flex'>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherName && formik.errors.fatherName
                          ? "text-red-400"
                          : "Father Name"
                      } `}
                      htmlFor='fatherName'>
                      {formik.touched.fatherName && formik.errors.fatherName
                        ? formik.errors.fatherName
                        : " Father's Name"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fatherName}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherName'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherAddress &&
                        formik.errors.fatherAddress
                          ? "text-red-400"
                          : "Father Address"
                      } `}
                      htmlFor='fatherAddress'>
                      {formik.touched.fatherAddress &&
                      formik.errors.fatherAddress
                        ? formik.errors.fatherAddress
                        : "Address"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fatherAddress}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherAddress'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherOccupation &&
                        formik.errors.fatherOccupation
                          ? "text-red-400"
                          : "Occupation"
                      } `}
                      htmlFor='fatherOccupation'>
                      {formik.touched.fatherOccupation &&
                      formik.errors.fatherOccupation
                        ? formik.errors.fatherOccupation
                        : "Occupation"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fatherOccupation}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherOccupation'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherHome && formik.errors.fatherHome
                          ? "text-red-400"
                          : "Home Number"
                      } `}
                      htmlFor='fatherHome'>
                      {formik.touched.fatherHome && formik.errors.fatherHome
                        ? formik.errors.fatherHome
                        : "Home Number"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fatherHome}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherHome'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherCell && formik.errors.fatherCell
                          ? "text-red-400"
                          : "text-black"
                      } `}
                      htmlFor='fatherCell'>
                      {formik.touched.fatherCell && formik.errors.fatherCell
                        ? formik.errors.fatherCell
                        : "Cell Number"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fatherCell}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherCell'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherWork && formik.errors.fatherWork
                          ? "text-red-400"
                          : "text-black"
                      } `}
                      htmlFor='fatherWork'>
                      {formik.touched.fatherWork && formik.errors.fatherWork
                        ? formik.errors.fatherWork
                        : "Work Number"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.fatherWork}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherWork'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.fatherEmail && formik.errors.fatherEmail
                          ? "text-red-400"
                          : "text-black"
                      } `}
                      htmlFor='fatherEmail'>
                      {formik.touched.fatherEmail && formik.errors.fatherEmail
                        ? formik.errors.fatherEmail
                        : "Email"}
                    </label>
                    <input
                      o
                      onChange={formik.handleChange}
                      value={formik.values.fatherEmail}
                      onBlur={formik.handleBlur}
                      type='email'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherEmail'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2'>
              <h6 className='text-gray-500 text-sm mt-3 mb-6 font-bold uppercase'>
                Mother Information
              </h6>
              <div className='flex-wrap flex'>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherName && formik.errors.motherName
                          ? "text-red-400"
                          : "Mother Name"
                      } `}
                      htmlFor='motherName'>
                      {formik.touched.motherName && formik.errors.motherName
                        ? formik.errors.motherName
                        : " Father's Name"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.motherName}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherName'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherAddress &&
                        formik.errors.motherAddress
                          ? "text-red-400"
                          : "Father Address"
                      } `}
                      htmlFor='motherAddress'>
                      {formik.touched.motherAddress &&
                      formik.errors.motherAddress
                        ? formik.errors.motherAddress
                        : "Address"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.motherAddress}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherAddress'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherOccupation &&
                        formik.errors.motherOccupation
                          ? "text-red-400"
                          : "Occupation"
                      } `}
                      htmlFor='motherOccupation'>
                      {formik.touched.motherOccupation &&
                      formik.errors.motherOccupation
                        ? formik.errors.motherOccupation
                        : "Occupation"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.motherOccupation}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherOccupation'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherHome && formik.errors.motherHome
                          ? "text-red-400"
                          : "Home Number"
                      } `}
                      htmlFor='motherHome'>
                      {formik.touched.motherHome && formik.errors.motherHome
                        ? formik.errors.motherHome
                        : "Home Number"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.motherHome}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherHome'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherCell && formik.errors.motherCell
                          ? "text-red-400"
                          : "text-black"
                      } `}
                      htmlFor='motherCell'>
                      {formik.touched.motherCell && formik.errors.motherCell
                        ? formik.errors.motherCell
                        : "Cell Number"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.motherCell}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherCell'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherWork && formik.errors.motherWork
                          ? "text-red-400"
                          : "text-black"
                      } `}
                      htmlFor='motherWork'>
                      {formik.touched.motherWork && formik.errors.motherWork
                        ? formik.errors.motherWork
                        : "Work Number"}
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.motherWork}
                      onBlur={formik.handleBlur}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherWork'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full'>
                    <label
                      className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        formik.touched.motherEmail && formik.errors.motherEmail
                          ? "text-red-400"
                          : "text-black"
                      } `}
                      htmlFor='motherEmail'>
                      {formik.touched.motherEmail && formik.errors.motherEmail
                        ? formik.errors.motherEmail
                        : "Email"}
                    </label>
                    <input
                      o
                      onChange={formik.handleChange}
                      value={formik.values.motherEmail}
                      onBlur={formik.handleBlur}
                      type='email'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherEmail'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <button
              className='rounded-md bg-indigo-500 font-medium text-white my-2 p-2'
              type='button'
              onClick={() => setActiveStepIndex(activeStepIndex - 1)}>
              Back
            </button>
            <button
              className='rounded-md bg-indigo-500 font-medium text-white my-2 p-2'
              type='submit'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParentDetail;
