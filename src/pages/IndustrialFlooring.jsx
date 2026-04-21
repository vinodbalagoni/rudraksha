import { Link } from 'react-router-dom'
import './Products.css'

const flooringProducts = [
  { name: 'EPOXY FLOORING AND ESD FLOORING', desc: 'Durable anti-static industrial floor solutions', img: '/images/products/other/flooring.png' },
]

export default function IndustrialFlooring() {
  return (
    <main className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>Epoxy & ESD Flooring</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Industrial Flooring</span>
          </div>
        </div>
      </div>
      <section className="packaging-catalog section-padding">
        <div className="container">
          <div className="catalog-grid">
            {flooringProducts.map((p, i) => (
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
