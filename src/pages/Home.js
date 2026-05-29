import '../styles/home.css'

import SpaceBackground from '../components/SpaceBackground'
import StarsLayer from '../components/StarsLayer'
import PlanetCard from '../components/PlanetCard'
import OrbitItem from '../components/OrbitItem'

export default function Home() {
  return (
    <main className="home">

      <SpaceBackground />

      <StarsLayer />

     
  <div className="planet-card">
     <PlanetCard />
  </div>


<div className="orbit-container">
      <OrbitItem
        label="CV"
        className="cv"
      />

      <OrbitItem
        label="ABOUT"
        className="about"
      />

      <OrbitItem
        label="CONTACT"
        className="contact"
      />
</div>
    </main>
  )
}