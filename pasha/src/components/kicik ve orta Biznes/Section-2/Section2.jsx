import React from 'react'
import style from './Section2.module.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import im1 from './images/img1.JPG'
import im2 from './images/img2.JPG'
import im3 from './images/img3.JPG'
import im4 from './images/img4.JPG'
import im5 from './images/img5.JPG'
import {motion,variants} from 'framer-motion'

const boxAnimate ={
   offScreen:{opacity:0,scale:1.3},
   onScreen:{opacity:1,scale:1,
             transition:{
               duration:1.5,
               type:"spring",
               bounce:0.3
             }
   }
 }

 const textAnimate ={
   offScreen:{opacity:0,y:100},
   onScreen:{opacity:1,y:0,
           transition:{
            duration:0.5
           }
   }
 }

const Section2 = () => {
  return (
    <div className={style.section2Main}>
       <div className={style.section2}>
           <motion.div className={style.section2Text}
             initial = {"offScreen"}
             whileInView = {"onScreen"}
             viewport={{once:true,amount:0.5}}

             variants={textAnimate}
           >
                Biznesinizi inkişaf etdirməyə kömək <br />
                edəcək məhsullar
           </motion.div>
           <motion.div className={style.section2BoxesUp}
             initial={"offScreen"}
             whileInView={"onScreen"}
             viewport={{once:true,amount:0.5}}
 
             transition={{staggerChildren:0.3}}
           >
              <div className={style.section2BoxUp}>
                 <div className={style.section2BoxUpInto}>
                     <motion.div className={style.section2BoxUpIntoLeft}
                       variants={boxAnimate}
                     >
                         <div className={style.posText}>POS-terminal və <br /> E-kassa</div>
                         <div className={style.satisText}>Satış və xidmət müəssisələrinin <br /> sahibləri üçün pulsuz POS-terminalların onlayn sifarişi </div>
                         <div className={`${style.dahaEtrafli}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></div>
                     </motion.div>
                     <div className={style.section2BoxUpIntoRight}>
                        <div><img src={im1} alt="" /></div>
                     </div>
                 </div>
              </div>
              <div className={`${style.section2BoxUp} , ${style.section2BoxUpSecond}`}>
                 <div className={style.section2BoxUpInto}>
                     <motion.div className={style.section2BoxUpIntoLeft}
                       variants={boxAnimate}
                     >
                         <div className={style.posText}>POS-terminal və <br /> E-kassa</div>
                         <div className={style.satisText}>Satış və xidmət müəssisələrinin <br /> sahibləri üçün pulsuz POS-terminalların onlayn sifarişi </div>
                         <div className={`${style.dahaEtrafli}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></div>
                     </motion.div>
                     <div className={style.section2BoxUpIntoRight}>
                        <div><img src={im2} alt="" /></div>
                     </div>
                 </div>
              </div>
           </motion.div>
           <motion.div className={`${style.section2BoxesUp} , ${style.section2BoxesUpClone}`}
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{once:true,amount:0.5}}

            transition={{staggerChildren:0.3}}
           >
              <div className={`${style.section2BoxUp} , ${style.section2FirstBox}`}>
                 <div className={style.section2BoxUpInto}>
                     <motion.div className={style.section2BoxUpIntoLeft}
                     variants={boxAnimate}
                     >
                         <div className={style.posText}>POS-terminal və <br /> E-kassa</div>
                         <div className={style.satisText}>Satış və xidmət müəssisələrinin <br /> sahibləri üçün pulsuz POS-terminalların onlayn sifarişi </div>
                         <div className={`${style.dahaEtrafli} , ${style.dahaEtrafli2}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></div>
                     </motion.div>
                     <div className={style.section2BoxUpIntoRight}>
                        <div><img src={im3} alt="" /></div>
                     </div>
                 </div>
              </div>
              <div className={`${style.section2BoxUp} , ${style.section2BoxUpSecond} , ${style.section2SecondBox}`}>
                 <div className={style.section2BoxUpInto}>
                     <motion.div className={style.section2BoxUpIntoLeft}
                     variants={boxAnimate}
                     >
                         <div className={style.posText}>POS-terminal və <br /> E-kassa</div>
                         <div className={style.satisText}>Satış və xidmət müəssisələrinin <br /> sahibləri üçün pulsuz POS-terminalların onlayn sifarişi </div>
                         <div className={`${style.dahaEtrafli} , ${style.dahaEtrafli2}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></div>
                     </motion.div>
                     <div className={style.section2BoxUpIntoRight}>
                        <div><img src={im4} alt="" /></div>
                     </div>
                 </div>
              </div>
              <div className={`${style.section2BoxUp} , ${style.section2BoxUpSecond} , ${style.section2ThirdBox}`}>
                 <div className={style.section2BoxUpInto}>
                     <motion.div className={style.section2BoxUpIntoLeft}
                     variants={boxAnimate}
                     >
                         <div className={style.posText}>POS-terminal və <br /> E-kassa</div>
                         <div className={style.satisText}>Satış və xidmət müəssisələrinin <br /> sahibləri üçün pulsuz POS-terminalların onlayn sifarişi </div>
                         <div className={`${style.dahaEtrafli} , ${style.dahaEtrafli2}`}>Daha ətraflı <HiOutlineArrowNarrowRight/><span></span></div>
                     </motion.div>
                     <div className={style.section2BoxUpIntoRight}>
                        <div><img src={im5} alt="" /></div>
                     </div>
                 </div>
              </div>
           </motion.div>
       </div>
    </div>
  )
}

export default Section2