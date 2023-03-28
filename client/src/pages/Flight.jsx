import React from 'react'

function Flight ({ from, destination, departure, duration, cost }) {
    return(
      <div className='flex flex-col-3 gap-6 p-4 w-full h-50vh'>
        <div className=" bg-white rounded-md shadow-md p-6 w-[30%]">
          <div className= "col-span-1 gap-2"flex justify-between items-center mb-4>
            <h3 className="text-xl font-bold">destination:{destination}</h3>
            <p className="text-gray-600">departure:{departure}</p>
          </div>
          <div className="col-span-1 gap-2" flex justify-between items-center mb-4>
            <h4 className="text-lg">from:{from}</h4>
            <p className="text-gray-600">duration:{duration}</p>
          </div>
          <div className="col-span-1 gap-2">
            <p className="text-lg font-bold text-green-600">${cost}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Book Now</button>
          </div>
        </div>
        <div className=" bg-white rounded-md shadow-md p-6 w-[30%]">
          <div className="col-span-1 gap-2">
            <h3 className="text-xl font-bold">destination:{destination}</h3>
            <p className="text-gray-600">departure:{departure}</p>
          </div>
          <div className="col-span-1 gap-2">
            <h4 className="text-lg">from:{from}</h4>
            <p className="text-gray-600">duration:{duration}</p>
          </div>
          <div className="col-span-1 gap-2">
            <p className="text-lg font-bold text-green-600">${cost}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Book Now</button>
          </div>
        </div>
        <div className=" bg-white rounded-md shadow-md p-6 w-[30%]">
          <div className="col-span-1 gap-2">
            <h3 className="text-xl font-bold">destination:{destination}</h3>
            <p className="text-gray-600">departure:{departure}</p>
          </div>
          <div className="col-span-1 gap-2">
            <h4 className="text-lg">from:{from}</h4>
            <p className="text-gray-600">duration:{duration}</p>
          </div>
          <div className="col-span-1 gap-2">
            <p className="text-lg font-bold text-green-600">${cost}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Book Now</button>
          </div>
        </div>
      </div>
    );   
}
export default Flight