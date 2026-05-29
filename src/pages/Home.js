import '../styles/home.css'

import SpaceBackground from '../components/SpaceBackground'
import StarsLayer from '../components/StarsLayer'
import PlanetProjectsCard from '../components/PlanetProjectsCard'
import OrbitItem from '../components/OrbitItem'
import SatelliteContactCard from '../components/SatelliteContactCard'
import EarthAboutCard from '../components/EarthAboutCard'
import JupiterCVCard from '../components/JupiterCVCard'

export default function Home() {
  return (
    <main className="home">

        <SpaceBackground />

        <StarsLayer />

            
        <div className="planet-card">
            <PlanetProjectsCard />
        </div>

        <div className="satellite-card">
            <SatelliteContactCard/> 
        </div>

        <div className="earth-card">
            <EarthAboutCard/>
        </div>

        <div className="jupiter-card">
            <JupiterCVCard/>
        </div>

    
     
    </main>
  )
}