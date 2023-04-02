import React from "react";
import { Link } from 'react-router-dom';
// import { ReviewsContext } from '../context/Reviewscontext';
// import StarRating from './StarRating'
const Home = () => {
  //const { averageRating } = useContext(ReviewsContext)

  return (
    <div className=' mx-5 pt-2'>
    {/* {text} */}
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col justify-center items-center'>
        <p className='font-bold font-serif text-white text-6xl pb-4 '>Welcome to</p>
        <p className='font-bold text-5xl text-white'>SAFARI<span className=' text-[#E99B04] '>FLIGHTS</span></p>
      </div>
      {/* {image} */}  
      <img 
        className='background-cover w-full rounded-lg h-[600px] mb-6 opacity-40'
        src="https://images.pexels.com/photos/11935297/pexels-photo-11935297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Flight" 
      />
    </div>
  
    <div className="flex justify-center mt-4">
    <Link to="/flight">
      <button type="button" className="px-5 py-2.5 mr-2 mb-2 text-sm font-medium text-black bg-[#E99B04] rounded-lg focus:outline-none hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">
        Get Started
      </button>
    </Link>

    </div>
    {/* reviews to be added */}
   <>
    <div className='flex justify-center'>
      {/* <div>
       
      <StarRating rating={averageRating} />
        
      </div> */}
    </div>
</>


  </div>
  

  )
}

export default Home