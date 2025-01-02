import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import Appointment from './pages/Appointment';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/myappointments' element={<MyAppointments/>}/>
        <Route path='/appointments/:docID' element={<Appointment/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App