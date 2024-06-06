import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CourseSetupForm from './courseSetup/courseSetup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/course" element={<CourseSetupForm/>}>
         
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
