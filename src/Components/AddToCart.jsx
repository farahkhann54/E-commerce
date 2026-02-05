import React from 'react'
import { useSelector } from 'react-redux'


const AddToCart = () => {
    const selector  = useSelector((state)=>state.cart.value)
    
  return (
    <div>
  <span className="absolute -top-2 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {selector}
          </span>        
    </div>
  )
}

export default AddToCart