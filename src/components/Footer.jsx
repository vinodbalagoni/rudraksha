import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Col 1: Logo + About */}
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              <img
                src="/images/rudraksha_logo.png"
                alt="Rudraksha Enterprises"
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__about">
              Rudraksha Enterprises is a leading manufacturer, supplier and trader of Disposable Safety Items and Packaging Materials. Undue attention to quality control and management has made us trusted by businesses across India and internationally. <em>Reliable. Scalable. Ready.</em>
            </p>
            <div className="footer__social">
              <a href="https://www.instagram.com/rudra_kshaenterprises?utm_source=qr&igsh=MTFnOGp6MTVib2ZubQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://x.com/Rudraksha91" target="_blank" rel="noopener noreferrer" aria-label="X"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/rudraksha-enterprises-33a395418?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://youtube.com/@rudrakshaenterprises-d4y?si=-zmxFlS9ddrarcbQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://wa.me/919100040086" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Link's</h3>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Col 3: Important Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Important Link's</h3>
            <ul className="footer__links">
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
            </ul>
            <h3 className="footer__col-title" style={{marginTop: '28px'}}>Contact Us</h3>
            <ul className="footer__contact-list">
              <li>
                <FiMail />
                <a href="mailto:rudraksha@rudrakshaenterprise.in">rudraksha@rudrakshaenterprise.in</a>
              </li>
              <li>
                <FiPhone />
                <a href="tel:+919100040086">+91 9100040086</a>
              </li>
              <li>
                <FiMapPin />
                <span>Plot no:- 29, Sai Nagar, L.b nagar, Hyderabad, Telangana 500068.</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Company Info */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company Info</h3>
            <div className="footer__info-card">
              <div className="footer__info-item">
                <span className="footer__info-label">Nature of Business</span>
                <span className="footer__info-value">Supplier and Manufacturer</span>
              </div>
              <div className="footer__info-item">
                <span className="footer__info-label">Legal Status</span>
                <span className="footer__info-value">Proprietor</span>
              </div>
              <div className="footer__info-item">
                <span className="footer__info-label">Tagline</span>
                <span className="footer__info-value">Reliable. Scalable. Ready.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Rudraksha Enterprises. All Rights Reserved.</p>
          <p>
            <Link to="/terms">Terms & Conditions</Link> |{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
