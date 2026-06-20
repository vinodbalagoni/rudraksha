import { Link } from 'react-router-dom'
import './Products.css'
import SEO from '../components/SEO'

const consumablesProducts = [
  { name: 'FACE MASK', desc: 'Protective 3-ply face masks for daily use', img: '/images/products/face_mask.png' },
  { name: 'FACE MASK WITH SOFT FABRIC EAR LOOP', desc: 'Comfortable masks with soft ear loops', img: '/images/products/face_mask_with_soft_fabric_ear_loop.png' },
  { name: 'BOUFFANT HEAD CAP', desc: 'Protective head covering for cleanrooms', img: '/images/products/buffant_head_cap.png' },
  { name: 'NON WOVEN SHOE COVER', desc: 'Disposable shoe covers for hygiene', img: '/images/products/non_woven_shoe_cover.png' },
  { name: 'PPE KIT', desc: 'Complete personal protective equipment kit', img: '/images/products/ppe_kit.png' },
  { name: 'SURGEON CAP', desc: 'Medical-grade surgical head protection', img: '/images/products/surgen_cap.png' },
  { name: 'PLASTIC HAND GLOVES', desc: 'Disposable plastic protective gloves', img: '/images/products/plastic_hand_gloves.png' },
  { name: 'NITRILE HAND GLOVES', desc: 'Latex-free nitrile protection gloves', img: '/images/products/nitrile_hand_gloves.png' },
  { name: 'LATEX GLOVES', desc: 'Premium latex protective gloves', img: '/images/products/latex_hand_gloves.png' },
]

export default function Consumables() {
  return (
    <main className="products-page">
      <SEO title="Consumables" url="/consumables" />
      <div className="page-header" data-product="packaging">
        <div className="container">
          <h1>Consumables</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Consumables</span>
          </div>
        </div>
      </div>
      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {consumablesProducts.map((product, index) => (
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
          <h2>Need High-Quality Consumables?</h2>
          <p>We provide certified consumables and PPE products for healthcare, industrial, and cleanroom applications. Contact us for bulk pricing and customization.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link to="/contact" className="btn-white">GET A QUOTE</Link>
            <a
              href="https://wa.me/919100040086?text=Hello%20Rudraksha%20Enterprises,%20I%20have%20a%20bulk%20requirement%20for%20consumables%20and%20PPE."
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
