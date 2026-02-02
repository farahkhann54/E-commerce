import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-orange-200 '>
        <div className='h-190 w-250 m-auto '>
      <div className='h-40 w-full flex flex-col items-center pt-5'>
      <h1 className='text-6xl font-bold'>Contact Us </h1> 
      <p className='text-3xl '>Get in touch with us.</p> 
      </div>    

      <div className='h-110 w-200 m-auto flex p-5 gap-5'>
        <div className='flex flex-col gap-5 h-100 w-200 bg-orange-100 rounded p-5'>
            <div className='h-20'><h1 className='text-2xl font-bold'>Email  </h1>
            <p className='text-xl'>info@emmorce.com</p></div>
            <div className='h-20 '><h1 className='text-2xl font-bold'>Phone  </h1>
            <p className='text-xl'>+1 (555) 123-4567</p></div>
            <div className='h-20'><h1 className='text-2xl font-bold'>Address </h1>
            <p className='text-xl'>123 Commerce St.,</p>
                <p className='text-xl'>Suite 100, Los Angeles,</p>
                 <p className='text-xl'> CA 90001</p></div>
        </div>
        <div className='h-100 w-200 bg-orange-100 rounded p-5'>
            <div className='flex h-10 gap-5 mb-5'>
                <input className='h-10 w-pink border rounded pl-5' placeholder=' First Name'></input>
                <input  className='h-10 w-pink border rounded pl-5' placeholder='Last Name'></input>
            </div>
            <div className='flex h-80 flex-col gap-5' >
                <input className='h-10 w-pink border rounded pl-5' placeholder='Email address'></input>
                <input  className='h-10 w-pink border rounded pl-5' placeholder='Service'></input>
                <textarea name="" id="" className='h-30 pt-2 pl-3 border rounded' placeholder='Message'></textarea>
               <div className='flex h-20 justify-end'>
                 <button className=' shadow-xl h-10 w-30 rounded bg-orange-300 text-sm'>Send Message</button>
               </div>
            </div>
        </div>
        </div> 
  
             <div className='h-40 w-full flex flex-col items-center pt-5'>
      <h1 className='text-3xl font-bold'>Ready to grow with E-commerce </h1> 
      <button className='h-10 w-40 rounded bg-orange-300 my-5 shadow-xl '>Get Started</button> 
      </div>
           
      </div>
      </div>
  )
}

export default Contact