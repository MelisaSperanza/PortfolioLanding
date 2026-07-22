import designPixel from '../assets/designPixel.png'
import '../styles/projects.css'


export default function DesignCard() {
  return (
    <div className="design-card">

      <img
        src={designPixel}
        alt="planet"
        className="design-image"
      />

      <h1 className="design-card-title">
        Design & Content
      </h1>

    </div>
  )
}