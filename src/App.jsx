import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Loginpage } from './Loginpage'
import Signuppage from './Signupage'
import { ForgotPassword } from './forgotPassword'
import { SetPassword } from './setpassword'
import UpdateProfile from './Updateprofile'
import Postpage from './Postpage'
import AddPostpage from './AddPostPage'
import Profilepage from './profilepage'


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
    <Route path="/Postpage" element={
  <Postpage></Postpage>
    }/>
     <Route path="/Addpostpage" element={
  <AddPostpage></AddPostpage>
    }/>

      <Route path="/Profilepage" element={
  <Profilepage></Profilepage>
    }/>
   </Routes>
  )
}

export default App
