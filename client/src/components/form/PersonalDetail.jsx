import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { FormContext } from "../stepperform/StepperMain";

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Required'),
  birth: yup.string().required("Date of Birth is Required"),
  student_type: yup.string().required('Student Type is Required'),
  gender: yup.string().required("Student Gender is Required"),
  religion: yup.string(),
  medical: yup.string().required("Medical is Required"),
  prevSchool: yup.string().required("Previous Attended School is Required"),
});

const PersonalDetail = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birth: "",
      student_type: "CPEA",
      gender: "Male",
      religion: "",
      medical: "",
      prevSchool: "",
    },

    validateOnBlur: true,
    validationSchema: validationSchema,
    enableReinitialize:true,

    onSubmit: (values) => { 
   const data = { ...formData, ...values };
   setFormData(data);
   setActiveStepIndex(activeStepIndex + 1);
  
    }
  });

  return (
    <div className='relative w-full my-0 mx-4 p-8 flex flex-col'>
      <header className='text-xl font-semibold relative text-gray-700 before:absolute before:-bottom-1 before:h-1 before:w-7 before:rounded-lg before:left-0 before:bg-blue-600'>
        Registration
      </header>
      <div className='flex-auto px-4 lg:px-10 py-10 pt-10'>
        <form onSubmit={formik.handleSubmit}>
          <h6 className='text-gray-500 text-sm mt-3 mb-6 font-bold uppercase'>
            Student Information
          </h6>
          <div className='flex-wrap flex'>
            <div className='w-full lg:w-3/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='firstName'>
                  {formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : "First Name"}
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='firstName'
                />
              </div>
            </div>
            <div className='w-full lg:w-3/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='lastName'>
                  {formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : "Last Name"}
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='lastName'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.gender && formik.errors.gender
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='birth'>
                  {formik.touched.student_type && formik.errors.student_type
                    ? formik.errors.student_type
                    : " Date of Birth"}
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.birth}
                  onBlur={formik.handleBlur}
                  type='date'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='birth'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.student_type && formik.errors.student_type
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='student_type'>
                  {formik.touched.student_type && formik.errors.student_type
                    ? formik.errors.student_type
                    : "Student Type"}
                </label>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.student_type}
                  onBlur={formik.handleBlur}
                  name='student_type'
                  id='student_type'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                  <option value='CPEA'>CPEA</option>
                  <option value='Transfer'>Transfer</option>
                </select>
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.gender && formik.errors.gender
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='gender'>
                  {formik.touched.gender && formik.errors.gender
                    ? formik.errors.gender
                    : " Gender"}
                </label>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  onBlur={formik.handleBlur}
                  name='gender'
                  id='gender'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
            </div>
            <div className='w-full lg:w-4/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.religion && formik.errors.religion
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='religion'>
                  {formik.touched.religion && formik.errors.religion
                    ? formik.errors.religion
                    : "Denomination"}
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.religion}
                  onBlur={formik.handleBlur}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='religion'
                />
              </div>
            </div>
            <div className='w-full lg:w-4/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.medical && formik.errors.medical
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='medical'>
                  {formik.touched.medical && formik.errors.medical
                    ? formik.errors.medical
                    : "Medical Condition"}
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.medical}
                  onBlur={formik.handleBlur}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='medical'
                />
              </div>
            </div>
            <div className='w-full lg:w-4/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                    formik.touched.prevSchool && formik.errors.prevSchool
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor='prevSchool'>
                  {formik.touched.prevSchool && formik.errors.prevSchool
                    ? formik.errors.prevSchool
                    : "Previous School Attended"}
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.prevSchool}
                  onBlur={formik.handleBlur}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='prevSchool'
                />
              </div>
       
              <button
                className='rounded-md bg-indigo-500 font-medium text-white my-2 p-2'
                type='submit'>
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetail;
