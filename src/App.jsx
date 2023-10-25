import react from 'react'
import Header from './Components/header'
import Herosection from './Components/Herosection'
import Hero from './assets/Hero.gif'
import About from './Components/About'
import JohnSmith from './assets/JohnSmith.webp'
import Works from './Components/Works'
import Skills from './Components/Skills'
import Contactform from './Components/Contactform'
import Footerpage from './Components/footerpage'

function App() {


  return (
    <>
    <Header />
    <Herosection Hero={Hero}/>
    <About img={JohnSmith}/>
    <Works/>
    <Skills/>
    <Contactform/>
    <Footerpage/>
    </>
  )
}

export default App
