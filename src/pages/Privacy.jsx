import { Link } from 'react-router-dom'
import './Legal.css'

export default function Privacy() {
  return (
    <main>
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: January 2024</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out our contact form (name, email, phone number, and message). We may also collect certain technical data when you visit our website.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send product information, quotes, and updates you request</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or serving our customers, provided those parties agree to keep this information confidential.</p>

            <h2>4. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Business inquiry data is typically retained for 2 years.</p>

            <h2>5. Cookies</h2>
            <p>Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>

            <h2>6. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet is 100% secure.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at the email address below. We will respond to your request within 30 days.</p>

            <h2>8. Third Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to read their privacy policies.</p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:<br />
            <a href="mailto:Nag.rudhraksha@gmail.com">Nag.rudhraksha@gmail.com</a><br />
            +91 9994 272 200</p>
          </div>
        </div>
      </section>
    </main>
  )
}
