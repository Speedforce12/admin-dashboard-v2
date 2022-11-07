const PersonalDetail = ({ userData, setUserData }) => {

  return (
    <div className='relative w-full my-0 mx-4 p-8 flex flex-col'>
      <header className='text-xl font-semibold relative text-gray-700 before:absolute before:-bottom-1 before:h-1 before:w-7 before:rounded-lg before:left-0 before:bg-blue-600'>
        Registration
      </header>
      <div className='flex-auto px-4 lg:px-10 py-10 pt-10'>
        <form action=''>
          <h6 className='text-gray-500 text-sm mt-3 mb-6 font-bold uppercase'>
            Student Information
          </h6>
          <div className='flex-wrap flex'>
            <div className='w-full lg:w-3/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='firstName'>
                  First Name
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                  value={userData.firstName}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='firstName'
                />
              </div>
            </div>
            <div className='w-full lg:w-3/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='lastName'>
                  Last Name
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                  value={userData.lastName}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='lastName'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='birth'>
                  Date of Birth
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, birth: e.target.value })
                  }
                  value={userData.birth}
                  type='date'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='birth'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='student_type'>
                  Student Type
                </label>
                <select
                  onChange={(e) =>
                    setUserData({ ...userData, student_type: e.target.value })
                  }
                  value={userData.student_type}
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
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='gender'>
                  Gender
                </label>
                <select
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  value={userData.gender}
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
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='religion'>
                  Denomination
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, religion: e.target.value })
                  }
                  value={userData.religion}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='religion'
                />
              </div>
            </div>
            <div className='w-full lg:w-4/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='medical'>
                  Medical Condition
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, medical: e.target.value })
                  }
                  value={userData.medical}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='medical'
                />
              </div>
            </div>
            <div className='w-full lg:w-4/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='prevSchool'>
                  Previous School Attended
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, prevSchool: e.target.value })
                  }
                  value={userData.prevSchool}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='prevSchool'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetail;
