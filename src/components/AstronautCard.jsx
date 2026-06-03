import astronautPixel from '../assets/astronautPixel.png'
import '../styles/projects.css'


export default function AstronautCard() {
  return (
    <div className="astronaut-card">

      <img
        src={astronautPixel}
        alt="astronaut"
        className="astronaut-image"
      />

      <h1 className="astronaut-card-title">
        LIVE DEMO
      </h1>
      
    </div>

  )
}