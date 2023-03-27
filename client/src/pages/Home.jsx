import React from 'react'

const Home = () => {
  return (
    <div className=' mx-5 pt-2'>
        {/* {text} */}
        <div>
          <div className='absolute w-full mt-48  
            flex flex-col justify-center items-center'>
            <p className=' font-bold text-white text-6xl pb-4 '>Welcome To</p>
            <p className='font-bold text-4xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
          </div>
        {/* {image} */}
        
            <img 
            className=' background-cover w-full rounded-lg h-[600px] mb-6 opacity-40'
            src="https://images.pexels.com/photos/11935297/pexels-photo-11935297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Flight" />
      </div>
    </div>
  )
}

export default Home