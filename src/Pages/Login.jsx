import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [em, setEm] = useState("")
  const [pass,setPass] = useState("")
  const [error,setError] = useState("")
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(em ==="" || pass ===""){
        setError("Input fields are required")
        return ;
    }

    try {
      const data = await fetch('https://6940f998993d68afba6e33e1.mockapi.io/api/v1/login',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({em,pass})
        })
       if (data.ok){
        console.log("Data Fetched succesfully!");
        
       }
    
    } catch (err) {
     console.log(err, "Data not found");
     
      
    }
      setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard')
    }, 2000);
    
  }

 

  function hanldeSignup(){
    navigate('/signup')
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white h-150 w-[30%] p-8 rounded-lg shadow-xl ">
        <div className='flex items-center flex-col'>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign in</h2>
          <p className="text-sm text-gray-600 mb-6">Welcome back! Please enter your details below to sign in.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 pb-2">Username or Email</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 " value={em} onChange={(e)=>setEm(e.target.value)} />
                  <div className='text-red-500 text-[12px]'>{error}</div>

          </div>
          


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 pb-2">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                  <div className='text-red-500 text-[12px]'>{error}</div>

          </div>
          

          <div className="flex justify-end mb-6">
            <div className="text-sm text-blue-600 hover:underline">Forget Password</div>
          </div>

          <button type="submit" className={`w-full py-2 rounded-md text-xl font-bold shadow-xl transition flex items-center justify-center gap-2 ${loading? "bg-blue-400 cursor-not-allowed" :"bg-blue-600 hover:bg-blue-700 text-white"}`}  > {loading ? "Loading...":"Log in"}</button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account? 
          <div className="text-blue-600 hover:underline cursor-pointer" onClick={()=>hanldeSignup()} >Sign up now</div>
        </p>
      </div>
    </div>

  )
}
