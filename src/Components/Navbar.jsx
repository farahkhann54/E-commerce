import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Input from './Input'

const Navbar = () => {
  return (
    <div className='w-full bg-black text-white  h-25 flex items-center justify-between px-5 '>
      <div className=' h-20 w-120 font-bold text-5xl flex justify-center items-center'><img src="src/assets/Copilot_20260201_130406.png" alt="" className='h-30 w-40 pr-5' />E-commerce</div>
      <div className='flex'>
      <ul className='flex gap-5 text-xl'>
      <li><Link to='/dashboard' className=' hover:underline decoration-orange-200 underline-offset-9'>Dashboard</Link></li>
      <li><Link to='/service' className=' hover:underline decoration-orange-200 underline-offset-9'>Services</Link></li>
      <li><Link to='/contact' className=' hover:underline decoration-orange-200 underline-offset-9'>Contact us</Link></li>
      <li><Link to='/blog' className=' hover:underline decoration-orange-200 underline-offset-9'>Blogs</Link></li>
      </ul>
      </div>
      <div>
<Input/>    
</div>
    </div>
  )
}

export default Navbar