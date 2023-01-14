import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './LoginNavbar.module.css'
import { useState } from 'react'

const LoginNavbar = () => {

    const[active,setActive] = useState(true)

  return (
    <div className={style.navbar}>
        <NavLink to='/otp' ><div>OTP</div></NavLink>
        <NavLink to='/asanImza'>ASAN imza</NavLink>
    </div>
  )
}

export default LoginNavbar