import uxDesignPixel from '../assets/uxDesignPixel.png'
import '../styles/projects.css'


export default function UxDesignCard() {
  return (
    <div className="uxdesign-card">

      <img
        src={uxDesignPixel}
        alt="planet"
        className="uxdesign-image"
      />

      <h1 className="uxdesign-card-title">
        UX Design
      </h1>

    </div>
  )
}