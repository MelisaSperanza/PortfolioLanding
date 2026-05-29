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

      <PlanetCard />

      <OrbitItem
        label="ABOUT"
        className="about"
      />

      <OrbitItem
        label="FEATURED APP"
        className="featured"
      />

      <OrbitItem
        label="PROJECTS"
        className="projects"
      />

      <OrbitItem
        label="CONTACT"
        className="contact"
      />

    </main>
  )
}