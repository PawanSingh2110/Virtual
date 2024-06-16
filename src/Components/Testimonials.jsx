import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
const Testimonials = () => {
  return (
    <div className='relative mt-20  border-neutral-900  '>
      <div className='text-center'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-wide '>
        What People Say About US
        </h2>
        <div className='grid grid-cols-3 gap-x-10 gap-y-8 sm:grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3   ml-20 p-20 max-w-6xl'>
            <div className='border border-neutral-800 rounded-lg w-72 h-48 ml-20' >
                <p className='p-3 text-start text-sm text-neutral-600'>I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>
                <div className='flex'>
                <img src={user1} alt="user1" className='h-8 w-8 rounded-full ml-5 mt-2' />
                <div>
                    <h2 className='p-2 ml-1'>John Doe <br/>
                    <span className='text-sm text-neutral-800 ml-5'>Stellar Solutions</span></h2>
                    
                </div>
                </div>

            </div>

            <div className='border border-neutral-800 rounded-lg w-72 h-48 ml-20' >
                <p className='p-3 text-start text-sm text-neutral-600'>I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.</p>
                <div className='flex'>
                <img src={user2} alt="user1" className='h-8 w-8 rounded-full ml-5 mt-2' />
                <div>
                    <h2 className='p-2 ml-1'>jane smith <br/>
                    <span className='text-sm text-neutral-800 ml-5'>Blue Horizon Technologies</span></h2>
                    
                </div>
                </div>

            </div>


            <div className='border border-neutral-800 rounded-lg w-72 h-48 ml-20' >
                <p className='p-3 text-start text-sm text-neutral-600'> Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service</p>
                <div className='flex'>
                <img src={user3} alt="user1" className='h-8 w-8 rounded-full ml-5 mt-2' />
                <div>
                    <h2 className='p-2 ml-1'>David Jonhson <br/>
                    <span className='text-sm text-neutral-800 ml-5'>Quantum Innovations</span></h2>
                    
                </div>
                </div>

            </div>


            <div className='border border-neutral-800 rounded-lg w-72 h-48 ml-20' >
                <p className='p-3 text-start text-sm text-neutral-600'> Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism.</p>
                <div className='flex'>
                <img src={user4} alt="user1" className='h-8 w-8 rounded-full ml-5 mt-2' />
                <div>
                    <h2 className='p-2 ml-1'>Ronee Brown <br/>
                    <span className='text-sm text-neutral-800 ml-5'>Fusion Dynamics</span></h2>
                    
                </div>
                </div>

            </div>

            <div className='border border-neutral-800 rounded-lg w-72 h-48 ml-20' >
                <p className='p-3 text-start text-sm text-neutral-600'>I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding resultss.</p>
                <div className='flex'>
                <img src={user5} alt="user1" className='h-8 w-8 rounded-full ml-5 mt-2' />
                <div>
                    <h2 className='p-2 ml-1'>Michael Wilson <br/>
                    <span className='text-sm text-neutral-800 ml-5'>Visionary Creation</span></h2>
                    
                </div>
                </div>

            </div>


            <div className='border border-neutral-800 rounded-lg w-72 h-48 ml-20' >
                <p className='p-3 text-start text-sm text-neutral-600'>I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>
                <div className='flex'>
                <img src={user6} alt="user1" className='h-8 w-8 rounded-full ml-5 mt-2' />
                <div>
                    <h2 className='p-2 ml-1'>Emily Davis <br/>
                    <span className='text-sm text-neutral-800 ml-5'>Synergy Systems</span></h2>
                    
                </div>
                </div>

            </div>

            



        </div>

      </div>
    </div>
  )
}

export default Testimonials
