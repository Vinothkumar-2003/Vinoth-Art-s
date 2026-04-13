import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '916381217533'

const services = [
  {
    to: '/banner',
    icon: '🖼️',
    title: 'Banners',
    desc: 'Vinyl & cloth banners for events, shops, and promotions. Any size, any design.',
    badge: 'From ₹8/sqft',
    color: '#FF6B00'
  },
  {
    to: '/flex',
    icon: '🌟',
    title: 'Flex Prints',
    desc: 'Durable outdoor flex printing for hoardings, signboards, and storefronts.',
    badge: 'From ₹10/sqft',
    color: '#0F3460'
  },
  {
    to: '/frame',
    icon: '🖼',
    title: 'Frames',
    desc: 'Photo frames, certificate frames, and custom framing in any dimension.',
    badge: 'From ₹199',
    color: '#2E7D32'
  }
]

const stats = [
  { num: '5000+', label: 'Orders Done' },
  { num: '500+', label: 'Happy Customers' },
  { num: '24hr', label: 'Fast Delivery' },
  { num: '100%', label: 'Quality Assured' }
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="fade-up">
                <span className="hero-badge">🏆 Chennai's #1 Print Shop</span>
              </div>
              <h1 className="hero-title fade-up-delay">
                PRINT <span>BIG.</span><br />PRINT <span>BOLD.</span>
              </h1>
              <p className="hero-subtitle fade-up-delay2 my-4" style={{maxWidth:'500px'}}>
                Custom banners, flex prints & frames — any size, any quantity.<br />
                Order via WhatsApp and get delivery in 24 hours!
              </p>
              <div className="d-flex flex-wrap gap-3 fade-up-delay2">
                <button className="hero-cta"
                  onClick={()=>window.open(`https://wa.me/${6381217533}?text=Hi! I want to place an order.`,'_blank')}>
                  <i className="bi bi-whatsapp me-2"></i>Order on WhatsApp
                </button>
                <Link to="/banner" className="btn btn-outline-light px-4 rounded-pill">
                  View Products
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <div style={{fontSize:'10rem',filter:'drop-shadow(0 8px 32px rgba(255,107,0,0.3))'}}>🖨️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-4" style={{background:'var(--primary)'}}>
        <div className="container">
          <div className="row g-0">
            {stats.map((s,i) => (
              <div key={i} className="col-6 col-md-3 text-center text-white py-3">
                <div style={{fontFamily:'Bebas Neue',fontSize:'2.2rem'}}>{s.num}</div>
                <div className="small opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 mt-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{fontFamily:'Bebas Neue',fontSize:'3rem'}}>OUR SERVICES</h2>
            <p className="text-muted">Premium quality printing for every need</p>
          </div>
          <div className="row g-4">
            {services.map((s,i) => (
              <div key={i} className="col-md-4">
                <Link to={s.to} className="text-decoration-none">
                  <div className="service-card card h-100 position-relative">
                    <div className="card-body p-4 text-center">
                      <div className="mb-3" style={{fontSize:'4rem'}}>{s.icon}</div>
                      <h4 style={{fontFamily:'Bebas Neue',fontSize:'2rem',color:s.color}}>{s.title}</h4>
                      <p className="text-muted small">{s.desc}</p>
                      <span className="badge mt-2 px-3 py-2 rounded-pill"
                        style={{background:s.color,color:'white',fontSize:'0.85rem'}}>
                        {s.badge}
                      </span>
                    </div>
                    <div className="card-footer bg-transparent border-0 text-center pb-4">
                      <span style={{color:s.color,fontWeight:600,fontSize:'0.9rem'}}>
                        Customize & Order <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-5" style={{background:'var(--light-bg)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{fontFamily:'Bebas Neue',fontSize:'2.8rem'}}>WHY CHOOSE US?</h2>
          </div>
          <div className="row g-4">
            {[
              {icon:'bi-rulers',title:'Custom Dimensions',desc:'Enter exact inches or feet. We print any size you need.'},
              {icon:'bi-whatsapp',title:'WhatsApp Orders',desc:'No forms, no hassle. Just message us and we handle it.'},
              {icon:'bi-truck',title:'Fast Delivery',desc:'Same-day and next-day delivery within Chennai.'},
              {icon:'bi-star-fill',title:'Premium Quality',desc:'Vibrant colors, durable materials, sharp prints.'},
            ].map((f,i) => (
              <div key={i} className="col-sm-6 col-md-3 text-center">
                <div className="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle"
                  style={{width:70,height:70,background:'rgba(255,107,0,0.1)'}}>
                  <i className={`bi ${f.icon}`} style={{fontSize:'1.8rem',color:'var(--primary)'}}></i>
                </div>
                <h6 className="fw-bold mb-1">{f.title}</h6>
                <p className="text-muted small">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5" style={{background:'var(--secondary)',color:'white'}}>
        <div className="container text-center">
          <h2 style={{fontFamily:'Bebas Neue',fontSize:'3rem'}}>READY TO PRINT?</h2>
          <p className="opacity-75 mb-4">Send us your dimensions on WhatsApp and get an instant quote!</p>
          <button className="btn whatsapp-btn btn-lg px-5"
            onClick={()=>window.open(`https://wa.me/${916381217533}?text=Hi! I want a quote for printing.`,'_blank')}>
            <i className="bi bi-whatsapp me-2"></i>Get Instant Quote
          </button>
        </div>
      </section>
    </>
  )
}
