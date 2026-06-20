import { Link } from 'react-router-dom'
import './Legal.css'
import SEO from '../components/SEO'

export default function Terms() {
  return (
    <main>
      <SEO title="Terms" url="/terms" />
      <div className="page-header">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: January 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h2>2. Products and Services</h2>
            <p>Rudraksha Enterprises provides packaging materials, safety disposables, industrial gloves, and ESD products. All products are subject to availability. We reserve the right to modify, suspend, or discontinue any product or service at any time.</p>

            <h2>3. Pricing and Payment</h2>
            <p>All prices quoted are in Indian Rupees (INR) unless otherwise specified. Prices are subject to change without notice. Payment terms will be agreed upon at the time of purchase. For international transactions, applicable taxes and duties are the buyer's responsibility.</p>

            <h2>4. Orders and Delivery</h2>
            <p>Orders are subject to acceptance by Rudraksha Enterprises. Delivery timelines are estimates and may vary based on availability and location. We strive to meet all committed delivery dates but cannot guarantee delivery on specific dates.</p>

            <h2>5. Returns and Refunds</h2>
            <p>Returns must be initiated within 7 days of delivery for damaged or defective products. Custom orders are non-returnable. Refunds will be processed within 14 working days of approval. Shipping costs for returns are borne by the buyer unless the return is due to our error.</p>

            <h2>6. Intellectual Property</h2>
            <p>All content on this website, including logos, text, images, and graphics, is the property of Rudraksha Enterprises and is protected by intellectual property laws. Unauthorized use or reproduction is strictly prohibited.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Rudraksha Enterprises shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our maximum liability shall not exceed the value of the goods or services provided.</p>

            <h2>8. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>

            <h2>9. Contact</h2>
            <p>For any questions regarding these Terms and Conditions, please contact us at <a href="mailto:rudraksha@rudrakshaenterprise.in">rudraksha@rudrakshaenterprise.in</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
