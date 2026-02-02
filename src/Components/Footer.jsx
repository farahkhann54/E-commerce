import React from 'react'

const Footer = () => {
  return (
    <div className='h-70 w-full bg-black text-white flex justify-around items-center '>
      <div className='h-70 w-100 '>
        <div className='flex h-20 w-70 items-center text-2xl font-bold'>
        <img src="src/assets/Copilot_20260201_130406.png" alt="" className='h-25 w-25' />E-commerce</div>
      <div className='flex gap-5'>
        <div>
        <h1 className='text-xl font-bold'>Customer Service</h1>
        <ul className='text-xl py-2'>
          <li>FAQs</li>
          <li>Returns</li>
          <li>Shipping</li>
          <li>Support</li>
        </ul>
      </div>
        <div>
        <h1 className='text-xl font-bold'>Company</h1>
        <ul className='text-xl py-2'>
          <li>About us</li>
          <li>Career</li>
          <li>Press</li>
          <li>Blogs</li>
        </ul>
      </div>
        <div>
        <h1 className='text-xl font-bold'>Legal</h1>
        <ul className='text-xl py-2'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie policy</li>
        </ul>
      </div>
      </div>
      </div>
      <div className='h-60 w-100 flex items-center justify-center'>
        <div>
          <div className='flex gap-5'> <a href="https://www.facebook.com/"> <img src="https://img.freepik.com/premium-vector/vector-facebook-social-media-icon-illustration_534308-21672.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='h-10 w-10' /></a>
            <a href="https://www.instagram.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s" alt="" className='h-10 w-10' /></a>
            <a href="https://www.linkedin.com/"><img src="https://static.vecteezy.com/system/resources/previews/018/910/721/non_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg" alt="" className='h-10 w-10' /></a></div>
                  <input placeholder='Enter your email' className='border w-40 rounded bg-orange-200 text-black  mt-5  pl-5 py-1'  /> <button className='bg-white text-black p-1 rounded text-sm'>Submit</button>

            <p className='pt-5'>Contact : +92 3070215509</p></div>
        </div>
      </div>

    

  )
}

export default Footer