import { useState, useEffect } from 'react'

const Header = () => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0
      const mobileHeaderHeight = document.querySelector('.slicknav_menu')?.offsetHeight || 0
      
      const scrollOffset = window.innerWidth < 767 ? mobileHeaderHeight : headerHeight
      
      window.scrollTo({
        top: target.offsetTop - scrollOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header id="header" className={isFixed ? 'fixed' : ''}>
      <div className="width">
        <div className="small-logo">
          <a href="#banner" onClick={(e) => handleNavClick(e, 'banner')}>
            <img src="/images/logo-small.png" alt="" />
          </a>
        </div>
        <nav>
          <ul id="main-menu" className="cf">
            <li>
              <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#service" onClick={(e) => handleNavClick(e, 'service')}>
                Services
              </a>
            </li>
            <li>
              <a href="#financial" onClick={(e) => handleNavClick(e, 'financial')}>
                Financial
              </a>
            </li>
            {/* <li>
              <a href="#client-login" onClick={(e) => handleNavClick(e, 'client-login')}>
                Client Login
              </a>
            </li> */}
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
