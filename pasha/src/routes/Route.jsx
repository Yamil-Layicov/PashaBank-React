import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Route = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Route