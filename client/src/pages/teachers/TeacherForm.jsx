import * as yup from "yup";
import { useFormik } from "formik";
import { createTeacher } from "../../action/teacher";
import { useValue } from "../../context/AuthContext"


const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Please enter a name more than 3 letters")
    .required("Full Name is required"),
  address: yup.string().required("Address is required"),
  qualification: yup.string(),
  contact: yup.string().required("Contact Number is required"),
  email: yup.string().email("Please enter a valid email address").required(),
  subjects: yup.string().required("Subjects Taught are required"),
  birth: yup.string().required("Date of Birth is required"),
});

const TeacherForm = () => {
  const {state:{currentUser}, dispatch} = useValue()
  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      contact: "",
      qualification: "",
      email: "",
      subjects: "",
      birth: "",
      achievements: "",
    },

    validateOnBlur: true,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const {fullName, address, contact, qualification, email, subjects, birth, achievements} = values
      createTeacher({
        fullName,
        address,
        contact,
        qualification,
        email,
        subjects,
        birth,
        achievements,
      }, currentUser, dispatch);
      formik.resetForm()
    },
  });

  return (
    <div className='mt-8 text  bg-white max-w-5xl mx-auto rounded-lg p-6 dark:bg-gray-700 shadow-xl'>
      <h1 className='text-2xl font-bold text-gray-700 dark:text-white capitalize'>
        Teacher Registration
      </h1>
      <form
        className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-6'
        onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor='fullName'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.fullName && formik.errors.fullName
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : "Full Name"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='text'
            name='fullName'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:outline-blue-500'
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='address'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.address && formik.errors.address
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.address && formik.errors.address
              ? formik.errors.address
              : "Address"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='text'
            name='address'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='contact'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.contact && formik.errors.contact
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.contact && formik.errors.contact
              ? formik.errors.contact
              : "Contact Number"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='text'
            name='contact'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.contact}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='qualification'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.qualification && formik.errors.qualification
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.qualification && formik.errors.qualification
              ? formik.errors.qualification
              : "Qualification"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='text'
            name='qualification'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.qualification}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.email && formik.errors.email
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='email'
            name='email'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='subjects'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.subjects && formik.errors.subjects
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.subjects && formik.errors.subjects
              ? formik.errors.subjects
              : "Subjects Teaching"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='text'
            name='subjects'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.subjects}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='birth'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.birth && formik.errors.birth
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.birth && formik.errors.birth
              ? formik.errors.birth
              : "Date of Birth"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='date'
            name='birth'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.birth}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor='achievements'
            className={`block font-["Poppins"] text-sm ${
              formik.touched.achievements && formik.errors.achievements
                ? "text-red-400"
                : "dark:text-white"
            } `}>
            {formik.touched.achievements && formik.errors.achievements
              ? formik.errors.achievements
              : "Personal Achievements (if any)"}
          </label>
          <p className='text-sm font-["Poppins"] text-red-400 mt-2'></p>
          <input
            type='text'
            name='achievements'
            className='bg-indigo-300 hover:bg-white rounded-lg block w-full focus:border-none focus:ring'
            onChange={formik.handleChange}
            value={formik.values.achievements}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <button
            type='submit'
            className='py-2 px-4 bg-green-800 text-white rounded-md cursor-pointer active:translate-y-4 hover:bg-green-500 transition-all duration-500 hover:text-black font-semibold uppercase'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
