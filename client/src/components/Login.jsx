import formImage from "../assets/form.png";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
// import {FcGoogle} from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { login } from "../action/user";
import { useValue } from "../context/AuthContext";
import * as yup from "yup";


const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});



const Login = () => {
  const { dispatch } = useValue();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validateOnBlur: true,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const { email, password } = values;
      login({ email, password }, dispatch);
      navigate("/");
    },
  });

  return (
    <section className='h-screen shadow-2xl flex items-center justify-center'>
      <div className='bg-white flex rounded-2xl max-w-5xl p-5 items-center shadow-lg'>
        {/* form */}
        <div className='md:w-1/2 md:px-16 px-8'>
          <h2 className='text-2xl font-bold text-[#002d74]'>Login</h2>
          <p className='text-xs mt-4 text-gray-400'>
            If you already a member, easily log in
          </p>

          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div className='mt-8'>
              <label
                htmlFor='email'
                className={`block font-["Poppins"] text-sm ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : ""
                } `}>
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <p className='text-sm font-latoBold text-red-400 my-1'></p>
              <input
                className='p-2 rounded-xl border w-full'
                type='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className='relative'>
              <label
                htmlFor='password'
                className={`block font-["Poppins"] text-sm ${
                  formik.touched.password && formik.errors.password
                    ? "text-red-400"
                    : ""
                } `}>
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : "Password"}
              </label>
              <p className='text-sm font-["Poppins"] text-red-400 my-1'></p>
              <input
                className='p-2 rounded-xl border w-full'
                type={visible ? "text" : "password"}
                name='password'
                autoComplete='false'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {visible ? (
                <VscEyeClosed
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-2/5'
                  onClick={() => setVisible(false)}
                />
              ) : (
                <VscEye
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-2/5'
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <button
              disabled={!formik.isValid}
              type='submit'
              className='disabled:bg-gray-300 disabled:cursor-not-allowed disabled:scale-100 bg-[#002d7d] hover:scale-105 duration-300 rounded-xl text-white py-2 hover:cursor-pointer'>
              Login
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

          <div className='mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]'>
            <Link href='#'>Forgot your password?</Link>
          </div>

          <div className='text-[#002D74] text-xs flex justify-between mt-3 items-center'>
            <p>Don't have an account?</p>
            <button className='hover:scale-110 duration-300 py-2 px-5 bg-white border rounded-xl'>
              <Link to='/register'>Register</Link>
            </button>
          </div>
        </div>

        {/* image */}
        <div className='md:w-1/2 md:block hidden'>
          <img className='rounded-2xl' src={formImage} alt='login_pic' />
        </div>
      </div>
    </section>
  );
};

export default Login;
