import React from "react"
import { Navigate } from "react-router-dom"

// ✅ This component protects routes
export default function ProtectedRoute({ children }) {
  const auth = localStorage.getItem("authToken") // check token
  return auth ? children : <Navigate to="/" replace /> // if not logged in → go back to Login
}
