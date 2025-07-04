import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  return (
    <>
    <Navbar/>
       <ToastContainer position="top-right" autoClose={3000} />
    <Outlet/>
    
    </>
  )
}

export default MainLayout
