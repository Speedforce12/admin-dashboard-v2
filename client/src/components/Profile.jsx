import React, { useState } from "react";
import { useFormik } from "formik";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useEffect } from "react";
import * as yup from "yup";
import { useValue } from "../context/AuthContext";
import { updateProfile } from "../action/user";

const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "Please enter a name more than 3 letters")
    .required("First Name is required"),
  lastName: yup
    .string()
    .min(3, "Please enter a last name more than 3 letters")
    .required("Last Name is required"),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "Password does not match"),
  }),

  file: yup
    .mixed()
    .test(
      "FILE_SIZE",
      "Too large of a file",
      (value) => !value || (value && value.size < 1024 * 1024)
    )
    .test(
      "FILE_TYPE",
      "Invalid file type",
      (value) =>
        !value ||
        (value &&
          ["image/png", "image/jpeg", "image/gif"].includes(value?.type))
    ),
});

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [userData, setUserData] = useState({});
  const {
    state: { profile, currentUser },
    dispatch,
  } = useValue();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const { firstName, lastName } = userData;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      file: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: (values) => {
      const { firstName, lastName, file, confirmPassword, password } = values;
      if (file) {
        const photoURL = URL.createObjectURL(file);
        dispatch({
          type: "UPDATE_PROFILE",
          payload: { ...profile, file, photoURL },
        });
       
      }
       updateProfile(
         currentUser,
         { ...values, file: profile.file },
         dispatch
       );

    },
  });

  console.log(profile)

  return (
    <div className='p-6 bg-white mt-8 rounded-lg max-w-4xl shadow-lg justify-items-center mx-auto dark:bg-gray-700'>
      <h1 className='text-2xl font-bold text-gray-700 dark:text-white capitalize'>
        Profile Setting
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-6'>
          <div>
            <label
              htmlFor='firstName'
              className={`block font-["Poppins"] text-sm ${
                formik.touched.firstName && formik.errors.firstName
                  ? "text-red-400"
                  : "dark:text-white"
              } `}>
              {formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : "First Name"}
            </label>
            <p className='text-sm font-["Poppins"] text-red-400 '></p>
            <input
              type='text'
              name='firstName'
              className='block w-full rounded-md bg-gray-200 focus:bg-white mt-3 focus:ring  border-gray-200 focus:border-lime-100'
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <label
              htmlFor='lastName'
              className={`block font-["Poppins"] text-sm ${
                formik.touched.lastName && formik.errors.lastName
                  ? "text-red-400"
                  : "dark:text-white"
              } `}>
              {formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : "Last Name"}
            </label>
            <p className='text-sm font-["Poppins"] text-red-400 '></p>
            <input
              type='text'
              name='lastName'
              className='block w-full rounded-md bg-gray-200 focus:bg-white mt-3 focus:ring  border-gray-200 focus:border-lime-100'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className='relative'>
            <label
              htmlFor='password'
              className={`block font-["Poppins"] text-sm ${
                formik.touched.password && formik.errors.password
                  ? "text-red-400"
                  : "dark:text-white"
              } `}>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : "Password"}
            </label>
            <p className='text-sm font-["Poppins"] text-red-400 '></p>
            <input
              type={visible ? "text" : "password"}
              name='password'
              placeholder='password'
              autoComplete='false'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block w-full rounded-md bg-gray-200 focus:bg-white mt-3 focus:ring border-gray-200 focus:border-lime-100'
            />
            {visible ? (
              <VscEyeClosed
                className='text-gray-400 absolute top-1/2 right-3 cursor-pointer translate-y-1/2'
                onClick={() => setVisible(false)}
              />
            ) : (
              <VscEye
                className='text-gray-400 absolute top-1/2 right-3 cursor-pointer translate-y-1/2'
                onClick={() => setVisible(true)}
              />
            )}
          </div>

          <div className='relative'>
            <label
              htmlFor='confirmPassword'
              className={`block font-["Poppins"] text-sm ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "text-red-400"
                  : "dark:text-white"
              } `}>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : "Confirm Password"}
            </label>
            <p className='text-sm font-["Poppins"] text-red-400 '></p>
            <input
              type={confirmVisible ? "text" : "password"}
              name='confirmPassword'
              placeholder='confirm Password'
              autoComplete='false'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='block w-full rounded-md bg-gray-200 focus:bg-white mt-3 focus:ring border-gray-200 focus:border-lime-100'
            />
            {confirmVisible ? (
              <VscEyeClosed
                className='text-gray-400 absolute top-1/2 right-3 cursor-pointer translate-y-1/2'
                onClick={() => setConfirmVisible(false)}
              />
            ) : (
              <VscEye
                className='text-gray-400 absolute top-1/2 right-3 cursor-pointer translate-y-1/2'
                onClick={() => setConfirmVisible(true)}
              />
            )}
          </div>
          <div>
            <label
              className={`block font-["Poppins"] text-sm ${
                formik.errors.image ? "text-red-400" : "dark:text-white"
              } `}
              htmlFor='image'>
              {formik.errors.image ? formik.errors.image : "Profile Image"}
            </label>
            <p className='text-sm font-["Poppins"] text-red-400 '></p>
            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-white'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'>
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label
                    htmlFor='file'
                    className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                    <span className=''>Upload a file</span>
                    <input
                      id='file'
                      name='file'
                      type='file'
                      className='sr-only'
                      onChange={(e) =>
                        formik.setFieldValue("file", e.target.files[0])
                      }
                    />
                  </label>
                  <p className='pl-1 text-white'>or drag and drop</p>
                </div>
                <p className='text-xs text-white'>PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <button
              type='submit'
              className='absolute ml-10 mr-10 mt-14 px-4 py-2 focus:ring-lime-800 bg-green-500 text-xl text-white rounded-xl shadow-lg focus:ring-2  font-semibold capitalize transition-all ease-in-out active:scale-110'>
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
