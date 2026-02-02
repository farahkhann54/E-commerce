import React from 'react'

const Blog = () => {
  return (
      <div className=' bg-orange-200'>
      <div className='h-40 w-full flex flex-col items-center pt-5'>
      <h1 className='text-6xl font-bold'>Our Blog</h1> 
      <p className='text-3xl '>Insights and updates from our team</p>       
      </div>

      <div className='h-170 w-250 m-auto grid grid-cols-2 gap-10 p-5 justify-items-center '>
        <div className='h-70 p-5 w-100 bg-orange-100 rounded shadow-xl '>
          <h1 className='text-4xl font-bold'>Optimizing Your Product Listings</h1>
          <p className='text-xl py-5'>Learn best practices for creating compelling and effective product listings that drive sales.</p>
          <p className='text-orange-500 underline underline-offset-5'>Read More</p>
        </div>
        <div className='h-70 p-5 w-100 bg-orange-100  rounded shadow-xl'>
         <h1 className='text-4xl font-bold'>Effective Marketing Strategies</h1>
          <p className='text-xl py-5 '>Discover successful marketing tactics to boost your brand’s visibility and engagement.</p>
                    <p className='text-orange-500 underline underline-offset-5'>Read More</p>

         
        </div>
        <div className='h-70 p-5 w-100 bg-orange-100  rounded shadow-xl'> 
           <h1 className='text-4xl font-bold'>Ecommerce Trends 2024</h1>
          <p className='text-xl py-5 '>Stay ahead of the curve with the latest trends and innovations in the ecommerce space.</p>
                              <p className='text-orange-500 underline underline-offset-5'>Read More</p>

        </div>
        <div className='h-70 p-5 w-100 bg-orange-100 rounded shadow-xl'>
           <h1 className='text-4xl font-bold'>Customer Success Stories</h1>
          <p className='text-xl py-5 '>Be inspired by stories of how businesses like yours have thrived with Emmorce.</p>
                            <p className='text-orange-500 underline underline-offset-5'>Read More</p>

        </div>
      </div>
        
    </div>
  )
}

export default Blog