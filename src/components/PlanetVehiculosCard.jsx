import vehicleAppPixel from '../assets/vehicleAppPixel.png'
import '../styles/home.css'


export default function PlanetCard() {
  return (
    <div className="planet-vehiculos-card">

      <img
        src={vehicleAppPixel}
        alt="planet"
        className="planet-vehiculos-image"
      />

      <h1 className="planet-vehiculos-label">
        Vehicle Management App
      </h1>

    </div>
  )
}