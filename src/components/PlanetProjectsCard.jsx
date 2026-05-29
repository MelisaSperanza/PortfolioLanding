import planetaPixel from '../assets/planetaPixel.png'
import '../styles/home.css'


export default function PlanetCard() {
  return (
    <div className="planet-card">

      <img
        src={planetaPixel}
        alt="planet"
        className="planet-image"
      />

      <h1 className="planet-title">
        PROJECTS
      </h1>

    </div>
  )
}