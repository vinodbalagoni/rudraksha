import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      id="whatsapp-float"
      href="https://wa.me/919100040086?text=Hello!%20I%20am%20interested%20in%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}
