import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Course from './Components/Course'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Course />
      <Pricing />
      <Contact />
    </div>
  )
}

export default App
