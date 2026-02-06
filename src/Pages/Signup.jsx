import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [er, setEr] = useState("")
  const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setEr("")

    if (!username || !email || !password) {
      setEr("All fields are required")
      return
    }

    const usersData = localStorage.getItem("users")
    const users = usersData ? JSON.parse(usersData) : []
    const userExists = users.some((u) => u.email === email || u.username === username)

    if (userExists) {
      setEr("Email or username already registered")
      return
    }

    const newUser = { username, email, password }
    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))

    localStorage.setItem("authToken", "true")
    localStorage.setItem("currentUser", JSON.stringify({ username, email }))
    navigate('/dashboard')
  }

  function handleSignIn() {
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white w-full max-w-md p-6 sm:p-8 shadow-lg rounded-2xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">Join Hotel Revenue</h2>
        <p className="text-sm text-gray-600 mb-5">Unlock insight to boost your hotel's revenue.</p>

        {er && <div className="text-red-500 text-sm mb-3 text-center">{er}</div>}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-red-600">*</span> Username
            </label>
            <input 
              type="text" 
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-red-600">*</span> Email
            </label>
            <input 
              type="email" 
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-red-600">*</span> Password
            </label>
            <input 
              type="password" 
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-5 w-full py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition"
        >
          Create Account
        </button>

        <p className="text-sm text-center text-gray-600 mt-5">
          Already a member?{" "}
          <span 
            className="text-blue-600 hover:underline cursor-pointer font-medium" 
            onClick={handleSignIn}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  )
}
