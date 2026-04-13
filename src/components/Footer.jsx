import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '6381217533'

export default function Footer() {
  return (
    <footer className="pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <h5 style={{fontFamily:'Bebas Neue',fontSize:'1.6rem',color:'var(--primary)'}}>BANNER SHOP</h5>
            <p className="small opacity-75 mt-2">Your one-stop destination for premium banners, flex prints, and custom frames. Quality prints, fast delivery.</p>
            <button className="btn whatsapp-btn mt-2"
              onClick={()=>window.open(`https://wa.me/${6381217533}?text=Hi! I want to know more about your services.`,'_blank')}>
              <i className="bi bi-whatsapp me-2"></i>Chat With Us
            </button>
          </div>
          <div className="col-md-2">
            <h6 className="text-white mb-3 fw-semibold">Products</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/banner">Banners</Link></li>
              <li className="mb-2"><Link to="/flex">Flex Prints</Link></li>
              <li className="mb-2"><Link to="/frame">Frames</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-3 fw-semibold">Services</h6>
            <ul className="list-unstyled small opacity-75">
              <li className="mb-2">✅ Custom Size Printing</li>
              <li className="mb-2">✅ Same Day Delivery</li>
              <li className="mb-2">✅ Bulk Orders</li>
              <li className="mb-2">✅ Design Support</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-3 fw-semibold">Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><i className="bi bi-whatsapp me-2 text-success"></i>+91 6381217533</li>
              <li className="mb-2"><i className="bi bi-envelope me-2" style={{color:'var(--primary)'}}></i>shop@vinotharts.in</li>
              <li className="mb-2"><i className="bi bi-geo-alt me-2" style={{color:'var(--primary)'}}></i>Chennai, Tamil Nadu</li>
              <li className="mb-2"><i className="bi bi-clock me-2" style={{color:'var(--primary)'}}></i>9AM – 9PM (Mon–Sat)</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <p className="small opacity-50 mb-0">© 2026 Vinoth Art's . All rights reserved.</p>
          <p className="small opacity-50 mb-0">Banner • Flex • Frame — Custom Prints</p>
        </div>
      </div>
    </footer>
  )
}
