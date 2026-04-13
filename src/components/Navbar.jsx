import { Link, useLocation } from 'react-router-dom'

const WHATSAPP_NUMBER = '6381217533' 

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'active' : ''

  const openWhatsApp = () => {
    window.open(`https://wa.me/${6381217533}?text=Hi! I'm interested in your printing services.`, '_blank')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-printer-fill me-2" style={{color:'var(--primary)'}}></i>
          VINOTH ART'S
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-lg-2">
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/')}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/banner')}`} to="/banner">Banner</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/flex')}`} to="/flex">Flex</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/frame')}`} to="/frame">Frame</Link>
            </li>
          </ul>
          <button className="btn whatsapp-btn" onClick={openWhatsApp}>
            <i className="bi bi-whatsapp me-2"></i>WhatsApp Us
          </button>
        </div>
      </div>
    </nav>
  )
}
