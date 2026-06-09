import { Link } from 'react-router-dom'
import './Products.css'
import SEO from '../components/SEO'

const safetyProducts = [
  { name: 'APRONS', desc: 'Industrial protective aprons', img: '/images/products/safety/apron.webp' },
  { name: 'VELCRO AT THE WAIST AND CHEST STRAPS', desc: 'Secure fit industrial safety wear', img: '/images/products/safety/velcro_waist.png' },
  { name: 'VELCRO AT THE WAIST LEVEL', desc: 'Adjustable safety gear', img: '/images/products/safety/velcro_waist_2.webp' },
  { name: 'VELCRO AT FRONT OPENING', desc: 'Quick-access industrial wear', img: '/images/products/safety/velcro_front.webp' },
  { name: 'MACHINE CORDED AROUND THE NECK STYLE', desc: 'Secure neck-style protective wear', img: '/images/products/safety/corded_neck.png' },
  { name: 'NON CORDED INDIVIDUAL PIECES', desc: 'Disposable safety components', img: '/images/products/safety/individual_pieces.webp' },
  { name: 'EAR MUFFS', desc: 'Hearing protection for high-noise areas', img: '/images/products/safety/ear_muffs.webp' },
  { name: 'SAFETY GOGGLES', desc: 'Eye protection from dust and chemicals', img: '/images/products/safety/goggles.webp' },
  { name: 'SAFETY SHIELDS', desc: 'Full face protection shields', img: '/images/products/safety/shields.webp' },
  { name: 'BODY HARNESS', desc: 'Fall protection for height work', img: '/images/products/safety/harness.webp' },
  { name: 'HOOKS', desc: 'Industrial safety connectors and hooks', img: '/images/products/safety/hooks.webp' },
  { name: 'CONNECTORS', desc: 'Load-rated industrial connectors', img: '/images/products/safety/connectors.webp' },
  { name: 'STYLISH & DURABLE INDUSTRIAL SHOES', desc: 'Premium safety footwear', img: '/images/products/safety/shoes_industrial.png' },
  { name: 'STYLISH & EASY WEAR SAFETY SHOES', desc: 'Comfort-focused safety shoes', img: '/images/products/safety/shoes_easywear.png' },
  { name: 'PREMIUM & CLASSIC SAFETY SHOES', desc: 'All-day durability footwear', img: '/images/products/safety/shoes_premium.webp' },
  { name: 'GUM BOOT', desc: 'Waterproof protective boots', img: '/images/products/safety/gum_boot.webp' },
  { name: 'DURABLE STYLISH & COMFORTABLE HELMET', desc: 'Head protection for heavy industries', img: '/images/products/safety/helmet.webp' },
  { name: 'COMFORTABLE BLACK SAFETY SHOES', desc: 'Standard industrial safety shoes', img: '/images/products/safety/shoes_black.webp' },
]

export default function SafetyDisposables() {
  return (
    <main className="products-page">
      <SEO title="Safety Disposables" url="/safety-disposables" />
      <div className="page-header">
        <div className="container">
          <h1>Safety Disposables</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Safety Disposables</span>
          </div>
        </div>
      </div>
      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {safetyProducts.map((p, i) => (
              <div key={i} className="product-card">
                <div className="product-card__image"><img src={p.img} alt={p.name} loading="lazy" /></div>
                <div className="product-card__info">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.desc}</p>
                </div>
                <div className="product-card__overlay">
                  <a href={`https://wa.me/919100040086?text=Interested%20in%20${encodeURIComponent(p.name)}`} target="_blank" rel="noopener noreferrer" className="btn-primary">ENQUIRY NOW</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
