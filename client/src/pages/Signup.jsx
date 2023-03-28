import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#E99B04] opacity-80 w-[70%] h-[90%] flex flex-col items-center ml-auto mr-auto mt-2 p-20'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 w-full'>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outile-none focus:shadow-outline" placeholder='Username' />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6 mt-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input type="password" className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
          <h6>Already have an account? <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Login</a></h6>
        </div>
        <p className="font-bold text-center text-gray-500 text-xs mt-3 mb-3 p-3">&copy;2023 SAFARI<span className='text-[#E99B04]'>FLIGHTS</span> All rights reserved.</p>
      </form>
    </div>
  )
}

export default Login