import img3 from '../assets/img-3.JPG'
import ink from '../assets/in.JPG'
import twt from '../assets/tw.JPG'
import fbb from '../assets/fb.JPG'
import pr from '../assets/prin.JPG'

const Elaqe = () => {
  return (
    <div>
       <div className='backRed'>
      <p>Siz hazırda buradasınız / Əsas / Əlaqə</p>
      </div>
      <div style={{width:"100%"}}>
         <img style={{width:"100%"}} src={img3} alt="" />
      </div>
      <div className="elaqeMain">
        <div className="leftElaqe">
          <div className="upLeftElaqe">
            <div className="socials">
                <img style={{width:"41px"}} src={ink} alt="" />
                <img style={{width:"37px"}} src={twt} alt="" />
                <img style={{width:"40px"}} src={fbb} alt="" />
            </div>
            <div className="printer">
              <img style={{width:"41px"}} src={pr} alt="" />
            </div>
          </div>
          <div className="downLeftElaqe">
            <ul>
              <li style={{color:"gray",fontWeight:"bold"}}>Ünvan: </li>
              <li>Yusif Məmmədəliyev küç. 13</li>
              <li>Bakı, AZ1005, Azərbaycan</li>
              <li><span style={{color:"gray",fontWeight:"bold"}}>Korporativ müştərilər üçün:</span> *8123 / (+994 12) 496 50 04</li>
              <li><span style={{color:"gray",fontWeight:"bold"}}>Fərdi müştərilər üçün:</span> *9123 / (+99 412) 496 50 00</li>
              <li><span style={{color:"gray",fontWeight:"bold"}}>Baş ofis:</span> (+994 12) 496 51 00</li>
              <li>Web-site: www.pashabank.az</li>
              <li>E-mail: office@pashabank.az</li>
              <li style={{color:"gray",fontWeight:"bold",marginTop:"20px"}}>İş saatı:</li>
              <li>• Bazar ertəsi – cümə: saat 09:30 - 17:00</li>
              <li>• Şənbə, bazar: istirahət günləri</li>
              <li style={{color:"gray",fontWeight:"bold",marginTop:"20px"}}>Kassanın iş saatı:</li>
              <li>• Bazar ertəsi – cümə: saat 09:30 - 17:00</li>
              <li>• Şənbə, bazar: istirahət günləri</li>
            </ul>
          </div>
        </div>
        <div className="rightElaqe">
            <div className='mainRotate'>
              <div className='rotate'></div>
              <div className='rotate2'></div>
            <p>“PAŞA Bank” dünyanın ən böyük aviaşirkətlərindən biri “Türk Hava Yolları” ilə eksklüziv əməkdaşlığının müddətini uzatdı!</p>
           <p> Ölkənin aparıcı korporativ bankı “PAŞA Bank” dünyanın ən böyük aviaşirkətlərindən biri olan “Türk Hava Yolları” ilə eksklüziv əməkdaşlığını uzatmaq məqsədilə yeni müqaviləyə imza atıb <span style={{color:"green"}}>....Daha ətraflı</span></p>
            </div>
          </div>
      </div>
    </div>
  )
  
}

export default Elaqe