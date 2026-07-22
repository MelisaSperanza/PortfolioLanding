import video1Pixel from '../assets/video1Pixel.png'
import '../styles/projects.css'
import '../styles/design.css'


export function Video1Card() {
  return (
    <div className="video1-card">

      <img
        src={video1Pixel}
        alt="planet"
        className="video1-image"
      />

      <h1 className="video1-card-title">
        Concept Video
      </h1>

    </div>
  )
}