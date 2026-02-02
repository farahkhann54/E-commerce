import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Dashboard = () => {
    const navigate = useNavigate()
    const images = [
  "https://i.pinimg.com/736x/bf/39/d4/bf39d41a46c0297570f83350c2066f70.jpg",
  "https://i.pinimg.com/1200x/35/a4/34/35a434c17a06630d152a1c7623a7b2a4.jpg",
  "https://i.pinimg.com/1200x/6f/15/b4/6f15b47410cbc7085ee11de8d4ab5d83.jpg",
  "https://i.pinimg.com/1200x/8f/26/7a/8f267af29b6e3e1a77ece3751731b897.jpg",
  "https://i.pinimg.com/1200x/ef/b2/74/efb2742da084ae5fc99fd46b9c6bf27b.jpg",
  "https://i.pinimg.com/1200x/ea/db/fe/eadbfe8417fec95d54fc3e5e0291a23a.jpg",
  "https://i.pinimg.com/1200x/41/35/ba/4135bae4369915d01b065f30d1977ee1.jpg",
  "https://i.pinimg.com/1200x/32/8d/0d/328d0d530073643ef8d89136fbae5d24.jpg",
  "https://i.pinimg.com/736x/07/4d/9d/074d9d28950f249451b8362405431f5f.jpg",
  "https://i.pinimg.com/1200x/ac/50/96/ac5096d0c6c57b17f7f8ec44b594aca3.jpg",
  "https://i.pinimg.com/1200x/49/44/b5/4944b5d53cd9a68d4a9fcd28dccd7cf2.jpg",
  "https://i.pinimg.com/1200x/83/ae/34/83ae3475e94b4b8ac6a16839dcdf1b26.jpg",
  "https://i.pinimg.com/1200x/6c/6e/6f/6c6e6f66cffd4a3753b0fe876aef1a5a.jpg",
  "https://i.pinimg.com/736x/8a/3d/71/8a3d7191fbef47e82216aa6ef8df3841.jpg",
  "https://i.pinimg.com/736x/38/a0/22/38a0224d599859114c2749dd338807d7.jpg",
  "https://i.pinimg.com/1200x/51/06/fe/5106fe422ff58dd741df1639fbfee7d9.jpg",
  "https://i.pinimg.com/1200x/9b/76/95/9b7695ac5e5ce409c05f934f7408ae9d.jpg",
  "https://i.pinimg.com/736x/8b/95/7c/8b957cab0dce19b2421cb8b6594bc1f3.jpg",
  "https://i.pinimg.com/1200x/ed/07/a0/ed07a0f47ba6761c5207c9ba1133270a.jpg",
  "https://i.pinimg.com/1200x/4f/ce/98/4fce981befaa9bf357df6d5b7fb4cd6e.jpg",
  
];



    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://697d917d97386252a2686b5e.mockapi.io/Product"
            );
            const result = await res.json();
           

            // Flatten all products arrays from each user into one products list
            const allProducts = result.flatMap(user => user.products);

            setData(allProducts);
        } catch (error) {
            console.log("Error:", error);
    }};


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
        
        <div className="h-auto w-full bg-orange-200 p-5 ">
         
           
                <ul className="space-y-3 grid grid-cols-3 w-300 m-auto gap-9">
                    {data.map((item,index) => (
                        <li
                            key={index}
                            className="bg-white p-4 rounded-xl text-base/8 shadow-xl w-80 h-100 flex  flex-col items-center justify-center"
                        >
                            <img
                                src={images[index % images.length]}
                                alt={item.title}
                                className="h-50 w-50 rounded"
                            />
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>{item.price}</p>
                           
                                <button  onClick={() => navigate('/view')} className="h-8 w-30 rounded shadow-xl bg-orange-200">
                                    View Details
                                </button>
                           
                        </li>
                    ))}
                </ul>
            
        </div>
        
        </div>
    );
};

export default Dashboard;
