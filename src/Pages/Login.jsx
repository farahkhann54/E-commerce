import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [em, setEm] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!em || !pass) {
      setError("All fields are required")
      setLoading(false)
      return
    }

    // Get users from localStorage
    const usersData = localStorage.getItem("users")
    const users = usersData ? JSON.parse(usersData) : []
    const user = users.find((u) => (u.email === em || u.username === em) && u.password === pass)

    if (user) {
      localStorage.setItem("authToken", "true")
      localStorage.setItem("currentUser", JSON.stringify({ username: user.username, email: user.email }))
      setLoading(false)
      navigate('/dashboard')
    } else {
      setError("Invalid email or password")
      setLoading(false)
    }
  }


  function handleSignup() {
    navigate('/signup')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Sign in</h2>
          <p className="text-sm text-gray-600 mt-1">
            Welcome back! Please enter your details below.
          </p>
        </div>

        {/* Error message */}
        {error && <div className="text-red-500 text-sm mb-3 text-center">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username or Email</label>
            <input 
              type="text" 
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              value={em} 
              onChange={(e) => setEm(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
            />
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-xs text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className={`w-full py-2.5 rounded-lg text-sm font-semibold shadow-md transition flex items-center justify-center ${
              loading 
                ? "bg-blue-400 cursor-not-allowed text-white" 
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            }`}
          >
            {loading ? "Loading..." : "Log in"}
          </button>
        </form>

        {/* Signup link */}
        <p className="text-sm text-center text-gray-600 mt-5">
          Don’t have an account?{" "}
          <span 
            className="text-blue-600 hover:underline cursor-pointer font-medium" 
            onClick={handleSignup}
          >
            Sign up now
          </span>
        </p>
      </div>
    </div>
  )
}
