import SizeConfigurator from '../components/SizeConfigurator'

const framePresets = [
  { label: '12×8 inch', w: 12, h: 8 },
  { label: '12×12 inch', w: 12, h: 12 },
  { label: '12×24 inch', w: 12, h: 24 },
  { label: '24×36 inch', w: 24, h: 36 },
  { label: 'A3 (12×17)', w: 12, h: 17 },
  { label: '18×24 inch', w: 18, h: 24 },
]
framePresets[0].materials = ['Wooden Frame', 'Metal Frame', 'Acrylic Frame', 'Shadow Box']

export default function Frame() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-4 py-2 mb-3" style={{background:'rgba(46,125,50,0.1)',color:'#2E7D32',fontSize:'0.85rem'}}>
            🖼 Frame Shop
          </span>
          <h1 style={{fontFamily:'Bebas Neue',fontSize:'3.5rem'}}>CUSTOM FRAMES</h1>
          <p className="text-muted" style={{maxWidth:500,margin:'0 auto'}}>
            Photo frames, certificate frames, poster frames and custom shadow boxes.
            Specify size in exact <strong>inches</strong> for perfect fit!
          </p>
        </div>
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <h5 className="fw-bold mb-3">Frame Options</h5>
            <ul className="list-unstyled">
              {['Wooden Photo Frames','Metal & Aluminium Frames','Acrylic/Glass Frames','Certificate & Diploma Frames','Shadow Box Frames','Custom Size in Inches / Centimeters'].map((item,i) => (
                <li key={i} className="mb-2 d-flex align-items-start gap-2">
                  <i className="bi bi-check-circle-fill mt-1" style={{color:'#2E7D32'}}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-3" style={{background:'rgba(46,125,50,0.06)',border:'1px dashed #2E7D32'}}>
              <h6 className="fw-bold mb-2">💡 Frame Size Tips</h6>
              <p className="small text-muted mb-0">
                Wallet photo: 3.5×5 in<br/>
                Standard photo: 4×6, 5×7, 8×10 in<br/>
                Certificate: 8.5×11 in (A4)<br/>
                Use <strong>inch unit</strong> for frames for precision!
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <SizeConfigurator productType="Frame" presets={framePresets} pricePerSqFt={2.5} />
          </div>
        </div>
      </div>
    </div>
  )
}
