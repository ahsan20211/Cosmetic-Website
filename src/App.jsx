import React from 'react'
import Authentication from './screens/Authentication'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Productdetail from './screens/Productdetail.jsx'
import Popup from './screens/Popup'




function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/productdetail/:id" element={<Productdetail />} /> {/* 👈 Renders at /app/ */}



      </Routes>


    </div>

  )
}

export default App