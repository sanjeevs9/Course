import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CourseSetupForm from './courseSetup/courseSetup'
import Home from './components/Home';
import SignInSide from './pages/signin'
import SignUp from './pages/signup'
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  return (
    <>
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/course" element={<CourseSetupForm/>}>
      
        </Route>
        <Route path="/signin" element={<SignInSide />} /> 
        <Route path="/signup" element={<SignUp />} /> 

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
