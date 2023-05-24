// import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import { About } from './components/About/About'
import { Landing } from './components/LandingPage/Landing'
import { Detail } from './components/Detail/Detail'
import { FormPage } from './components/FormPage/FormPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  )
}

export default App
