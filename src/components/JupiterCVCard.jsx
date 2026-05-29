import jupiterPixel from '../assets/jupiterPixel.png'
import '../styles/home.css'


export default function JupiterCVCard() {
  return (
    <div className="jupiter-card">

      <img
        src={jupiterPixel}
        alt="jupiter-cv"
        className="jupiter-image"
      />

      <h1 className="satellite-label">
        CV
      </h1>

    </div>
  )
}