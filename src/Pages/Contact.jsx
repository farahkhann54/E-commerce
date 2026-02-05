import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, service, message } = formData;

    const text = `Hello, I am ${firstName} ${lastName}.
Email: ${email}
Service: ${service}
Message: ${message}`;

    const phoneNumber = "923070215509"; // 👉 your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-orange-200 min-h-screen mt-5 flex flex-col items-center py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">We’d love to hear from you</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        {/* Contact Info */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            <p className="text-gray-600">info@emmorce.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Address</h2>
            <p className="text-gray-600">123 Commerce St., Suite 100</p>
            <p className="text-gray-600">Los Angeles, CA 90001</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div className="flex gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            name="service"
            placeholder="Service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none h-28"
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Ready to grow with E-commerce?
        </h2>
        <button className="mt-6 px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Contact;
