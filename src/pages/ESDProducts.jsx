import { Link } from 'react-router-dom'
import './Products.css'
import SEO from '../components/SEO'

const esdProducts = [
  { name: 'ESD GLOVES', desc: 'Anti-static hand protection', img: '/images/products/esd/gloves.png' },
  { name: 'ESD FINGER COT', desc: 'Precision electronic handling', img: '/images/products/esd/finger_cot.png' },
  { name: 'ESD CONDUCTIVE CORRUGATED BIN AND ESD TRAY', desc: 'Safe electronic components storage', img: '/images/products/esd/bin_tray.png' },
  { name: 'ESD STICKY ROLLER', desc: 'Dust removal for static-sensitive areas', img: '/images/products/esd/roller.png' },
  { name: 'ESD FOAM', desc: 'Protective static-dissipative foam', img: '/images/products/esd/foam.png' },
  { name: 'ESD STICKY MAT', desc: 'Cleanroom contamination control', img: '/images/products/esd/mat.png' },
  { name: 'AUTOMATIC TAPE DISPENSER', desc: 'Precision ESD tape dispensing', img: '/images/products/esd/dispenser.png' },
  { name: 'SOLDERING TIPS', desc: 'High-quality industrial soldering components', img: '/images/products/esd/solder_tips.png' },
  { name: 'ESD APRON, SLIPPER AND CAP', desc: 'Complete anti-static apparel', img: '/images/products/esd/apparel.png' },
  { name: 'ESD Bags', desc: 'Shielding bags for electronics', img: '/images/products/esd/bags.png' },
  { name: 'ESD KAPTON, CAUTION, GRID TAPE', desc: 'Specialized ESD marking tapes', img: '/images/products/esd/tapes.png' },
]

export default function ESDProducts() {
  return (
    <main className="products-page">
      <SEO title="ESD Products" url="/esd" />
      <div className="page-header">
        <div className="container">
          <h1>ESD Products</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>ESD Products</span>
          </div>
        </div>
      </div>
      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {esdProducts.map((p, i) => (
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
