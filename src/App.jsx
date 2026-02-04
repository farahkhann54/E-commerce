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

function App() {
  return (
    <Provider store={Store}>
    <Router>
      <Routes>

        {/* Routes WITH Navbar + Footer */}
        <Route element={<Layout />}>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

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
