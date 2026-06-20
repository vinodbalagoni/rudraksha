import { Link } from 'react-router-dom'
import './Products.css'
import SEO from '../components/SEO'

const packagingProducts = [
  { name: 'Stretch Film', desc: 'SIZE : UPTO 1000MM', img: '/images/products/stretch_film.webp' },
  { name: 'Bubble Roll', desc: 'Protection cushioning', img: '/images/products/bubble_roll.webp' },
  { name: 'Bubble Wrap', desc: 'Standard bubble sheets', img: '/images/products/bubble_wrap.webp' },
  { name: 'Bubble Pouch', desc: 'Ready-to-use pouches', img: '/images/products/bubble_pouch.webp' },
  { name: 'Air Pouch', desc: 'Inflatable cushioning', img: '/images/products/air_pouch.webp' },
  { name: 'Foam Roll', desc: 'Protective white foam', img: '/images/products/foam_roll.webp' },
  { name: 'Bopp Tape', desc: 'Packaging tapes', img: '/images/products/bopp_tape.webp' },
  { name: 'Floor Marking Tape', desc: 'High visibility tapes', img: '/images/products/floor_marking_tape.webp' },
  { name: 'HDPE Tape', desc: 'Heavy-duty tape', img: '/images/products/hdpe_tape.webp' },
  { name: 'PP VERGIN STRAP', desc: 'Plastic strapping', img: '/images/products/pp_vergin_strap.webp' },
  { name: 'PP SEMI VERGIN STRAP', desc: 'Plastic strapping', img: '/images/products/pp_semi_vergin_strap.webp' },
  { name: 'PET STRAP', desc: 'High-strength strapping', img: '/images/products/pet_strap.webp' },
  { name: 'STEEL STRAP', desc: 'Industrial strapping', img: '/images/products/steel_strap.webp' },
  { name: 'PP & PET STRAP CLIP', desc: 'Strapping accessories', img: '/images/products/strap_clip.webp' },
  { name: 'POLYESTER COMPOSITE STRAP', desc: 'Flexible strapping', img: '/images/products/polyester_composite_strap.webp' },
  { name: 'CONTAINER DESICCANT', desc: 'Moisture control', img: '/images/products/container_desiccant.webp' },
  { name: 'SILICA GEL', desc: 'Moisture control', img: '/images/products/silica_gel.webp' },
  { name: 'MASKING TAPE', desc: 'Painter\'s/Paper tape', img: '/images/products/masking_tape.jpg' },
]

export default function Products() {
  return (
    <main className="products-page">
      <SEO title="Products" url="/products" />
      <div className="page-header" data-product="packaging">
        <div className="container">
          <h1>Packaging</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Packaging</span>
          </div>
        </div>
      </div>

      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {packagingProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-card__image">
                  <img src={product.img} alt={product.name} loading="lazy" />
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__desc">{product.desc}</p>
                </div>
                <div className="product-card__overlay">
                  <a 
                    href={`https://wa.me/919100040086?text=Dear%20Rudraksha%20Enterprises,%20I%20am%20enquiring%20about%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    ENQUIRY NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container products-cta__inner">
          <h2>Need Custom Packaging Solutions?</h2>
          <p>We provide tailored dimensions and bulk discounts for all industrial needs. Contact us today for a personalized quote.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link to="/contact" className="btn-white">GET IN TOUCH</Link>
            <a
              href="https://wa.me/919100040086?text=Hello%20Rudraksha%20Enterprises,%20I%20have%20a%20bulk%20packaging%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{background: 'transparent', borderColor: 'white', color: 'white'}}
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
