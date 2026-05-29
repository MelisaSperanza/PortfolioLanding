import planetaPixel from '../assets/planetaPixel.png'
/*corregir css 29/5 12.06am melisa*/
export default function PlanetCard() {
  return (
    <div className="moon-card">

      <img
        src={planetaPixel}
        alt="planet"
        className="moon-image"
      />

      <h1 className="moon-title">
        PROJECTS
      </h1>

    </div>
  )
}