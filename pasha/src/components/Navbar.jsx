import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {IoMdArrowDropup} from 'react-icons/io'
import {FaMobileAlt} from 'react-icons/fa'
import { NavLink,Link } from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {

  const[page,setPage] = useState('')

  return (
    <>
      <nav className='nav'>
        <div className="navUp">
            <div className="leftNavUp">
                <NavLink to='/'><div className='img'>
                   <img src="https://www.pashabank.az/templates/images/pashabank-logo-az.svg" alt="" />
                </div></NavLink>
                <div className="languages">
                    <span className='az'>AZ</span>
                    <div className='border'></div>
                    <span className='en'>EN</span>
                    <div className='border'></div>
                    <span>RU</span>
                </div>
            </div>
            <div className="rigthNavUp">
                <div className="input">
                   <input type="text" placeholder='Axtaris'/>
                   <span className='searchIcon'> <FaSearch></FaSearch></span>
                </div>
                <div className='backGreen'><span className='span'>Musteri Olun</span></div>
                <div className='backGreen'><span className='span'>Onlayn Novbe</span></div>
                <div className='backGreen arrowBack'><span className='span'>
                  Onlayn Bank
                 <div className='onlaynBank'>
                    <ul>
                        <li><span>Huquqi sexsler ve sahibkarlar</span></li>
                        <li><span>Fiziki Sexsler</span></li>
                      </ul>
                 </div>
                </span>
                 <span className='arrowIcon downDrop'><IoMdArrowDropdown></IoMdArrowDropdown></span>
                 <span className='arrowIcon upDrop'><IoMdArrowDropup></IoMdArrowDropup></span>
                </div>  
                <div className='phoneIcon'><span><FaMobileAlt></FaMobileAlt></span></div>
            </div>
        </div>
        <div className="navDown">
            <div><span className='span haqqimizda'>
              Haqqimizda
              <div className='dropDown'>
                <ul className='navbar-nav'>
                  <li>Haqqimizda <div className='rightIcon'><BsChevronRight></BsChevronRight></div>
                     <ul className='dropInto'>
                      <li className='introLi'>Bank Haqqinda</li>
                      <li className='introLi'>Pasha bankin dvidend <br /> siyaseti</li>
                      <li className='introLi'>Korparativ video carx</li>
                      <li className='introLi'>Bank rekvizitleri</li>
                     </ul>
                  </li>
                  <li>Missiya ve Meqsedler</li>
                  <li className='idareetme'>
                    Idareetme  <BsChevronRight></BsChevronRight>
                  </li>
                  <li>Struktur</li>
                  <li>Karyera</li>
                  <NavLink to='/elaqe'><li className='elaqe2'>Elaqe</li></NavLink>
                  <li>Sosial Mesulliyet</li>
                  <li>Siayaset ve hesabatliliq</li>
                  <li>Risklerin Idare <br />olunmasi <div className='rightIcon'><BsChevronRight></BsChevronRight></div></li>
                </ul>
              </div>
            </span></div>
            <div><span>Korparativ Bankciliq</span></div>
            <Link to='/biznes'><div><span>Kicik ve Orta Biznes</span></div></Link>
            <div><span>Investisiya Baknciligi</span></div>
            <div><span>Maliyye Instutulari</span></div>
            <div><span>Ferdi Bankciliq</span></div>
            <div><span className='span'>Xeberler</span></div>
            <Link to='/onlyanXidmetler'><div><span>Onlayn Xidemetler</span></div></Link>
            <NavLink to='/elaqe'><div><span className='span elaqe'>Elaqe</span></div></NavLink>
        </div>
          
      </nav>

    </>
  )
}

export default Navbar