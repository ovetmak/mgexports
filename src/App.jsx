import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Scrollup from './components/Scrollup'

function App() {
  return (
    <>
      <Scrollup />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
