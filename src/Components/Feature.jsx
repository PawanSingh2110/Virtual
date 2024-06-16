import React from 'react'
const Feature = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-900 min-h-[700px] '>
      <div className='text-center'>
        <span className='bg-neutral-900 text-orange-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          feature
        </span>
        <h2 className='mt-10 lg:mt-20 text-3xl sm:text-5xl lg:text-6xl tarcking-wide'>
          EASILY BUILD 
          <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> YOUR CODE </span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20 ml-20'>
       <div className='grid grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

       <div className=' w-72 ml-20'>
          <h2 className='text-center'> Drag-and-Drop Interfaces</h2>
          <p className='mt-5  text-center text-neutral-800 '>Easily design and arrange your vr environments with a user-friendly Drag-and-Drop Interfaces </p>
        </div>

        <div className='w-72 ml-20'>
          <h2 className='text-center'>Multi-Platform Compatibility</h2>
          <p className='mt-5  text-center text-neutral-800 '>Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.s </p>
        </div>

        <div className='w-72 ml-20'>
          <h2 className='text-center'> Built-in Templates</h2>
          <p className='mt-5  text-center text-neutral-800'>Jumpstart your VR projects with a variety of built-in templates for different types of applications and environmentss </p>
        </div>

        <div className='w-72 ml-20 mt-20'>
          <h2 className='text-center'>Real-Time Preview</h2>
          <p className='mt-5  text-center text-neutral-800 '>Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments </p>
        </div>

        <div className='w-72 ml-20 mt-20'>
          <h2 className='text-center'>Collaboration Tools</h2>
          <p className='mt-5  text-center text-neutral-800 '>Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing </p>
        </div>

        <div className='w-72 ml-20 mt-20'>
          <h2 className='text-center'>Analytics Dashboard</h2>
          <p className='mt-5  text-center text-neutral-800 '>Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard </p>
        </div>
        
       </div>

      </div>

    </div>
  )
}

export default Feature
