import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Loginpage } from './loginpage'
import Signuppage from './Signupage'
import { ForgotPassword } from './forgotPassword'
import { SetPassword } from './setpassword'
import UpdateProfile from './Updateprofile'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route path="/login" element={
    <Loginpage></Loginpage>
    }/>
     <Route path="/" element={
      <Loginpage></Loginpage>
    }/>

    <Route path="/signup" element={
      <Signuppage></Signuppage>
    }/>

<Route path="/forgotpassword" element={
      <ForgotPassword></ForgotPassword>
    }/>
    <Route path="/setpassword" element={
    <SetPassword></SetPassword>
    }/>

<Route path="/UpdateProfile" element={
    <UpdateProfile></UpdateProfile>
    }/>
   </Routes>
  )
}

export default App
