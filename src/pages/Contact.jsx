import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Contact.css'
import SEO from '../components/SEO'

const contactInfo = [
  {
    icon: <FiPhone />,
    title: 'Phone',
    lines: ['+91 9100040086'],
    href: 'tel:+919100040086',
  },
  {
    icon: <FiMail />,
    title: 'Email',
    lines: ['rudraksha@rudrakshaenterprise.in'],
    href: 'mailto:rudraksha@rudrakshaenterprise.in',
  },
  {
    icon: <FiMapPin />,
    title: 'Address',
    lines: ['Plot no:- 29, Sai Nagar,', 'L.b nagar, Hyderabad,', 'Telangana 500068.'],
  },
  {
    icon: <FiClock />,
    title: 'Business Hours',
    lines: ['Mon – Sat: 9AM – 6PM', 'Sunday: Closed'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', mobile: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1200)
  }

  return (
    <main>
      <SEO title="Contact" url="/contact" />
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <section className="contact-info-section section-padding" style={{background: 'var(--gray-100)'}}>
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => (
              <div className="contact-info-card" key={i}>
                <div className="contact-info-card__icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j}>
                    {info.href ? <a href={info.href}>{line}</a> : line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Image */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="contact-img-col">
              <img src="/images/about_company.png" alt="Contact Rudraksha Enterprises" />
            </div>
            <div className="contact-form-col">
              <span className="section-label">SEND US A MESSAGE</span>
              <h2 className="section-title">Send us a message</h2>
              <p className="section-subtitle">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="contact-name">Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="contact-mobile">Mobile Number *</label>
                      <input
                        id="contact-mobile"
                        name="mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    id="contact-submit"
                    type="submit"
                    className="btn-primary contact-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="contact-loading" />
                    ) : (
                      <>
                        <FiSend /> SUBMIT MESSAGE
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="whatsapp-cta">
        <div className="container whatsapp-cta__inner">
          <FaWhatsapp className="whatsapp-cta__icon" />
          <div>
            <h3>Chat on WhatsApp</h3>
            <p>Get instant responses. Our team is available on WhatsApp during business hours.</p>
          </div>
          <a
            href="https://wa.me/919100040086?text=Hello!%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white whatsapp-cta__btn"
          >
            START CHAT
          </a>
        </div>
      </section>

      {/* Map - Google Maps embed iframe */}
      <div className="map-container">
        <iframe
          title="Rudraksha Enterprises Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3808.1354729014956!2d78.56516700000002!3d17.357212999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIxJzI2LjAiTiA3OMKwMzMnNTQuNiJF!5e0!3m2!1sen!2sin!4v1776509143300!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  )
}
