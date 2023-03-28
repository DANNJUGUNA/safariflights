import React from 'react'

const Login = () => {
  return (
    <div className='bg-white py-4 mx-5 rounded-3xl mb-1 mt-1'>
    <div className='bg-[#160194] opacity-80 w-[50%] h-[90%] rounded-3xl flex flex-col items-center ml-auto mr-auto mt-2 p-20'>
      <form className='bg-white shadow-lg rounded-3xl px-8 pt-6 pb-6 mb-4 w-full'>
        <div className="mb-4">
          <label htmlFor="username" className="block text-black text-lg font-bold mb-2">Username</label>
          <input type="text" className="shadow appearance-none border border-[#160194] rounded-3xl w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='Username' />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black text-lg font-bold mb-2">Email</label>
          <input type="email" className="shadow appearance-none border border-[#160194] rounded-3xl w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='aaa@gmail.com' />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-back text-lg font-bold mb-2">Password</label>
          <input type="password" className="shadow appearance-none border border-[#160194] rounded-3xl w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6 mt-4">
          <label htmlFor="password" className="block text-black text-lg font-bold mb-2">Confirm Password</label>
          <input type="password" className="shadow appearance-none border border-[#160194] rounded-3xl w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center flex-col">
          <button type="button" className="bg-[#160194] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
          <h6>Already have an account? <a href="#" className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800">Login</a></h6>
        </div>
        <p className="font-bold text-center text-gray-500 text-xs mt-3 mb-3 p-3">&copy;2023 SAFARI<span className='text-[#E99B04]'>FLIGHTS</span> All rights reserved.</p>
      </form>
    </div>
    </div>
  )
}

export default Login