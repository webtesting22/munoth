import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Financial from './components/Financial'
import Compliance from './components/Compliance'
import ClientLogin from './components/ClientLogin'
import Contact from './components/Contact'
import Modal from './components/Modal'
import MobileMenu from './components/MobileMenu'
import NewsTickerComponent from './components/NewsTickerComponent'
import './App.css'

function App() {
  const [modalsState, setModalsState] = useState({
    derivatives: true,
    attention: true
  })

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const totop = document.getElementById('totop')
      if (totop) {
        if (window.scrollY > 10) {
          totop.style.bottom = '20px'
          totop.style.opacity = '1'
        } else {
          totop.style.bottom = '-45px'
          totop.style.opacity = '0'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeModal = (modalType) => {
    setModalsState(prev => ({
      ...prev,
      [modalType]: false
    }))
  }

  return (
    <>
      <MobileMenu />
      <div id="wrapper">
        <Header />
        <Banner />
        <NewsTickerComponent />
        <AboutUs />
        <Services />
        <Financial />
        <Compliance />
        {/* <ClientLogin /> */}
        <Contact />
        
        <div id="totop" onClick={scrollToTop} style={{ bottom: '-45px', opacity: '0', transition: 'all 0.5s', position: 'fixed', right: '20px', zIndex: 1000, cursor: 'pointer' }}>
          <img alt="" src="/images/top-arrow.png" />
        </div>
      </div>
      
      {modalsState.derivatives && (
        <Modal 
          type="derivatives"
          onClose={() => closeModal('derivatives')}
        />
      )}
      
      {modalsState.attention && (
        <Modal 
          type="attention"
          onClose={() => closeModal('attention')}
        />
      )}
    </>
  )
}

export default App
