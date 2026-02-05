import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux'

import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Components/Dashboard";
import View from "./Components/View";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Store from "./Redux/Store";

// ✅ Import ProtectedRoute (new file you created)
import ProtectedRoute from "./Components/ProtectedRoute"

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>

          {/* Routes WITH Navbar + Footer */}
          <Route element={<Layout />}>
            
            {/* ✅ Protect Dashboard route so only logged-in users can access */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />

            {/* Other routes remain the same */}
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/view" element={<View />} />
          </Route>

          {/* Routes WITHOUT Navbar + Footer */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
