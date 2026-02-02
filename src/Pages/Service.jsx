import React from 'react'


const Service = () => {
  return (
    <div className=' bg-orange-200'>
      <div className='h-40 w-full flex flex-col items-center pt-5'>
      <h1 className='text-6xl font-bold'>Our Services</h1> 
      <p className='text-3xl '>Empowering Your E-commerce Journey</p>       
      </div>

      <div className='h-200 w-300 m-auto grid grid-cols-2 gap-10 p-5 justify-items-center '>
        <div className='h-50 w-100 '>
          <h1 className='text-4xl font-bold'>Product Management</h1>
          <p className='text-xl py-5'>Seamless tools to manage your products and inventory with ease.</p>
          <img src="https://i.pinimg.com/736x/83/9e/f7/839ef77f09b0ec46d9cc6408f057f621.jpg" alt="" className='h-full w-100 rounded shadow-xl' />
        </div>
        <div className='h-50 w-100 '>
         <h1 className='text-4xl font-bold'>Analytics Dashboard</h1>
          <p className='text-xl py-5 '>Gain valuable insights into your sales, customers, and traffic.</p>
          <img src="https://i.pinimg.com/736x/34/b7/ae/34b7ae7048760c002df6399130a0c7fd.jpg" alt=""  className='h-full w-100 rounded shadow-xl'/>
        </div>
        <div className='h-50 w-100 '> 
           <h1 className='text-4xl font-bold'>Customer Support</h1>
          <p className='text-xl py-5 '> Powerful solutions to reach and engage your target audience.</p>
          <img src="https://i.pinimg.com/1200x/e6/cd/f6/e6cdf68ad3b4789a6e0ff556d63b9bbe.jpg" alt=""  className='h-full w-100 rounded shadow-xl' />
        </div>
        <div className='h-50 w-100 '>
           <h1 className='text-4xl font-bold'>Marketing Tools</h1>
          <p className='text-xl py-5 '>Provide exceptional service with our integrated support tools.</p>
          <img src="https://i.pinimg.com/736x/9f/b8/8f/9fb88fec21a85bdfcecfb9283a649176.jpg" alt=""  className='h-full w-100 rounded shadow-xl' />
        </div>
      </div>
        
    </div>
  )
}

export default Service