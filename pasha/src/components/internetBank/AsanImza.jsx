import React from 'react'
import style from './AsanImza.module.css'

const AsanImza = () => {
  return (
    <div className={style.asanContainer}>
      <label htmlFor="">ASAN İmza mobil nömrəsi</label>
      <input type="text" placeholder='+994 (__) ___-__-__'/>
      <label htmlFor="">ASAN İmza İstifadəçi ID-si</label>
      <input type="text" placeholder='İstifadəçi ID-ni daxil edin' className={style.secondInput}/>
      <button className={style.daxilOl}>Daxil ol</button>
      <div>
        <div className="veya"></div>
        <div>və ya</div>
      </div>
      <button>Müştəri ol</button>
      <p>ASAN İmzanı necə əldə edim?</p>
    </div>
  )
}

export default AsanImza