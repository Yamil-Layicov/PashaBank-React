import React from 'react'
import style from './Header.module.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {MdPlace} from 'react-icons/md'
import {BiPrinter} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi'
import { useState } from 'react'
import Ripples from 'react-ripples'

const Header = () => {
  const[menu,setMenu] = useState(false)
  const[header,setHeader] = useState(true)

  const showMenu = () =>{
    setMenu(menu => !menu)
  }

  const changeHeader = () =>{
    if(window.scrollY >= 25){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  window.addEventListener("scroll",changeHeader)

  return (
    <>
        <div>
          <div className={`${style.upHeader}`}>
                  <div className={style.leftUpHeader}>
                      <span>Korporativ Bankçılıq</span>
                      <span style={{color:"black"}}>Kiçik və Orta Biznes</span>
                      <span>Fərdi Bankçılıq</span>
                      <span>Bank Haqqında</span>
                      <span>Digər <span className={style.downIcon}><AiFillCaretDown/></span></span>
                  </div>
                  <div className={style.rightUpHeader}>
                          <div><span className={style.icons}><MdPlace/></span><span>Fliallar</span></div>
                          <div><span className={style.icons}><BiPrinter/></span><span>Bankomatlar</span></div>
                          <div><span className={style.icons}><BiPhoneCall/></span><span>Əlaqə</span></div>
                          <div>AZ <span className={style.downIcon}><AiFillCaretDown/></span></div>
                  </div>
          </div>
        </div>
        <div className={`${style.horizon}`}></div>

        <div className={`${style.headerContent}, ${header ? style.fixedHeader : style.headerContent}`}>
            <div className={style.downHeader}>
              <div className={style.leftDownHeader}>
                  <div className={style.img}>
                      <img src="https://sme.pashabank.az/themes/sme/assets/images/logo_az.svg" alt="" />
                  </div>
                  <div className={style.leftDownCategories}>
                      <span>Biznes üçün xidmətlər</span>
                      <span>Kreditlər</span>
                      <span>Faktorinq</span>
                      <span>Sənədli əməliyyatlar</span>
                      <span>Əlavə xidmətlər</span>
                  </div>
              </div>
              <div className={style.rightDownHeader}>
                  <Ripples color='white'>
                      <button onClick={showMenu} className={style.headerBtn}>Onlayn Bank<span className={style.downIcon}><AiFillCaretDown/></span>
                     </button>
                  </Ripples>
                  <div className={menu ? style.headerBtnInto : style.hideBtn}>
                          <div>Hüquqi şəxslər və fərdi sahibkarlar üçün</div>
                          <div>Fiziki şəxslər üçün</div>
                  </div>
              </div>
            </div>    
        </div>
    </>
  )
}

export default Header