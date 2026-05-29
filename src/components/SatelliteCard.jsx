import satellitePixel from '../assets/satellitePixel.png'
import '../styles/home.css'


export default function SatelliteCard() {
  return (
    <div className="satellite-card">

      <img
        src={satellitePixel}
        alt="satellite"
        className="satellite-image"
      />


    </div>

    

  )
}