import React, { useState } from "react";
import { useFormik } from "formik";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useEffect } from "react";

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const { firstName, lastName } = userData;

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: "",
      password: "",
    },
    enableReinitialize: true,

    onsubmit: (values) => {},
  });

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
              className='dark:text-white font-semibold'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              className='block w-full rounded-md bg-gray-200 focus:bg-white mt-3 focus:ring  border-gray-200 focus:border-lime-100'
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor='lastName' className='dark:text-white font-semibold'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              className='block w-full rounded-md bg-gray-200 focus:bg-white mt-3 focus:ring  border-gray-200 focus:border-lime-100'
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          <div className='relative'>
            <label
              htmlFor='firstName'
              className='dark:text-white font-semibold'>
              Password
            </label>
            <input
              type={visible ? "text" : "password"}
              name='password'
              placeholder='password'
              autoComplete='false'
              value={formik.values.password}
              onChange={formik.handleChange}
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
              htmlFor='firstName'
              className='dark:text-white font-semibold'>
              Confirm Password
            </label>
            <input
              type={confirmVisible ? "text" : "password"}
              name='confirmPassword'
              placeholder='confirm Password'
              autoComplete='false'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
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
            <label className='block text-sm font-medium text-white'>
              Profile Image
            </label>
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
                    htmlFor='file-upload'
                    className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                    <span className=''>Upload a file</span>
                    <input
                      id='file-upload'
                      name='file-upload'
                      type='file'
                      className='sr-only'
                    />
                  </label>
                  <p className='pl-1 text-white'>or drag and drop</p>
                </div>
                <p className='text-xs text-white'>PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className='relative '>
            <button
              type='submit'
              className='absolute ml-40 mr-40 mt-14 px-4 py-2 focus:ring-lime-800 bg-green-500 text-xl text-white rounded-xl shadow-lg focus:ring-2  font-semibold capitalize transition-all ease-in-out active:scale-110'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
