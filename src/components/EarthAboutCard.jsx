import tierraPixel from '../assets/tierraPixel.png'
import '../styles/home.css'


export default function EarthCard() {
  return (
    <div className="earth-card">

      <img
        src={tierraPixel}
        alt="earth"
        className="earth-image"
      />

      <h1 className="satellite-label">
        ABOUT
      </h1>

    </div>
  )
}