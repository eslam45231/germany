



import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'


//   function logout(){
    
//     localStorage.removeItem("dataToken")
//     setuserData(null)
// navigate("/login")
//   }


export default function Layout({userData,setuserData}) {

  
 

  return (
    <>
   <Navbar />

<Outlet></Outlet>


    </>
  )
 }
