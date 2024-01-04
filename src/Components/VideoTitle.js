import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen h-screen text-white aspect-video pt-[20%] px-24  bg-gradient-to-b from-black absolute ">
   <div className='container mx-auto  py-8  text-white'>
  <h1 className='font-serif text-4xl'>{title}</h1>
  <p className='py-6 text-2xl w-2/4 font-sans font-normal text-gray-300'>
    {overview}
  </p>
</div>

        <div className="flex gap-4 pl-6 -my-8">
    <button className="flex items-center  cursor-pointer border border-white justify-center px-4 py-2 rounded-lg font-semibold text-white uppercase bg-red-600 hover:bg-red-800 transition duration-300">
        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 14.5v-9l7 4.5-7 4.5z" />
        </svg>
        Play
    </button>
    
    <button className="flex items-center  cursor-pointer justify-center border border-white px-4 py-2 rounded-lg font-semibold text-white uppercase bg-red-600 hover:bg-red-900 transition duration-300">
        More Info 
    </button>
</div>


    </div>






  )
}

export default VideoTitle

