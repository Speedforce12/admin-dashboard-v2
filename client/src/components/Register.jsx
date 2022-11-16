import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import registerPic from "../assets/registerpic.jpg";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { register } from "../action/user";
import { useValue } from "../context/AuthContext";
import * as yup from "yup";

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
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "Password does not match"),
  }),
});

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const { dispatch } = useValue();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validateOnBlur: true,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const { confirmPassword, firstName, lastName, email, password } = values;
      register({ firstName, lastName, email, password }, dispatch);
      navigate("/login");

      console.log(values);
    },
  });

  return (
    <section className='h-screen shadow-2xl flex items-center justify-center'>
      <div className='bg-white flex flex-row-reverse max-w-5xl rounded-2xl p-5 items-center shadow-lg'>
        {/* form */}
        <div className='md:w-1/2 md:px-16 px-8'>
          <h2 className='text-2xl font-bold text-[#002d74]'>Register</h2>
          <p className='text-xs mt-4 text-gray-400'>
            Not a member?, easily Sign Up!
          </p>

          <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div className='pt-4'>
              <label
                htmlFor='firstName'
                className={`block font-["Poppins"] text-sm ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "text-red-400"
                    : ""
                } `}>
                {formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : "First Name"}
              </label>
              <p className='text-sm font-latoBold text-red-400 '></p>
              <input
                className='p-2 mt-2 rounded-xl border w-full'
                type='text'
                name='firstName'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className='mt-1'>
              <label
                htmlFor='lastName'
                className={`block font-["Poppins"] text-sm ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "text-red-400"
                    : ""
                } `}>
                {formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : "Last Name"}
              </label>
              <p className='text-sm font-latoBold text-red-400'></p>
              <input
                className='p-2 mt-2 rounded-xl border w-full'
                type='text'
                name='lastName'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
            </div>

            <div>
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
              <p className='text-sm font-latoBold text-red-400 '></p>
              <input
                className='p-2 mt-2 rounded-xl border w-full'
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
              <p className='text-sm font-["Poppins"] text-red-400 '></p>
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

            <div className='relative'>
              <label
                htmlFor='confirmPassword'
                className={`block font-["Poppins"] text-sm ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "text-red-400"
                    : ""
                } `}>
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : "Confirm Password"}
              </label>
              <input
                className='p-2 rounded-xl border w-full'
                type={confirmVisible ? "text" : "password"}
                name='confirmPassword'
                autoComplete='false'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {confirmVisible ? (
                <VscEyeClosed
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-2/5'
                  onClick={() => setConfirmVisible(false)}
                />
              ) : (
                <VscEye
                  className='text-gray-400 absolute top-1/2 right-3 cursor-pointer -translate-y-2/5'
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

          <div className='text-[#002D74] text-xs flex justify-between gap-2 mt-3 items-center'>
            <p>Already have an account?</p>
            <button className='hover:scale-110 duration-300 py-2 px-5 bg-white border rounded-xl'>
              <Link to='/login'>Login</Link>
            </button>
          </div>
        </div>

        {/* image */}
        <div className='md:w-1/2 md:block hidden'>
          <img className='rounded-2xl' src={registerPic} alt='form_pic' />
        </div>
      </div>
    </section>
  );
};

export default Register;
