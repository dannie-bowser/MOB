import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Addblog from './components/Addblog'
import Notfoundpage from './components/Notfoundpage'
import Bloglisting from './components/Bloglisting'


function App() {
  
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Addblogs" element={<Addblog />} />
            <Route path="/blogs/:id" element={<Bloglisting />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
