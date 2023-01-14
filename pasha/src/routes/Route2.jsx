import React from 'react'
import InternetBank from '../components/internetBank/InternetBank'

const Route2 = ({children}) => {
  return (
    <>
      <InternetBank/>
      {children}
    </>
  )
}

export default Route2