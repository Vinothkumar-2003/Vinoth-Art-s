import { useState } from 'react'

const WHATSAPP_NUMBER = '916381217533'

export default function SizeConfigurator({ productType = 'Banner', presets = [], pricePerSqFt = 8 }) {
  const [width, setWidth] = useState(4)
  const [height, setHeight] = useState(3)
  const [unit, setUnit] = useState('ft')
  const [qty, setQty] = useState(1)
  const [activePreset, setActivePreset] = useState(null)
  const [material, setMaterial] = useState(presets[0]?.materials?.[0] || '')

  const toFeet = (val) => unit === 'inch' ? val / 12 : val
  const area = toFeet(width) * toFeet(height)
  const pricePerUnit = Math.max(area * pricePerSqFt, 8)
  const totalPrice = (pricePerUnit * qty).toFixed(0)

  const applyPreset = (preset) => {
    setUnit('ft')
    setWidth(preset.w)
    setHeight(preset.h)
    setActivePreset(preset.label)
  }

  const orderViaWhatsApp = () => {
    const msg = `Hi! I want to order:
📌 Product: ${productType}
📐 Size: ${width} x ${height} ${unit}
📦 Quantity: ${qty}
${material ? `🖨️ Material: ${material}` : ''}
💰 Estimated Total: ₹${totalPrice}
Please confirm availability.`
    window.open(`https://wa.me/${6381217533}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="configurator-card p-4">
      <h4 className="mb-1" style={{fontFamily:'Bebas Neue',fontSize:'1.8rem',letterSpacing:'1px'}}>
        <i className="bi bi-rulers me-2" style={{color:'var(--primary)'}}></i>
        Customize Your {productType}
      </h4>
      <p className="text-muted small mb-4">Set exact dimensions — inches or feet</p>

      {/* Unit Toggle */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <span className="fw-600 small">Unit:</span>
        <div className="btn-group" role="group">
          {['ft','inch'].map(u => (
            <button key={u} className={`btn btn-sm ${unit===u ? 'btn-dark' : 'btn-outline-secondary'}`} onClick={()=>setUnit(u)}>
              {u === 'ft' ? 'Feet' : 'Inches'}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Sizes */}
      {presets.length > 0 && (
        <div className="mb-4">
          <p className="small fw-semibold text-uppercase text-muted mb-2">Quick Presets</p>
          <div className="d-flex flex-wrap gap-2">
            {presets.map(p => (
              <button key={p.label} className={`size-preset ${activePreset===p.label?'active':''}`} onClick={()=>applyPreset(p)}>
                {p.label} <span className="text-muted small">({p.w}×{p.h} ft)</span>
              </button>
            ))}
            <button className={`size-preset ${activePreset==='custom'?'active':''}`} onClick={()=>setActivePreset('custom')}>
              ✏️ Custom
            </button>
          </div>
        </div>
      )}

      {/* Sliders */}
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold small">Width ({unit}) — {width}</label>
          <input type="range" className="form-range custom-range" min="1" max={unit==='ft'?100:1200}
            value={width} onChange={e=>{setWidth(+e.target.value);setActivePreset('custom')}} />
          <div className="d-flex justify-content-between small text-muted">
            <span>1</span><span>{unit==='ft'?100:1200} {unit}</span>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold small">Height ({unit}) — {height}</label>
          <input type="range" className="form-range custom-range" min="1" max={unit==='ft'?50:600}
            value={height} onChange={e=>{setHeight(+e.target.value);setActivePreset('custom')}} />
          <div className="d-flex justify-content-between small text-muted">
            <span>1</span><span>{unit==='ft'?50:600} {unit}</span>
          </div>
        </div>
      </div>

      {/* Number inputs for precise entry */}
      <div className="row g-3 mb-3">
        <div className="col-6 col-md-3">
          <label className="form-label small fw-semibold">Width</label>
          <div className="input-group input-group-sm">
            <input type="number" className="form-control" value={width} min="1"
              onChange={e=>{setWidth(+e.target.value);setActivePreset('custom')}} />
            <span className="input-group-text">{unit}</span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <label className="form-label small fw-semibold">Height</label>
          <div className="input-group input-group-sm">
            <input type="number" className="form-control" value={height} min="1"
              onChange={e=>{setHeight(+e.target.value);setActivePreset('custom')}} />
            <span className="input-group-text">{unit}</span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <label className="form-label small fw-semibold">Quantity</label>
          <input type="number" className="form-control form-control-sm" value={qty} min="1"
            onChange={e=>setQty(Math.max(1,+e.target.value))} />
        </div>
        {presets[0]?.materials && (
          <div className="col-6 col-md-3">
            <label className="form-label small fw-semibold">Material</label>
            <select className="form-select form-select-sm" value={material} onChange={e=>setMaterial(e.target.value)}>
              {presets[0].materials.map(m=><option key={m}>{m}</option>)}
            </select>
          </div>
        )}
      </div>

      {/* Price Display */}
      <div className="price-display mt-4">
        <div className="row align-items-center">
          <div className="col">
            <div className="small opacity-75 mb-1">Area: {area.toFixed(2)} sq.ft • ₹{pricePerSqFt}/sq.ft</div>
            <div className="d-flex align-items-baseline gap-2">
              <span className="price-amount">₹{totalPrice}</span>
              <span className="opacity-75 small">for {qty} pc{qty>1?'s':''}</span>
            </div>
            <div className="small opacity-60 mt-1">*Final price confirmed via WhatsApp</div>
          </div>
          <div className="col-auto">
            <button className="btn whatsapp-btn btn-lg" onClick={orderViaWhatsApp}>
              <i className="bi bi-whatsapp me-2"></i>Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
