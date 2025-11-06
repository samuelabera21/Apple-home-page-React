import { useState } from 'react'

import Header from './components/First/header.jsx'
import Footer from './components/First/Footer.jsx'
import Sectionone  from './components/First/Sectionone.jsx'
import Sectiontwo from './components/First/Sectiontwo.jsx'
import Sectionthree from './components/First/Sectionthree.jsx'
import Sectionfour from './components/First/Sectionfour.jsx'
import Sectionfive from './components/First/Sectionfive.jsx'
import Sectionsix from './components/First/Sectionsix.jsx'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<Header/>
<Sectionone/>
<Sectiontwo/>
<Sectionthree/>
<Sectionfour/>
<Sectionfive/>
<Sectionsix/>
<Footer/> 
    </>
  )
}

export default App
