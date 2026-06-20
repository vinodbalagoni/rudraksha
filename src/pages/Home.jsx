import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { FaBoxOpen, FaBalanceScale, FaShieldAlt, FaTruck, FaTools } from 'react-icons/fa'
import './Home.css'
import SEO from '../components/SEO'

/* ---------- DATA ---------- */
const heroSlides = [
  {
    id: 1,
    label: 'INDUSTRIAL & MANUFACTURING',
    title: 'Discover Premium Packaging Solutions Here!',
    subtitle: 'One setup for industries solution',
    image: '/images/hero_factory.png',
  },
  {
    id: 2,
    label: 'SAFETY & PROTECTION',
    title: 'Quality Safety Gear For Every Industry',
    subtitle: 'Trusted by 15+ brands and organizations',
    image: '/images/hero_safety_gloves.png',
  },
  {
    id: 3,
    label: 'PRECISION & QUALITY',
    title: 'Cleanroom & Technical Cleaning Tools',
    subtitle: 'High-quality swabs and technical wipes',
    image: '/images/hero_swabs.png',
  },
  {
    id: 4,
    label: 'PACKAGING SOLUTIONS',
    title: 'Complete Packaging Materials Support',
    subtitle: 'Trusted by manufacturing leaders across India',
    image: '/images/packing_solutions.png',
  },
  {
    id: 5,
    label: 'INDUSTRIAL SUPPLIES',
    title: 'Reliable. Scalable. Ready.',
    subtitle: 'Serving 500+ active clients nationwide',
    image: '/images/hero_factory.png',
  },
]

const services = [
  {
    id: 'safety-disposables',
    title: 'Safety Disposables',
    desc: 'PPE kits, masks, shoe covers, bouffant caps, gloves and more for industrial and medical use.',
    image: '/images/safety_disposables.png',
    link: '/products#safety',
  },
  {
    id: 'safety-material',
    title: 'Safety Material',
    desc: 'High-quality safety materials including industrial gloves, helmets, goggles, and protective clothing.',
    image: '/images/hero_safety_gloves.png',
    link: '/products#gloves',
  },
  {
    id: 'packing-solutions',
    title: 'Packing Solutions',
    desc: 'Complete packaging solutions — tapes, stretch films, bubble wrap, cartons, and more.',
    image: '/images/packing_solutions.png',
    link: '/products#packaging',
  },
]

const stats = [
  { value: 692, suffix: '+', label: 'Projects Completed' },
  { value: 669, suffix: '+', label: 'Active Clients' },
  { value: 871, suffix: '+', label: 'Satisfied Clients' },
]

const whyUs = [
  {
    icon: <FaBoxOpen />,
    title: 'Packaging Materials Quality',
    desc: 'Ensuring your products are safeguarded with precision and reliability. Elevate your brand with our commitment to excellence in every packaging solution.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality Assurance',
    desc: 'Our products undergo rigorous quality control measures to ensure they meet the highest industry standards. We prioritize the safety and well-being of our customers, providing PPE solutions that you can trust.',
  },
  {
    icon: <FaTools />,
    title: 'Comprehensive Product Range',
    desc: 'Explore our diverse range of products, including 3-ply face masks, shoe covers, and gloves, designed to cater to the varying needs of our clients.',
  },
  {
    icon: <FaTruck />,
    title: 'Customization Options',
    desc: 'Recognizing the unique needs of our clients, we offer customization options for bulk orders. Tailor our products to meet your specific requirements.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Dedicated Customer Support',
    desc: 'Our customer support team is here to assist you at every step. GST Number: 36EKBPR5926M1ZJ',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Operations Manager',
    company: 'TechPack Industries',
    text: 'Rudraksha Enterprises has been our go-to supplier for packaging materials. Their quality is consistent and delivery is always on time.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Procurement Head',
    company: 'MediSafe Pvt Ltd',
    text: 'Excellent quality disposable safety products. Their attention to detail and customer service is outstanding.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anand Patel',
    role: 'CEO',
    company: 'Global Exports Ltd',
    text: 'We have been partnering with Rudraksha Enterprises for 3 years. Their products are reliable and cost-effective.',
    rating: 5,
  },
]

/* ---------- COUNTER HOOK ---------- */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

