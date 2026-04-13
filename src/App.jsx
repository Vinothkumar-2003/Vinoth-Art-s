import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Banner from './pages/Banner'
import Flex from './pages/Flex'
import Frame from './pages/Frame'

const WHATSAPP_NUMBER = '6381217533'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/frame" element={<Frame />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${6381217533}?text=Hi! I need help with printing.`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </BrowserRouter>
  )
}
