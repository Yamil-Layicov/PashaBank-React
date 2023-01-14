import React from 'react'
import style from './InternetBank.module.css'
import {BsCheck2} from 'react-icons/bs' 
import Otp from './Otp'
import LoginNavbar from './LoginNavbar'

const InternetBank = () => {

  return (
    <>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.img}>
               <img src="https://pashabank.digital/login/images/user-manuals-banner/display.svg" alt="" />
            </div>
            <div className={style.contentText}>
              <div className={style.upText}>
                 <span>Onlayn bankda yeni</span><br />
                 <span className={style.last}>istifadəçi təlimatları!</span>
              </div>
              <div className={style.downText}>
                <div><span className={style.icon}><BsCheck2></BsCheck2></span><span>Hüquqi və fiziki şəxslərin onlayn biznes kreditinə müraciəti</span></div>
                <div><span className={style.icon}><BsCheck2></BsCheck2></span><span>Hüquqi və fiziki şəxslərin onlayn biznes kredit xəttinə müraciəti</span></div>
                <div><span className={style.icon}><BsCheck2></BsCheck2></span><span>Ticarət kredit xəttinə müraciət</span></div>
              </div>
            </div>
          </div>
          <div className={style.loginContent}>
              <nav>
                <div>
                  <img src="https://www.pashabank.az/templates/images/pashabank-logo-az.svg" alt="" />
                </div>
                <div className={style.languages}>
                  <span>AZ</span>
                  <span>EN</span>
                  <span>RU</span>
                </div>
              </nav>
              <div className={style.otp}>
                <LoginNavbar/>
              </div>
              <div>
                  <Otp/>
              </div>
          </div>
        </div>
    </>
  )
}

export default InternetBank