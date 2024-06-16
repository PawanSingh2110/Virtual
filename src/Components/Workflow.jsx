import React from 'react'
import { CheckCircle2, Code } from 'lucide'
import codeImg from '../assets/code.jpg'
const Workflow = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-900 '>
      <div className='text-center'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-wide'>Accelerate Your 
      <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{""} Coding Workflow 
        </span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full lg:w-1/2 p-2'>
            <img src={codeImg} alt="Code" className='mt-10' />

        </div>
        <div className='pt-12 w-full lg:w-1/2'>
            <div className='mt-20 flex flex-col  '>
                <h2 className='text-start ml-7'> ✓ Code merge made easy :</h2>
                <p className='mt-3 text-neutral-700'>Track the performance of your VR apps and gain insights into user behavior</p>
            </div> 

            <div className='mt-10 flex flex-col'>
                <h2 className='text-start ml-7'>✓ Review code without worry :</h2>
                <p className='mt-3 text-neutral-700'>Track the performance of your VR apps and gain insights into user behavior</p>
            </div>

            <div className='mt-10 flex flex-col'>
                <h2 className='text-start ml-7'>✓ AI Assistance to reduce time :</h2>
                <p className='mt-3 text-neutral-700'>Track the performance of your VR apps and gain insights into user behavior</p>
            </div>

            <div className='mt-10 flex flex-col'>
                <h2 className='text-start ml-7'>✓ Share work in minutes :</h2>
                <p className='mt-3 text-neutral-700'>Track the performance of your VR apps and gain insights into user behavior</p>
            </div>

           
        </div>
      </div>

      </div>
    </div>
  )
}

export default Workflow
