import React from 'react'
import style from './Otp.module.css'
import { useState } from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineExclamationCircle} from 'react-icons/ai'

const Otp = () => {

    const[type,setType] = useState('password')
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState(false)

    const handleToggle = () =>{
        setType(type === 'password' ? 'text' : 'password')
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(username.length === 0 || password.length === 0){
            setError(false)
        }else{
            if(username !== "Yamil" && password !== 123){
                setError(true)
            }
        }
    }

  return (
    <>
        <div className={style.otpContainer}>
        <form className={style.login} onSubmit = {handleSubmit}> 
        {error ? <div className={style.errorMessage}>
                <span className={style.stopIcon}><AiOutlineExclamationCircle/></span>
                <div className={style.loginText}>
                    <span className={style.xeta}>Xəta baş verdi</span><br />
                    <span>İstifadəçi adı və ya şifrə yalnışdır.</span>
                </div>
            </div> : " "} 
            <label htmlFor="username" >İstifadəçi adı</label>
            <input type="text" placeholder='İstifadəçi adını daxil edin' onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="password">Şifrə</label>
            <div className={style.passwordInput}>
                <input type={type} placeholder='Şifrəni daxil edin' onChange={e => setPassword(e.target.value)}/>
                <span onClick={handleToggle}><AiOutlineEyeInvisible/></span>
            </div>
            <button>Daxil ol</button>
        </form>

        <div className={style.formDown}>
            <div className={style.sifre}>Şifrəni unutmusunuz?</div>
            <div className={style.veyaContent}>
                <div className={style.veya}>
                </div>
                <div className={style.veyaText}>veya</div>
            </div>
            <button>Müştəri ol</button>
        </div>
        </div>
    </>
  )
}

export default Otp