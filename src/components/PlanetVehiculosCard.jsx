import planetaPixel from '../assets/planetaPixel.png'
import '../styles/home.css'


export default function PlanetCard() {
  return (
    <div className="planet-vehiculos-card">

      <img
        src={planetaPixel}
        alt="planet"
        className="planet-vehiculos-image"
      />

      <h1 className="planet-vehiculos-label">
        Sales Management App
      </h1>

    </div>
  )
}