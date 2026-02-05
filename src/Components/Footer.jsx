import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo + Title */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="src/assets/Copilot_20260201_130406.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold">E-commerce</span>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <div>
              <h1 className="text-lg font-semibold mb-2">Customer Service</h1>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>FAQs</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">Company</h1>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>About us</li>
                <li>Career</li>
                <li>Press</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">Legal</h1>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          {/* Social Icons */}
          <div className="flex gap-3 mb-4">
            <a href="https://www.facebook.com/">
              <img
                src="https://img.freepik.com/premium-vector/vector-facebook-social-media-icon-illustration_534308-21672.jpg"
                alt="Facebook"
                className="h-9 w-9 rounded-full shadow hover:scale-105 hover:shadow-lg transition"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s"
                alt="Instagram"
                className="h-9 w-9 rounded-full shadow hover:scale-105 hover:shadow-lg transition"
              />
            </a>
            <a href="https://www.linkedin.com/">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/910/721/non_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"
                alt="LinkedIn"
                className="h-9 w-9 rounded-full shadow hover:scale-105 hover:shadow-lg transition"
              />
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex gap-2 w-full max-w-xs">
            <input
              placeholder="Enter your email"
              className="flex-1 border border-gray-400 rounded-full bg-white text-black px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              Submit
            </button>
          </div>

          {/* Contact */}
          <p className="text-xs text-gray-400 mt-3">
            Contact: +92 3070215509
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
