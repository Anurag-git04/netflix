import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const Vtile = () => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>Anurag Sahw </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure necessitatibus ipsum. Tempore nobis corrupti ex </p>
      <div className='flex mt-8'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
          <CiPlay1 />
          <span className='mr-1'>Play</span>
        </button>
        <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 opacity-50 text-black rounded-md hover:bg-opacity-80'>
          <CiCircleInfo />
          <span>Watch more</span>
        </button>
      </div>
    </div>
  )
}

export default Vtile