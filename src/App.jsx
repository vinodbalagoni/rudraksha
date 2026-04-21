import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import IndustrialGloves from './pages/IndustrialGloves'
import SafetyDisposables from './pages/SafetyDisposables'
import ESDProducts from './pages/ESDProducts'
import CottonSwabs from './pages/CottonSwabs'
import BiomassBriquettes from './pages/BiomassBriquettes'
import IndustrialFlooring from './pages/IndustrialFlooring'
import Pallets from './pages/Pallets'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industrial-gloves" element={<IndustrialGloves />} />
        <Route path="/safety-disposables" element={<SafetyDisposables />} />
        <Route path="/esd" element={<ESDProducts />} />
        <Route path="/cotton-swab" element={<CottonSwabs />} />
        <Route path="/biomass-briquettes" element={<BiomassBriquettes />} />
        <Route path="/flooring" element={<IndustrialFlooring />} />
        <Route path="/pallet" element={<Pallets />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
