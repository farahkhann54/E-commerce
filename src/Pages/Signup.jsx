import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [er , setEr] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(username ==="" || email==="" || password === "" ){
      setEr("Input fields are required")
      return ;
    }
    try {
      const data = await fetch ("https://6940f998993d68afba6e33e1.mockapi.io/api/v1/SignUp",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body :JSON.stringify({email,password,username})

      })
    
      if (data){
        navigate('/dashboard')
      }
      
    } catch (erro) {
      console.log(erro)
    }}


  function handleSignIn(){
    navigate('/login')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white h-150 w-[30%] p-8 shadow-xl rounded-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Join Hotel Revenue</h2>
        <p className="text-sm text-gray-600 mb-6">Unlock insight to boost your hotel's revenue.</p>
        <div className='h-70 w-90 text-sm/10  font-medium text-gray-600'>
           <div className="mb-2">
      <p><span className='text-red-600'>*</span>Username</p>
            <input type="text" className="w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                 <div className='text-red-500 text-[12px]'>{er}</div>

          </div>
           <div className="mb-2">
      <p><span className='text-red-600'>*</span>Email</p>
            <input type="text" className="w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <div className='text-red-500 text-[12px]'>{er}</div>

          </div>
          <div className="mb-2">
      <p><span className='text-red-600'>*</span>Password</p>
            <input type="text" className="w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <div className='text-red-500 text-[12px]'>{er}</div>

          </div>
          <div className='h-40 w-90 flex flex-col justify-center'>
          <button className='h-10 w-90 border-none text-xl rounded bg-blue-600 text-white flex items-center justify-center font-bold shadow-xl '>
              Create Account
            </button>
            <div><p className="text-sm text-center text-gray-600 mt-6">
              Already a member?
              <span className="text-blue-600 hover:underline cursor-pointer" onClick={()=>handleSignIn()} >Sign in</span>
            </p></div>
          </div>
        </div>
      </div>
      </div>
      </form>
    </div>

  )
}
