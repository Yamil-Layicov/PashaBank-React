import React from 'react'
import style from './Section.module.css'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {BsCheck2} from 'react-icons/bs'
import {GoCircleSlash} from 'react-icons/go'
import {TfiLayoutMediaOverlayAlt} from 'react-icons/tfi'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {motion,Variants} from 'framer-motion'

const textAnimate ={
  offScreen:{opacity:0,x:-100,scale:0},
  onScreen:{opacity:1,x:0,scale:1,
            transition:{
              duration:1.5
            }
  }
}

const boxAnimate ={
  offScreen:{opacity:0,y:100,scale:0},
  onScreen:{opacity:1,y:0,scale:1,
            transition:{
              duration:1.5,
              type:"spring",
              bounce:0.3
            }
  }
}

const Section1 = () => {
  return (
    <div className={style.section1}>
        <div className={style.mainSection}>
           <motion.div
              initial={"offScreen"}
              whileInView ={"onScreen"}
              viewport={{once:true,amaount:1}}

              variants={textAnimate}
            className={style.section1Text}>Kiçik və Orta Sahibkarlıq üçün biznes <br />
               əməliyyatlarının optimal həlli
           </motion.div>

           <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{once:true,amount:0.5}}

            transition={{staggerChildren:0.3}}
            className={style.section1Boxes}>
               <div className={style.section1Box}>
                  <motion.div 
                   variants={boxAnimate}
                  className={style.section1BoxInto}>
                    <ul>
                        <li className={style.section1Icon}><HiOutlineClipboardList/></li>
                        <li><span>5 dəqiqəyə onlayn hesab açın</span></li>
                        <li className={style.liBox}><span className={style.liIcon}><BsCheck2/></span>Dünyanın istənilən nöqtəsindən 24/7rejimində</li>
                        <li className={style.liBox}><span className={style.liIcon}><BsCheck2/></span><span>Video-zəng ilə verifikasiya</span></li>
                        <li className={`${style.liBox} , ${style.dahaEtrafli}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></li>
                    </ul>
                  </motion.div>
               </div>
               <div className={style.section1Box}>
                  <motion.div
                  variants={boxAnimate}
                   className={style.section1BoxInto}>
                    <ul>
                        <li className={style.section1Icon}><GoCircleSlash/></li>
                        <li><span>Onlayn kreditlərlə biznesinizi <br /> genişləndirin</span></li>
                        <li className={style.liBox}><span className={style.liIcon}><BsCheck2/></span><span>Girovsuz</span></li>
                        <li className={style.liBox}><span className={style.liIcon}><BsCheck2/></span><span>1 iş  gününə</span></li>
                        <div className={`${style.liBox} , ${style.dahaEtrafli} , ${style.secondLi}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></div>
                    </ul>
                  </motion.div>
               </div>
               <div className={style.section1Box}>
                  <motion.div 
                  variants={boxAnimate}
                  className={style.section1BoxInto}>
                    <ul>
                        <li className={style.section1Icon}><TfiLayoutMediaOverlayAlt/></li>
                        <li><span>Əməkhaqqı layihəsinə qoşulun</span></li>
                        <li className={style.liBox}><span className={style.liIcon}><BsCheck2/></span><span>Əmək haqlarının rahat və təhlükəsiz <br /> ödənişi</span></li>
                        <li className={style.liBox}><span className={style.liIcon}><BsCheck2/></span><span>Onlayn platforma üzərindən idarəetmə</span></li>
                        <li className={`${style.liBox} , ${style.dahaEtrafli}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></li>
                    </ul>
                  </motion.div>
               </div>
           </motion.div>
        </div>
    </div>
  )
}

export default Section1