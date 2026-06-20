import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { FaShieldAlt, FaBoxOpen, FaTruck, FaUsers, FaMedal } from 'react-icons/fa'
import './About.css'
import SEO from '../components/SEO'

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'Rudraksha Enterprises established as a partnership firm in Chennai.' },
  { year: '2019', title: 'Product Expansion', desc: 'Expanded product range to include ESD and cleanroom products.' },
  { year: '2020', title: 'International Exports', desc: 'Started exporting safety disposables to international markets.' },
  { year: '2022', title: '500+ Clients', desc: 'Crossed 500 active clients milestone across industries.' },

]

const values = [
  { icon: <FaShieldAlt />, title: 'Quality First', desc: 'Every product goes through rigorous quality checks before reaching our clients.' },
  { icon: <FaUsers />, title: 'Customer Focus', desc: 'We build long-term relationships by understanding and exceeding client expectations.' },
  { icon: <FaMedal />, title: 'Excellence', desc: 'We strive for excellence in our products, services, and customer experience.' },
  { icon: <FaTruck />, title: 'Reliability', desc: 'Timely delivery and consistent supply chain management for all our clients.' },
]

export default function About() {
  return (
    <main>
      <SEO title="About" url="/about" />
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main About */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="about-img-wrap">
              <img src="/images/about_company.png" alt="About Rudraksha Enterprises" className="about-img" />
            </div>
            <div className="about-text">
              <span className="section-label">ABOUT COMPANY</span>
              <h2 className="section-title">RUDRAKSHA ENTERPRISES</h2>
              <p style={{color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '16px'}}>
                Rudraksha Enterprises is a leading manufacturer, supplier and trader of Disposable Safety Items and Packaging Materials. Undue attention to quality control and management has made us trusted by businesses across India and internationally.
              </p>
                We serve a diverse range of industries including manufacturing, healthcare, pharmaceuticals, electronics, and clean rooms. Our products conform to international quality standards and are trusted by businesses across India and internationally.

              <div className="about-features">
                {[
                  'ISO compliant quality processes',
                  'Bulk order customization available',
                  'Pan-India delivery',
                  'International export capability',
                  'Competitive pricing',
                  'Dedicated account management',
                ].map((f) => (
                  <div className="about-feature" key={f}>
                    <FiCheckCircle className="check-icon" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                <Link to="/products" className="btn-primary">
                  OUR PRODUCTS <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn-outline">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-bar">
        <div className="container about-stats-grid">
          {[
            { value: '692+', label: 'Projects Completed' },
            { value: '669+', label: 'Active Clients' },
            { value: '871+', label: 'Satisfied Clients' },
            { value: '15+', label: 'Brand Partners' },
          ].map((s) => (
            <div className="about-stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{background: 'var(--gray-100)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '48px'}}>
            <span className="section-label">OUR VALUES</span>
            <h2 className="section-title">What Drives Us Forward</h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{marginBottom: '48px'}}>
            <span className="section-label">OUR JOURNEY</span>
            <h2 className="section-title">Company Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline-item${i % 2 === 0 ? ' left' : ' right'}`} key={i}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2>Ready to Work With Us?</h2>
            <p>Get in touch to discuss your requirements and get a custom quote.</p>
          </div>
          <Link to="/contact" className="btn-white">
            GET A QUOTE <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}
