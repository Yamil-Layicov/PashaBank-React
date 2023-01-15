import React from 'react'
import style from './Section3.module.css'
import img from './Capture.JPG'
import {motion, spring} from 'framer-motion'

const textAnimate = {
  offScreen:{opacity:0,x:-100},
  onScreen:{opacity:1,x:0,
    transition:{
      duration:1
    }
  }
}

const Section3 = () => {
  return (
    <>
      <motion.div className={style.section3}
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0,
           transition:{
            duration:1,
            type:spring
           }
        }}
        viewport={{once:true,amount:0.3}}
      >
        <div className={style.section3Left}>
           <div className={style.mainText}>Sizinlə bərabər Sizin üçün innovativ <br /> həlləri yaradırıq</div>
           <motion.div className={style.downTextBoxes}
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{once:true,amount:0.5}}
  
              transition={{staggerChildren:0.3}}
           >
              <motion.div className={style.box}
                variants={textAnimate}
              >
                  <p className={style.firstText}>Məsafədən istifadə</p>
                  <p className={style.secondText}>Xüsusilə pandemiya dövründə aktual <br /> olan həll - məhsul və xidmətlərin <br /> banka gəlmədən sifarişi və istifadəsi</p>
              </motion.div>
              <motion.div className={style.box}
              variants={textAnimate}
              >
                  <p className={style.firstText}>Rahat platforma</p>
                  <p className={style.secondText}>Onlayn Bank ilə məhsul və <br /> xidmətlərin vahid platformadan 24/7 <br /> rejimində idarə edilməsi</p>
              </motion.div>
              <motion.div className={style.box}
              variants={textAnimate}
              >
                  <p className={style.firstText}>Təhlükəsizlik</p>
                  <p className={style.secondText}>Məlumatların və həyata keçirilən <br /> əməliyyatların təhlükəsizliyini təmin <br /> edən sistem</p>
              </motion.div>
           </motion.div>
        </div>
        <div className={style.section3Right}>
           <div className={style.img}>
             <img src={img} alt="" />
           </div>
        </div>
      </motion.div>
    </>
  )
}

export default Section3