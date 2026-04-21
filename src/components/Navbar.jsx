import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Navbar.css'

const products = [
  { label: 'Packaging Solutions', path: '/products' },
  { label: 'Industrial Gloves', path: '/industrial-gloves' },
  { label: 'Safety Disposables', path: '/safety-disposables' },
  { label: 'ESD Products', path: '/esd' },
  { label: 'Cleanroom Cotton Swabs', path: '/cotton-swab' },
  { label: 'Biomass Briquettes', path: '/biomass-briquettes' },
  { label: 'Epoxy & ESD Flooring', path: '/flooring' },
  { label: 'Pallets', path: '/pallet' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href="mailto:Nag.rudhraksha@gmail.com" className="topbar__link">
              <FiMail /> Nag.rudhraksha@gmail.com
            </a>
            <a href="tel:+919100040086" className="topbar__link">
              <FiPhone /> +91 9100040086
            </a>
          </div>
          <div className="topbar__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="navbar">
        <div className="container navbar__inner">
          <button
            id="hamburger-menu"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link to="/" className="logo" onClick={closeAll}>
            <img
              src="/images/rudraksha_logo.png"
              alt="Rudraksha Enterprises"
              className="logo__img"
            />
          </Link>

          <nav id="main-navigation" className={`nav${menuOpen ? ' nav--open' : ''}`}>
            <NavLink to="/" className={({isActive}) => `nav__link${isActive ? ' active' : ''}`} onClick={closeAll} end>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `nav__link${isActive ? ' active' : ''}`} onClick={closeAll}>About Us</NavLink>

            <div className="nav__dropdown" ref={dropdownRef}>
              <button
                id="products-dropdown-btn"
                className={`nav__link nav__dropdown-trigger${dropdownOpen ? ' active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Our Products <FiChevronDown className={`chevron${dropdownOpen ? ' rotate' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="dropdown__menu">
                  {products.map((p) => (
                    <Link
                      key={p.label}
                      to={p.path}
                      className="dropdown__item"
                      onClick={closeAll}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" className={({isActive}) => `nav__link${isActive ? ' active' : ''}`} onClick={closeAll}>Contact Us</NavLink>
          </nav>

          <a
            id="enquiry-btn"
            href="https://wa.me/919100040086?text=Hello!%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary enquiry-btn"
          >
            ENQUIRY NOW
          </a>
        </div>
      </div>
    </header>
  )
}
