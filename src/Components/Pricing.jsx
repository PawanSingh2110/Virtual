import React from 'react'

const Pricing = () => {
  return (
    <div className='relative mt-20 broder-b border-neutral-800 tracking-wide'>
      <div className='text-center'>
        <h2 className='text-3xl sm:text-5xl lg:6xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>PricinG</h2>
      </div>
      <div className='mt-5 grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 p-20'>
         <div className='border border-neutral-500 w-64 h-96 rounded-xl ml-20'> 
         <h1 className='text-3xl mt-5 pl-5'>free</h1>
          <h2 className='text-3xl mt-5 pl-5'>$0
            <span className='text-sm text-neutral-600 '>/month</span>
          </h2>
          <p className='mt-5 pl-5'>✓ Private Board Sharing</p>
          <p className='mt-5 pl-5'>✓ 5GB Storage</p>
          <p className='mt-5 pl-5'>✓ Web Analysis</p>
          <p className='mt-5 pl-5'>✓ Private mode</p>

          <button className='mt-8 border border-orange-600 rounded-md ml-10 px-10 py-2'>Subscribe</button>


         </div>

         <div className='border border-neutral-500 w-64 h-96 rounded-xl ml-20'> 
         <h1 className='text-3xl mt-5 pl-5'>Pro
         <span className='text-sm bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>(most popular)</span></h1>
          <h2 className='text-3xl mt-5 pl-5'>$10
            <span className='text-sm text-neutral-600 '>/month</span>
          </h2>
          <p className='mt-5 pl-5'>✓ Private Board Sharing</p>
          <p className='mt-5 pl-5'>✓ 10GB Storage</p>
          <p className='mt-5 pl-5'>✓ Web Adv Analysis</p>
          <p className='mt-5 pl-5'>✓ Private mode</p>
          <button className='mt-8 border border-orange-600 rounded-md ml-10 px-10 py-2'>Subscribe</button>


         </div>

         <div className='border border-neutral-500 w-64 h-96 rounded-xl ml-20'> 
         <h1 className='text-3xl mt-5 pl-5'>Enterprise</h1>
          <h2 className='text-3xl mt-5 pl-5'>$200
            <span className='text-sm text-neutral-600 '>/month</span>
          </h2>
          <p className='mt-5 pl-5'>✓ Private Board Sharing</p>
          <p className='mt-5 pl-5'>✓ Unlimited Storage</p>
          <p className='mt-5 pl-5'>✓ High Performance Net</p>
          <p className='mt-5 pl-5'>✓ Private mode</p>
          <button className='mt-8 border border-orange-600 rounded-md ml-10 px-10 py-2'>Subscribe</button>


         </div>
      </div>
    </div>
  )
}

export default Pricing
