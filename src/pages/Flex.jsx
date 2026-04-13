import SizeConfigurator from '../components/SizeConfigurator'

const flexPresets = [
  { label: '5×10 ft', w: 5, h: 10 },
  { label: '6×12 ft', w: 6, h: 12 },
  { label: '8×12 ft', w: 8, h: 12 },
  { label: '10×15 ft', w: 10, h: 15 },
  { label: '12×20 ft', w: 12, h: 20 },
  { label: '20×30 ft', w: 20, h: 30 },
]
flexPresets[0].materials = ['Star Flex (280gsm)', 'Gold Star Flex', 'Backlit Flex', 'Matt Flex']

export default function Flex() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-4 py-2 mb-3" style={{background:'rgba(15,52,96,0.1)',color:'#0F3460',fontSize:'0.85rem'}}>
            🌟 Flex Printing
          </span>
          <h1 style={{fontFamily:'Bebas Neue',fontSize:'3.5rem'}}>FLEX PRINTS</h1>
          <p className="text-muted" style={{maxWidth:500,margin:'0 auto'}}>
            Heavy-duty outdoor flex printing for hoardings, signboards, shop fronts and large format displays.
          </p>
        </div>
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <h5 className="fw-bold mb-3">Flex Types Available</h5>
            <ul className="list-unstyled">
              {['Star Flex / Gold Star Flex','Backlit & Frontlit Flex','Matt & Gloss Finish','Sun Board Printing','Hoarding & Billboard Flex','High Resolution 720–1440 DPI'].map((item,i) => (
                <li key={i} className="mb-2 d-flex align-items-start gap-2">
                  <i className="bi bi-check-circle-fill mt-1" style={{color:'#0F3460'}}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-3" style={{background:'rgba(15,52,96,0.06)',border:'1px dashed #0F3460'}}>
              <h6 className="fw-bold mb-2">💡 Flex Size Guide</h6>
              <p className="small text-muted mb-0">
                Shopfront: 6×3 ft or custom<br/>
                Hoarding: 10×20 ft and above<br/>
                Auto rear: 3×1.5 ft<br/>
                We support sizes in <strong>feet OR inches</strong>!
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <SizeConfigurator productType="Flex Print" presets={flexPresets} pricePerSqFt={10} />
          </div>
        </div>
      </div>
    </div>
  )
}
