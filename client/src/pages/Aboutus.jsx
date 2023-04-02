import React from 'react'
const Aboutus = () => {
  return (

<div className=' mx-5 pt-2'>
        {/* {text} */}
      <div>
       <div className='absolute w-full mt-48  
         flex flex-col justify-center items-center'>
         <p className='font-bold text-5xl font-serif text-[#E99B04]'>Welcome to SafariFlights</p>
          <p className='w-4/5 text-3xl font-medium font-serif text-white text-center'>
        SafariFlights is one of the fastest growing airlines in the continent. The airline is very grateful to all our customers for their feedback on the services we offer. Our focus is always to ensure that we provide quality and customer satisfying services.      </p>     
       </div>
        {/* {image} */}
        
      <img 
      className=' background-cover w-full rounded-lg h-[600px] mb-6 opacity-40'
      src="https://images.pexels.com/photos/11935297/pexels-photo-11935297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Flight" />
      </div>
    </div>

  )
}

export default Aboutus