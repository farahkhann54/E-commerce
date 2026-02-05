import React from 'react'

const Service = () => {
  return (
    <div className=" from-orange-100 to-orange-200 min-h-screen pt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h1>
        <p className="text-base md:text-lg mt-2 text-gray-700">
          Empowering Your E-commerce Journey
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-12">
        
        {/* Product Management */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Product Management</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Seamless tools to manage your products and inventory with ease.
          </p>
          <img 
            src="https://i.pinimg.com/736x/83/9e/f7/839ef77f09b0ec46d9cc6408f057f621.jpg" 
            alt="Product Management" 
            className="w-full h-44 object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Analytics Dashboard */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Analytics Dashboard</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Gain valuable insights into your sales, customers, and traffic.
          </p>
          <img 
            src="https://i.pinimg.com/736x/34/b7/ae/34b7ae7048760c002df6399130a0c7fd.jpg" 
            alt="Analytics Dashboard" 
            className="w-full h-44 object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Customer Support */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Customer Support</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Powerful solutions to reach and engage your target audience.
          </p>
          <img 
            src="https://i.pinimg.com/1200x/e6/cd/f6/e6cdf68ad3b4789a6e0ff556d63b9bbe.jpg" 
            alt="Customer Support" 
            className="w-full h-44 object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Marketing Tools */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Marketing Tools</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Provide exceptional service with our integrated support tools.
          </p>
          <img 
            src="https://i.pinimg.com/736x/9f/b8/8f/9fb88fec21a85bdfcecfb9283a649176.jpg" 
            alt="Marketing Tools" 
            className="w-full h-44 object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default Service
