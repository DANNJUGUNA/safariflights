import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-[90vh]'>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout