import { Link } from 'react-router-dom'
import './Products.css' // Reusing the same minimalist grid styles

const gloveProducts = [
  { name: 'COTTON GLOVES', desc: 'Industrial grade protective handwear', img: '/images/products/gloves/cotton_gloves.webp' },
  { name: 'COTTON KNITTED WITH SINGLE AND DOUBLE SIDE PVC DOTS GLOVES', desc: 'Enhanced grip safety gloves', img: '/images/products/gloves/pvc_dots_gloves.webp' },
  { name: 'BANIAN GLOVES & LINT FREE GLOVES', desc: 'Precision handling and cleanroom gloves', img: '/images/products/gloves/banian_lint_free.png' },
  { name: 'HEAT RESISTANCE GLOVES', desc: 'High-temperature industrial protection', img: '/images/products/gloves/heat_resistance.webp' },
  { name: 'CUT RESISTANCE GLOVES', desc: 'Blade and puncture protection handwear', img: '/images/products/gloves/cut_resistance.webp' },
  { name: 'CUT RESISTANCE ARM SLEEVES', desc: 'Forearm protection from sharp edges', img: '/images/products/gloves/cut_resistance_sleeves.webp' },
  { name: 'RUBBER GLOVES', desc: 'Chemical and liquid resistant gloves', img: '/images/products/gloves/rubber_gloves.webp' },
  { name: 'SPLIT CANADIAN LEATHER HAND GLOVES', desc: 'Rugged leather protection for heavy work', img: '/images/products/gloves/canadian_leather.webp' },
  { name: 'SPLIT LEATHER WELDING GLOVES', desc: 'Specialized thermal protection for welding', img: '/images/products/gloves/welding_gloves.webp' },
]

export default function IndustrialGloves() {
  return (
    <main className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>Industrial Gloves</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Industrial Gloves</span>
          </div>
        </div>
      </div>

      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {gloveProducts.map((product, index) => (
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
          <h2>Looking for Specialized PPE?</h2>
          <p>We provide a wide range of industrial gloves and head caps tailored for your facility's safety needs. Contact us for bulk pricing.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link to="/contact" className="btn-white">GET A QUOTE</Link>
            <a
              href="https://wa.me/919100040086?text=Hello%20Rudraksha%20Enterprises,%20I%20have%20a%20bulk%20requirement%20for%20industrial%20gloves."
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
