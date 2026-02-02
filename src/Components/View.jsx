import React from 'react';

const View = () => {
 const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 129.99,
    rating: 4.5,
    thumbnail: "https://i.pinimg.com/736x/3e/b8/3f/3eb83f4d52ca1d1e2fb7a58c933f81e4.jpg",
    description: "High-quality wireless headphones with noise cancellation and up to 20 hours of battery life.",
    brand: "SoundMagic",
    model: "SM-1000",
    color: "Matte Black",
    connectivity: "Bluetooth 5.0",
    batteryLife: "20 hours",
    weight: "250 grams",
    warranty: "2 years ",
   
  }
];

  return (
    <div >
      {products.map(product => (
        <div className='h-screen w-full '>
          <div className='h-100 w-full flex  items-center justify-center'>
        <div key={product.id} className='h-90 w-200 p-5 bg-orange-300 rounded-xl m-5 shadow-xl flex justify-between items-center'>
          <div className='h-70 w-100'><img src={product.thumbnail} alt=""className='rounded-xl border h-70 w-100' /></div>
          <div  className='h-50 w-70 flex flex-col gap-3 '>
            <h1 className='text-4xl font-bold'>{product.title}</h1>
            <p className='text-2xl'>Price.${product.price}</p>
            <p className='text-2xl'>Rating. {product.rating} ⭐</p>
          </div>
          </div>
          <div className='h-70 w-100 flex flex-col justify-center text-base/8'>
            <h1 className='text-4xl font-bold '>Product Description</h1>
             <p className='text-xl '>{product.description}</p>
             <p className='text-xl'>{product.description}</p>
          </div>
        </div>
          <div className='h-70 w-full flex items-center justify-center '>
            <div className='h-60 w-300 p-5 '>
            <h1 className='text-4xl font-bold pb-4'>Details</h1>
            <div className='w-full h-40 grid grid-cols-3 text-xl'>
              <div >
              <ul>
              <li><span className='font-bold'>Brand: </span> {product.brand}</li>
              <li ><span className='font-bold'>Model: </span>{product.model}</li>
              <li><span className='font-bold'>Color: </span>{product.color}</li>
              <li><span className='font-bold'>Productivity: </span>{product.connectivity}</li>
              
              </ul>
              </div>
              <div>
                <ul>
                  <li><span className='font-bold'>Productivity: </span>{product.batteryLife}</li>
                  <li><span className='font-bold'>Weight: </span>{product.weight}</li>
                  <li><span className='font-bold'>Warranty: </span>{product.warranty}</li>
                </ul>
              </div>

               <div>
              <ul>
              <li><span className='font-bold'>Brand:  </span> {product.brand}</li>
              <li ><span className='font-bold'>Model:  </span>{product.model}</li>
              <li><span className='font-bold'>Color:  </span>{product.color}</li>
              <li><span className='font-bold'>Productivity:  </span>{product.connectivity}</li>
              
              </ul>
              </div>
             
            </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default View;
