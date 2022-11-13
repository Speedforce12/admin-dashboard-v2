const ParentDetail = ({ userData, setUserData }) => {

  return (
    <div className='flex flex-col  relative w-full  my-0 mx-4 p-8'>
      <header className='text-xl font-semibold relative text-gray-700 before:absolute before:-bottom-1 before:h-1 before:w-7 before:rounded-lg before:left-0 before:bg-blue-600'>
        Parents Information
      </header>
      <div className='flex-auto px-4 lg:px-10 py-5 pt-5'>
        <form action=''>
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
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherName'>
                      Father's Name
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherName: e.target.value,
                        })
                      }
                      value={userData.fatherName}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherName'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherAddress'>
                      Address
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherAddress: e.target.value,
                        })
                      }
                      value={userData.fatherAddress}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherAddress'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherOccupation'>
                      Occupation
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherOccupation: e.target.value,
                        })
                      }
                      value={userData.fatherOccupation}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherOccupation'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherHome'>
                      Home Number
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherHome: e.target.value,
                        })
                      }
                      value={userData.fatherHome}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherHome'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherCell'>
                      Cell Number
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherCell: e.target.value,
                        })
                      }
                      value={userData.fatherCell}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherCell'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherWork'>
                      Work Number
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherWork: e.target.value,
                        })
                      }
                      value={userData.fatherWork}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='fatherWork'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='fatherEmail'>
                      Email
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          fatherEmail: e.target.value,
                        })
                      }
                      value={userData.fatherEmail}
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
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherName'>
                      Mother's Name
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherName: e.target.value,
                        })
                      }
                      value={userData.motherName}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherName'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherAddress'>
                      Address
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherAddress: e.target.value,
                        })
                      }
                      value={userData.motherAddress}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherAddress'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherOccupation'>
                      Occupation
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherOccupation: e.target.value,
                        })
                      }
                      value={userData.motherOccupation}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherOccupation'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherHome'>
                      Home Number
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherHome: e.target.value,
                        })
                      }
                      value={userData.motherHome}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherHome'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherCell'>
                      Cell Number
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherCell: e.target.value,
                        })
                      }
                      value={userData.motherCell}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherCell'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherWork'>
                      Work Number
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherWork: e.target.value,
                        })
                      }
                      value={userData.motherWork}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherWork'
                    />
                  </div>
                </div>

                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='motherEmail'>
                      Email
                    </label>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          motherEmail: e.target.value,
                        })
                      }
                      value={userData.motherEmail}
                      type='email'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      name='motherEmail'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParentDetail;
