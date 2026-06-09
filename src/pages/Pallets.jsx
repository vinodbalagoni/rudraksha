import { Link } from 'react-router-dom'
import './Products.css'
import SEO from '../components/SEO'

const palletProducts = [
  { name: 'Heat Treated Pallet', desc: 'ISPM-15 compliant wooden pallets for export', img: '/images/products/other/heat_treated_pallet.webp' },
  { name: 'Plastic Pallet', desc: 'Durable HDPE pallets for hygienic storage', img: '/images/products/other/plastic_pallet.png' },
  { name: 'Export Steel Pallet', desc: 'Heavy-duty steel pallets for international transit', img: '/images/products/other/export_steel_pallet.webp' },
  { name: 'Warehouse Steel Pallet', desc: 'Galvanized industrial storage basis', img: '/images/products/other/warehouse_steel_pallet.webp' },
]

export default function Pallets() {
  return (
    <main className="products-page">
      <SEO title="Pallets" url="/pallet" />
      <div className="page-header">
        <div className="container">
          <h1>Industrial Pallets</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Pallets</span>
          </div>
        </div>
      </div>
      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {palletProducts.map((p, i) => (
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
