import React from 'react'
import Main from './components/Main'
import {Routes,Route} from 'react-router-dom'
import Elaqe from './components/Elaqe'
import OnlaynXidmetler from './components/OnlaynXidmetler'
import Base from '../src/routes/Route'
import Base2 from '../src/routes/Route2'
import Base3 from '../src/routes/Route3'
import InternetBank from './components/internetBank/InternetBank'
import Otp from './components/internetBank/Otp'
import AsanImza from './components/internetBank/AsanImza'
import Biznes from './components/kicik ve orta Biznes/Biznes'


const App = () => { 

  return (
    <div>
     <Routes>
        <Route path='/' element={<Base><Main/></Base>} />
        <Route path='/elaqe' element={<Base><Elaqe/></Base>}/>
        <Route path='/onlyanXidmetler' element={<Base><OnlaynXidmetler/></Base>}/>
        <Route path='/internetBank' element={<InternetBank/>}/>
        <Route path='/otp' element={<Base2><Otp/></Base2>} />
        <Route path='/asanImza' element={<Base3><AsanImza/></Base3>} />
        <Route path='/biznes' element={<Biznes/>}/>
     </Routes>
    </div>
  )
}

export default App
