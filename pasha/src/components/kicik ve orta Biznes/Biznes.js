import React from 'react'
import Header from './Header/Header'
import Section1 from './Section-1/Section1'
import Section2 from './Section-2/Section2'
import Section3 from './Section-3/Section3'
import Slider from './Slider/Slider'
import { useState, useEffect } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const Biznes = () => {

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  },2000)
},[])

  const[loading,setLoading] = useState(false)

  return (

    
    <>
       {
        loading ? <div className='loadingPage'>
          <img src='https://www.pashabank.az/templates/images/pashabank-logo-az.svg'/>
          <ScaleLoader
            loading={loading}
            size={50}
            color={"#389686"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <>
          <Header/>
          <Slider/>
          <Section1/>
          <Section2/>
          <Section3/>
        </>
       }
    </>
  )
}

export default Biznes