const Acceptance = ({userData, setUserData}) => {


  return (
    <div className='flex flex-col relative w-full my-0 mx-4 p-8'>
      <header className='text-xl font-semibold relative text-gray-700 before:absolute before:-bottom-1 before:h-1 before:w-7 before:rounded-lg before:left-0 before:bg-blue-600'>
        Acceptance
      </header>
      <div className='flex-auto px-4 lg:px-10 py-10 pt-10'>
        <form action=''>
          {/* <h6 className='text-gray-500 text-sm mt-3 mb-6 font-bold uppercase'>
            Student Information
          </h6> */}
          <div className='flex-wrap flex'>
            <div className='w-full lg:w-3/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='guardianName'>
                  Guardian's Name
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, guardianName: e.target.value })
                  }
                  value={userData.guardianName}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='guardianName'
                />
              </div>
            </div>
            <div className='w-full lg:w-3/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='guardianAddress'>
                  Address
                </label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      guardianAddress: e.target.value,
                    })
                  }
                  value={userData.guardianAddress}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='guardianAddress'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='guardianHome'>
                  Home Number
                </label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      guardianHome: e.target.value,
                    })
                  }
                  value={userData.guardianHome}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='guardianHome'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='guardianCell'>
                  Cell Number
                </label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      guardianCell: e.target.value,
                    })
                  }
                  value={userData.guardianCell}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='guardianCell'
                />
              </div>
            </div>
            <div className='w-full lg:w-2/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='guardianWork'>
                  Work Number
                </label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      guardianWork: e.target.value,
                    })
                  }
                  value={userData.guardianWork}
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  name='guardianWork'
                />
              </div>
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-4'>
            <label className='block uppercase text-blueGray-600 text-xs font-bold mb-2'>
              Agreement Contract
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
                    htmlFor='file_upload'
                    className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                    <span className=''>Upload Contract of Acceptance</span>
                    <input
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          file_upload: e.target.files,
                        })
                      }
                      value={userData.file_upload}
                      id='file_upload'
                      name='file_upload'
                      type='file'
                      className='sr-only'
                    />
                  </label>
                  <p className='pl-1 text-gray-500'>or drag and drop</p>
                </div>
                <p className='text-xs text-gray-500'>
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Acceptance;
