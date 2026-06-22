import { Link } from 'react-router-dom'
import './Products.css'
import SEO from '../components/SEO'

const tShirtProducts = [
  { name: 'T-SHIRT WITH COMPANY LOGO', desc: 'Premium branded t-shirts with company logo', img: '/images/products/t_shirt_with_company_logo.png' },
  { name: 'CUSTOMIZED T-SHIRT', desc: 'Custom printed t-shirts tailored to your needs', img: '/images/products/customized_t_shirt.png' },
  { name: 'POLO SHIRT WITH COMPANY LOGO', desc: 'Professional polo shirts with embroidered company branding', img: '/images/products/polo_shirt_company_logo.png' },
  { name: 'ROUND NECK T-SHIRT WITH EMBROIDERED LOGO', desc: 'Classic round neck tees with embroidered company logo', img: '/images/products/round_neck_embroidered_logo.png' },
  { name: 'V-NECK PROMOTIONAL T-SHIRT', desc: 'Stylish v-neck t-shirts for promotional campaigns', img: '/images/products/v_neck_promotional_shirt.png' },
  { name: 'SPORTS/ATHLETIC T-SHIRT WITH BRANDING', desc: 'High-performance athletic wear with company branding', img: '/images/products/sports_athletic_t_shirt_branding.png' },
  { name: 'OVERSIZED T-SHIRT WITH PROMOTIONAL PRINT', desc: 'Trendy oversized t-shirts with bold promotional prints', img: '/images/products/oversized_promotional_print.png' },
  { name: 'BUTTON-UP SHIRT WITH COMPANY BRANDING', desc: 'Professional button-up shirts with embroidered logos', img: '/images/products/button_up_company_branding.png' },
]

export default function TShirts() {
  return (
    <main className="products-page">
      <SEO title="T-Shirts" url="/t-shirts" />
      <div className="page-header" data-product="packaging">
        <div className="container">
          <h1>T-Shirts</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>T-Shirts</span>
          </div>
        </div>
      </div>
      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {tShirtProducts.map((product, index) => (
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
          <h2>Looking for Custom T-Shirts?</h2>
          <p>We provide branded and customized t-shirts for corporate and promotional purposes. Contact us for bulk orders and custom designs.</p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Link to="/contact" className="btn-white">GET A QUOTE</Link>
            <a
              href="https://wa.me/919100040086?text=Hello%20Rudraksha%20Enterprises,%20I%20have%20a%20requirement%20for%20custom%20t-shirts."
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
