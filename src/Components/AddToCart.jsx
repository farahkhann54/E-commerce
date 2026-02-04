import React from 'react'
import { useSelector } from 'react-redux'


const AddToCart = () => {
    const selector  = useSelector((state)=>state.cart.value)
    
  return (
    <div>
        <div className='h-6 w-6 bg-red-500 text-xs font-bold rounded-full absolute top-6 right-4 flex items-center justify-center'>{selector}</div>

        
    </div>
  )
}

export default AddToCart