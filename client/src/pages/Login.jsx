import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' bg-white py-4 mt-1 mx-5 mb-1 rounded-3xl w-[90%] ml-auto mr-auto'>
      <div className='bg-[#160194]  opacity-80 w-[500px] h-[90%] rounded-3xl flex flex-col items-center ml-auto mr-auto mt-2 p-20'>
        <form className='bg-white shadow-md rounded-3xl px-8 pt-6 pb-6 mb-4 w-full'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black text-lg font-bold mb-2">Username</label>
            <input type="text" className="shadow appearance-none border border-[#160194] outline-none rounded-md w-full py-2 px-3 text-black leading-tight focus:outile-none focus:shadow-outline" placeholder='janeCollins' />
          </div>
          <div className="mb-3 mt-4">
            <label htmlFor="password" className="block text-black text-lg font-bold mb-2">Password</label>
            <input type="password" className="shadow  outline-none appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3  focus:outline-none focus:shadow-outline"  placeholder=' JV!uh0%9IUL*8'/>
            {/* <p className="text-red-500 text-xs italic">Please enter your password</p> */}
          </div>
          <div className="flex items-center flex-col">
          <a href="#" className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800 mb-2">Forgot Password?</a>
            <button type="button" className="bg-[#160194] hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline">Login</button>
            <h6>Don't have an account? <Link to="/signup" className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800">Sign Up</Link></h6>
      
          </div>
          <p className="font-bold text-center text-gray-500 text-xs mt-3 mb-3 p-3">&copy;2023 SAFARI<span className='text-[#E99B04]'>FLIGHTS</span> All rights reserved.</p>
        </form>
      </div>
    </div>

  )
}

export default Login