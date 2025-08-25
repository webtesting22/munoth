import { useState, useEffect } from 'react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Initialize mobile menu functionality
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const mobileHeaderHeight = document.querySelector('.slicknav_menu')?.offsetHeight || 0
      window.scrollTo({
        top: target.offsetTop - mobileHeaderHeight,
        behavior: 'smooth'
      })
      setIsOpen(false) // Close menu after navigation
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div id="mobileMenu">
      {/* Mobile Menu Button */}
      <div className="slicknav_menu">
        <a 
          href="#" 
          aria-haspopup="true" 
          role="button" 
          tabIndex="0" 
          className="slicknav_btn slicknav_collapsed"
          onClick={toggleMenu}
        >
          <span className="slicknav_menutxt">MENU</span>
          <span className="slicknav_icon">
            <span className="slicknav_icon-bar"></span>
            <span className="slicknav_icon-bar"></span>
            <span className="slicknav_icon-bar"></span>
          </span>
        </a>
        
        {/* Mobile Navigation */}
        <nav 
          className={`slicknav_nav ${isOpen ? 'slicknav_open' : 'slicknav_hidden'}`}
          style={{ display: isOpen ? 'block' : 'none' }}
          aria-hidden={!isOpen}
          role="menu"
        >
          <ul>
            <li>
              <a 
                href="#about-us" 
                role="menuitem" 
                tabIndex={isOpen ? "0" : "-1"}
                onClick={(e) => handleNavClick(e, 'about-us')}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#service" 
                role="menuitem" 
                tabIndex={isOpen ? "0" : "-1"}
                onClick={(e) => handleNavClick(e, 'service')}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#financial" 
                role="menuitem" 
                tabIndex={isOpen ? "0" : "-1"}
                onClick={(e) => handleNavClick(e, 'financial')}
              >
                Financial
              </a>
            </li>
            <li>
              <a 
                href="#client-login" 
                role="menuitem" 
                tabIndex={isOpen ? "0" : "-1"}
                onClick={(e) => handleNavClick(e, 'client-login')}
              >
                Client Login
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                role="menuitem" 
                tabIndex={isOpen ? "0" : "-1"}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .slicknav_menu {
          display: none;
        }
        
        @media screen and (max-width: 767px) {
          .slicknav_menu {
            display: block;
          }
        }
        
        .slicknav_btn {
          position: relative;
          display: block;
          vertical-align: middle;
          float: right;
          padding: 0.438em 0.625em 0.438em 0.625em;
          line-height: 1.125em;
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          background: #4c4c4c;
        }
        
        .slicknav_menutxt {
          display: block;
          text-indent: -9999px;
          width: 0;
          height: 0;
          float: left;
        }
        
        .slicknav_icon {
          float: left;
          width: 1.125em;
          height: 0.875em;
          margin: 0.063em 0 0 0.25em;
        }
        
        .slicknav_icon-bar {
          display: block;
          width: 1.125em;
          height: 0.125em;
          background: #fff;
          border-radius: 1px;
          margin-bottom: 0.188em;
        }
        
        .slicknav_nav {
          clear: both;
          color: #fff;
          background: #4c4c4c;
          font-size: 0.875em;
        }
        
        .slicknav_nav ul {
          overflow: hidden;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .slicknav_nav li {
          display: block;
          border-bottom: 1px solid #333;
        }
        
        .slicknav_nav a {
          display: block;
          padding: 0.625em 0.875em;
          text-decoration: none;
          color: #fff;
        }
        
        .slicknav_nav a:hover {
          background: #333;
        }
      `}</style>
    </div>
  )
}

export default MobileMenu
