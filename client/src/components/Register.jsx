import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import registerPic from "../assets/registerpic.jpg"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { register } from "../action/user";
import {useValue} from "../context/AuthContext"


const Register = () => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const { dispatch } = useValue()
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      const { confirmPassword, firstName, lastName, email, password } = values;
      register({ firstName, lastName, email, password }, dispatch);
      navigate("/login");

    },


  });

  return (
    <section className='min-h-screen shadow-2xl flex items-center justify-center'>
      <div className='bg-white flex flex-row-reverse rounded-2xl max-w-3xl p-5 items-center shadow-lg'>
        {/* form */}
        <div className='md:w-1/2 md:px-16 px-8'>
          <h2 className='text-2xl font-bold text-[#002d74]'>Register</h2>
          <p className='text-xs mt-4 text-gray-400'>
            Not a member?, easily Sign Up!
          </p>

          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <input
              className='p-2 mt-8 rounded-xl border'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />

            <input
              className='p-2 mt-2 rounded-xl border'
              type='text'
              name='lastName'
              placeholder='last Name'
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            <input
              className='p-2 mt-2 rounded-xl border'
              type='email'
              name='email'
              placeholder='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <div className='relative'>
              <input
                className='p-2 rounded-xl border w-full'
                type={visible ? "text" : "password"}
                name='password'
                placeholder='password'
                autoComplete='false'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {visible ? (
                <VscEyeClosed
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-1/2'
                  onClick={() => setVisible(false)}
                />
              ) : (
                <VscEye
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-1/2'
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <div className='relative'>
              <input
                className='p-2 rounded-xl border w-full'
                type={confirmVisible ? "text" : "password"}
                name='confirmPassword'
                placeholder='confirm Password'
                autoComplete='false'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              {confirmVisible ? (
                <VscEyeClosed
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-1/2'
                  onClick={() => setConfirmVisible(false)}
                />
              ) : (
                <VscEye
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-1/2'
                  onClick={() => setConfirmVisible(true)}
                />
              )}
            </div>
            <button
              type='submit'
              className='bg-[#002d7d] hover:scale-105 duration-300 rounded-xl text-white py-2'>
              Register
            </button>
          </form>

          {/* <div className='mt-6 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-400' />
            <p className='text-center text-sm'>OR</p>
            <hr className='border-gray-400' />
          </div>

          <button className='bg-white text-[#002D74] hover:scale-105 duration-300 font-semibold border text-sm py-2 w-full rounded-xl mt-5 flex justify-center items-center'>
            <FcGoogle size={25} className='mr-3' />
            Login with Google
          </button> */}

          <div className='text-[#002D74] text-xs flex justify-between mt-3 items-center'>
            <p>Already have an account?</p>
            <button className='hover:scale-110 duration-300 py-2 px-5 bg-white border rounded-xl'>
              <Link to='/login'>Login</Link>
            </button>
          </div>
        </div>

        {/* image */}
        <div className='w-1/2 md:block hidden max-h-max'>
          <img className='rounded-2xl' src={registerPic} alt='form pic' />
        </div>
      </div>
    </section>
  );
};

export default Register;
