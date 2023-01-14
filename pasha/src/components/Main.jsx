import SliderItem from "./SliderItem";

const Main = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: true,
    initialSlide: 0,

};

  return (
    <div>
      <div className='backRed'>
      <p>Siz hazırda buradasınız / Əsas</p>
      </div>
      <div>
           <SliderItem/>
      </div>

      <section style={{marginTop:"80px"}} className="section-1">
        <div className="rotate"></div>
        <div className="boxes">
          <div className="box">
            <div>
              <p>Biznesi Onlayna  kecirmeyin Vaxtidir</p>
              <p>E-ticareti inid aktivlesdirin</p>
              <button>Daha Etrafli</button>
            </div>
          </div>
          <div className="box second">
            <div>
              <p>Alternativ Xidemet Kanallari</p>
              <button>Daha Etrafli</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="boxes">
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/corporate_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/investment_icon_01.svg' alt="" />
                <p className="first">İnvestisiya Bankçılığı</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/sme_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/exchange_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/corporate_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/corporate_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/corporate_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
            <div className="box-container">
              <div className="rotate"></div>
              <div className="box">
                <img src='https://www.pashabank.az/uploads/category/thumbs/corporate_icon_01.svg' alt="" />
                <p className="first">Korparativ Bankciliq</p>
                <p>İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.</p>
                <button>Daha Etrafli</button>
              </div>
            </div>
        </div>
      </section>

      <section className="section-3">
        <div className="boxes">
          <div className="box-container">
                <div className="rotate"></div>
                <div className="box">
                  <p className="first">Private Banking</p>
                  <p>Yüksək gəlirli fərdi müştərilərə maliyyə və qeyri-maliyyə xidmətləri.</p>
                  <button>Daha Etrafli</button>
                </div>
          </div>
          <div className="box-container second">
                <div className="rotate"></div>
                <div className="box">
                  <p className="first">Komplayns</p>
                  <button>Daha Etrafli</button>
                </div>
          </div>
          <div className="box-container">
                <div className="rotate"></div>
                <div className="box">
                  <p className="first">Azərbaycan Respublikasının Mərkəzi Bankı</p>
                  <p>"Maliyyə savadlılığı" Portalı</p>
                  <button>Daha Etrafli</button>
                </div>
          </div>
          <div className="box-container second">
                <div className="rotate"></div>
                <div className="box">
                  <p className="first">Onlayn xidmətlər</p>
                  <button>Daha Etrafli</button>
                </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Main