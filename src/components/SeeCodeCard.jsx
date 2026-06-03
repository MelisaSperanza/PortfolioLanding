import computerPixel from '../assets/computerPixel.png'
import '../styles/projects.css'


export default function SeeCodeCard() {
  return (
    <div className="see-code-card">

      <img
        src={computerPixel}
        alt="computer"
        className="see-code-card-image"
      />

      <h1 className="see-code-card-title">
        SEE CODE
      </h1>
      
    </div>

  )
}