import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../Redux/FavSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favIds = useSelector((state) => state.favourite.ids);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const images = [
    "https://i.pinimg.com/736x/bf/39/d4/bf39d41a46c0297570f83350c2066f70.jpg",
    "https://i.pinimg.com/1200x/35/a4/34/35a434c17a06630d152a1c7623a7b2a4.jpg",
    "https://i.pinimg.com/1200x/6f/15/b4/6f15b47410cbc7085ee11de8d4ab5d83.jpg",
    "https://i.pinimg.com/1200x/8f/26/7a/8f267af29b6e3e1a77ece3751731b897.jpg",
    "https://i.pinimg.com/1200x/ef/b2/74/efb2742da084ae5fc99fd46b9c6bf27b.jpg",
  ];

  const fetchData = async () => {
    try {
      const res = await fetch("https://697d917d97386252a2686b5e.mockapi.io/Product");
      const result = await res.json();
      const allProducts = result.flatMap((user) => user.products);
      setData(allProducts);
      localStorage.setItem("products", JSON.stringify(allProducts));
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setData(JSON.parse(savedProducts));
    } else {
      fetchData();
    }
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 px-6 bg-orange-100 min-h-screen">
      {/* Search bar */}
      <div className="max-w-4xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 pl-12 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm bg-white"
        />
        <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
      </div>

      {/* Product grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-200 hover:border-indigo-300"
            >
              {/* Favourite button */}
              <button
                onClick={() => dispatch(toggleFavourite(item.id))}
                className="self-end text-xl mb-2 hover:scale-110 transition"
              >
                {favIds.includes(item.id) ? "❤️" : "🤍"}
              </button>

              {/* Product image */}
              <img
                src={images[index % images.length]}
                alt={item.title}
                className="h-44 w-44 object-cover rounded-xl mb-4 shadow-md"
              />

              {/* Product info */}
              <h3 className="font-semibold text-lg text-gray-800 mb-1 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">Price: ${item.price}</p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <button
                  onClick={() => navigate("/view")}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow transition"
                >
                  View
                </button>
                <button
                  onClick={() => dispatch(addItem())}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow transition"
                >
                  Add
                </button>
                <button
                  onClick={() => dispatch(removeItem())}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No products found</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
