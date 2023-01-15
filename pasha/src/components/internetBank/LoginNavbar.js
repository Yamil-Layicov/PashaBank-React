import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './LoginNavbar.module.css'

const LoginNavbar = () => {

  return (
    <div className={style.navbar}>
        <NavLink to='/otp' >
          <div>OTP</div>
          <div className='loginBottomBorder'></div>
        </NavLink>
        <NavLink to='/asanImza'>
          <div className='asanImzaNew' >ASAN imza</div>
          <div className='loginBottomBorder'></div>
        </NavLink>
    </div>
  )
}

export default LoginNavbar