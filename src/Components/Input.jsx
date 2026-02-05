import React from 'react';
import { FiSearch } from "react-icons/fi";

const Input = ({ value, onChange, placeholder = "Search here..." }) => {
  return (
    <div className="relative w-full max-w-sm">
      {/* Search Icon */}
      <FiSearch className="absolute left-3 top-2.5 text-gray-500" />

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border rounded-lg bg-orange-100 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
      />
    </div>
  );
};

export default Input;
