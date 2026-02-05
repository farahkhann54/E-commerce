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
      warranty: "2 years",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {products.map(product => (
        <div 
          key={product.id} 
          className="w-full max-w-5xl bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
        >
          {/* Top section: Image + Basic Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-64 h-64 object-cover rounded-lg shadow-md border"
            />
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
              <p className="text-lg text-blue-600 font-semibold">Price: ${product.price}</p>
              <p className="text-base text-gray-700">Rating: {product.rating} ⭐</p>
              {/* Action buttons */}
              <div className="flex gap-3 mt-3 justify-center md:justify-start">
                <button className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition">
                  Add to Cart
                </button>
                <button className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-6 py-4 border-t">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Details Grid */}
          <div className="px-6 py-6 border-t">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li><span className="font-bold">Brand:</span> {product.brand}</li>
                <li><span className="font-bold">Model:</span> {product.model}</li>
                <li><span className="font-bold">Color:</span> {product.color}</li>
                <li><span className="font-bold">Connectivity:</span> {product.connectivity}</li>
              </ul>
              <ul className="space-y-1">
                <li><span className="font-bold">Battery Life:</span> {product.batteryLife}</li>
                <li><span className="font-bold">Weight:</span> {product.weight}</li>
                <li><span className="font-bold">Warranty:</span> {product.warranty}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
