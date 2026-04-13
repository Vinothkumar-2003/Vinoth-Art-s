import SizeConfigurator from '../components/SizeConfigurator'

const bannerPresets = [
  { label: '10×8 ft', w: 10, h: 8 },
  { label: '10×15 ft', w: 10, h: 15 },
  { label: '10×20 ft', w: 10, h: 20 },
  { label: '10×10 ft', w: 10, h: 10 },
  { label: '20×15 ft', w: 20, h: 15 },
  { label: '15×30 ft', w: 15, h: 30 },
]
bannerPresets[0].materials = ['Vinyl Banner', 'Cloth Banner', 'Mesh Banner', 'Retractable']

export default function Banner() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-4 py-2 mb-3" style={{background:'rgba(255,107,0,0.12)',color:'var(--primary)',fontSize:'0.85rem'}}>
            🖼️ Banner Printing
          </span>
          <h1 style={{fontFamily:'Bebas Neue',fontSize:'3.5rem'}}>CUSTOM BANNERS</h1>
          <p className="text-muted" style={{maxWidth:500,margin:'0 auto'}}>
            Premium vinyl, cloth & mesh banners for events, shops, promotions & more.
            Any size in inches or feet — we print it!
          </p>
        </div>
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <h5 className="fw-bold mb-3">What We Offer</h5>
            <ul className="list-unstyled">
              {['Vinyl Banners (Outdoor & Indoor)','Cloth Banners','Mesh Banners','Retractable Roll-up Banners','Custom Grommets & Stands','Waterproof & UV Resistant Prints'].map((item,i) => (
                <li key={i} className="mb-2 d-flex align-items-start gap-2">
                  <i className="bi bi-check-circle-fill mt-1" style={{color:'var(--primary)'}}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-3" style={{background:'rgba(255,107,0,0.06)',border:'1px dashed var(--primary)'}}>
              <h6 className="fw-bold mb-2">💡 Size Tips</h6>
              <p className="small text-muted mb-0">
                Standard banner: 10×10 ft<br/>
                Event backdrop: 8×10 ft<br/>
                Shop sign: 2×6 ft or custom<br/>
                Can also enter in <strong>inches</strong> for precision!
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <SizeConfigurator productType="Banner" presets={bannerPresets} pricePerSqFt={8} />
          </div>
        </div>
      </div>
    </div>
  )
}