/* ---------- STATS SECTION ---------- */
function StatsSection() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      <SEO title="Home" url="/" />
      <div className="stats-bg" />
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} started={started} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ stat, started, delay }) {
  const count = useCounter(stat.value, 1800, started)
  return (
    <div className="stat-item" style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-value">{count}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

/* ---------- HERO SLIDER ---------- */
function HeroSlider() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const total = heroSlides.length

  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setActive(idx)
    setTimeout(() => setAnimating(false), 600)
  }

  useEffect(() => {
    const t = setInterval(() => {
      goTo((active + 1) % total)
    }, 6000) // Slightly longer to appreciate zoom
    return () => clearInterval(t)
  }, [active])

  const slide = heroSlides[active]

  return (
    <section className="hero">
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`hero__slide${i === active ? ' hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        >
           <div className="hero__overlay" />
        </div>
      ))}
      <div className="container hero__content">
        <span className="hero__label anim-fadeup">{slide.label}</span>
        <h2 className="hero__title anim-fadeup anim-delay-1">{slide.title}</h2>
        <p className="hero__subtitle anim-fadeup anim-delay-2">{slide.subtitle}</p>
        <div className="hero__actions anim-fadeup anim-delay-3">
          <Link to="/products" className="btn-primary">
            DISCOVER MORE <FiArrowRight />
          </Link>
          <Link to="/contact" className="btn-white">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Controls */}
      <button
        id="hero-prev"
        className="hero__ctrl hero__ctrl--prev"
        onClick={() => goTo((active - 1 + total) % total)}
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>
      <button
        id="hero-next"
        className="hero__ctrl hero__ctrl--next"
        onClick={() => goTo((active + 1) % total)}
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            id={`hero-dot-${i}`}
            className={`hero__dot${i === active ? ' hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

/* ---------- HOME PAGE ---------- */
export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((p) => (p + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="home">

      {/* HERO */}
      <HeroSlider />

      {/* TRUST CARDS */}
      <section className="trust-cards">
        <div className="container trust-cards__grid">
          <div className="trust-card">
            <div className="trust-card__icon"><FaBoxOpen /></div>
            <div>
              <h3>Nature of Business</h3>
              <p>Supplier and Manufacturer</p>
            </div>
          </div>
          <div className="trust-card">
            <div className="trust-card__icon"><FaBalanceScale /></div>
            <div>
              <h3>Legal Status of Firm</h3>
              <p>Proprietor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="home-about section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="home-about__text">
              <span className="section-label">ABOUT COMPANY</span>
              <h2 className="section-title">RUDRAKSHA ENTERPRISES</h2>
              <p className="section-subtitle">
                Rudraksha Enterprises is a leading manufacturer, supplier and trader of Disposable Safety Items and Packaging Materials. Undue attention to quality control and management has made us trusted by businesses across India and internationally.
              </p>
              <br />
              <p style={{color: 'var(--gray-500)', fontSize: '15px', lineHeight: '1.7'}}>
                We serve a diverse range of industries including manufacturing, healthcare, and clean rooms. Our products conform to international quality standards and are trusted by businesses across India and internationally.
              </p>
              <br />
              <Link to="/about" className="btn-primary">
                LEARN MORE <FiArrowRight />
              </Link>
            </div>
            <div className="home-about__img">
              <img src="/images/about_company.png" alt="Rudraksha Enterprises - About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / PRODUCTS GRID */}
      <section className="home-services section-padding" style={{background: 'var(--gray-100)'}}>
        <div className="container">
          <div className="home-services__header">
            <div>
              <span className="section-label">OUR PRODUCTS</span>
              <h2 className="section-title">Checkout Our Products</h2>
              <p className="section-subtitle">We provide best Safety & Industrial Products</p>
            </div>
            <Link to="/products" className="btn-primary">LEARN MORE <FiArrowRight /></Link>
          </div>
          <div className="grid-3">
            {services.map((svc) => (
              <Link to={svc.link} key={svc.id} className="service-card card">
                <div className="service-card__img">
                  <img src={svc.image} alt={svc.title} />
                </div>
                <div className="service-card__body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <span className="service-card__more">
                    LEARN MORE <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT BANNER */}
      <section className="commitment-banner">
        <div className="commitment-banner__bg" style={{backgroundImage: 'url(/images/commitment_bg.png)'}} />
        <div className="commitment-banner__overlay" />
        <div className="container commitment-banner__content">
          <h2>Committed To Providing Our Customers With <span>Best Solutions</span></h2>
          <p>Delivering quality products and reliable services with a commitment to excellence, trust, and long-term partnership.</p>
          <Link to="/contact" className="btn-primary">
            CONTACT US <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <StatsSection />

      {/* WHY CHOOSE US */}
      <section className="why-us section-padding" style={{background: 'var(--dark)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '50px'}}>
            <span className="section-label">WHY CHOOSE US</span>
            <h2 className="section-title white">Real People. Real Work. Real Rewards.</h2>
          </div>
          <div className="why-us__grid">
            {whyUs.map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted section-padding">
        <div className="container">
          <h2 className="section-title text-center" style={{marginBottom: '8px'}}>
            Trusted by 15 brands and organizations.
          </h2>
          <div className="trusted__bar" />
          <div className="trusted__logos">
            {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'].map((c, i) => (
              <div key={i} className="trusted__logo-item">
                <div className="trusted__logo-placeholder">
                  <span>{c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="text-center" style={{marginBottom: '48px'}}>
            <span className="section-label">TESTIMONIALS</span>
            <h2 className="section-title white">Read Their Feedbacks</h2>
          </div>
          <div className="testimonials__slider">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-card${i === testimonialIdx ? ' active' : ''}`}
              >
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <FiStar key={j} className="star-filled" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  className={`hero__dot${i === testimonialIdx ? ' hero__dot--active' : ''}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="home-contact section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="home-contact__img">
              <img src="/images/safety_disposables.png" alt="Contact Rudraksha Enterprises" />
            </div>
            <div className="home-contact__form-wrap">
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="section-title">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', mobile: '', email: '', message: '' })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="home-name">Name *</label>
        <input
          id="home-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
      </div>
      <div className="contact-form__field">
        <label htmlFor="home-mobile">Mobile Number *</label>
        <input
          id="home-mobile"
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          required
          placeholder="+91 XXXXX XXXXX"
        />
      </div>
      <div className="contact-form__field">
        <label htmlFor="home-email">Email *</label>
        <input
          id="home-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
        />
      </div>
      <div className="contact-form__field">
        <label htmlFor="home-message">Message</label>
        <textarea
          id="home-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about your requirements..."
        />
      </div>
      {submitted && (
        <div className="contact-form__success">
          ✓ Thank you! We'll get back to you shortly.
        </div>
      )}
      <button id="home-submit" type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>
        SUBMIT
      </button>
    </form>
  )
}
