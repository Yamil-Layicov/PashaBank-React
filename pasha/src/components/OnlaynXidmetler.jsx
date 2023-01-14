import { Link } from 'react-router-dom';
import on from '../assets/onlayn.JPG'

const OnlaynXidmetler = () => {
  return (
    <div>
      <div className='backRed'>
         <p>Siz hazırda buradasınız / Əsas / Onlayn xidmətlər</p>
      </div>
      <div style={{width:"100%"}}>
         <img style={{width:"100%"}} src={on} alt="" />
      </div>
      <section  className="section-2 onlayn">
        <div className="boxes">
          <div className="box-container">
            <div className="rotate"></div>
            <div className="box">
              <img
                src="https://www.pashabank.az/uploads/category/thumbs/from_home_a_v_1_02.png"
                alt=""
              />
              <p className="first">Korparativ Bankciliq</p>
              <p>
                İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.
              </p>
              <button>Daha Etrafli</button>
            </div>
          </div>
          <div className="box-container">
            <div className="rotate"></div>
            <div className="box">
              <img
                src="https://www.pashabank.az/uploads/category/thumbs/from_home_a_v_1_05.png"
                alt=""
              />
              <p className="first">İnternet ödəmələr</p>
              <p>
                İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.
              </p>
              <button>Daha Etrafli</button>
            </div>
          </div>
          <div className="box-container">
            <div className="rotate"></div>
            <div className="box">
              <img
                src="https://www.pashabank.az/uploads/category/thumbs/from_home_a_v_1_05_.png"
                alt=""
              />
              <p className="first">İnternet bank</p>
              <p>
                İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.
              </p>
              <Link to='/internetBank' target='_blank'><button>Daha Etrafli</button></Link>
            </div>
          </div>
          <div className="box-container">
            <div className="rotate"></div>
            <div className="box">
              <img
                src="https://www.pashabank.az/uploads/category/thumbs/from_home_a_v_1_03_1507901811.png"
                alt=""
              />
              <p className="first">Korparativ Bankciliq</p>
              <p>
                İri həcmli şirkətlər üçün korporativ xidmətlər və maliyyələşmə.
              </p>
              <button>Daha Etrafli</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlaynXidmetler;
