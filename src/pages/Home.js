import '../styles/home.css'

import { Link } from "react-router-dom";

import SpaceBackground from '../components/SpaceBackground'
import StarsLayer from '../components/StarsLayer'
import PlanetProjectsCard from '../components/PlanetProjectsCard'
import SatelliteContactCard from '../components/SatelliteContactCard'
import EarthAboutCard from '../components/EarthAboutCard'
import JupiterCVCard from '../components/JupiterCVCard'


export default function Home() {
  return (
    <main className="home">

        <SpaceBackground />

        <StarsLayer />

            
        <div className="planet-card">
         
            <a
                href="https://github.com/MelisaSperanza"
                target="_blank"
                rel="noopener noreferrer"
            >
                <PlanetProjectsCard />
            </a>
        </div>

        <div className="satellite-card">
             <a
                href="https://www.linkedin.com/in/melisa-speranza/"
                target="_blank"
                rel="noopener noreferrer"
            >
                  <SatelliteContactCard/> 
            </a>
              
           
        </div>

        <div className="earth-card">
            <Link to="/about">
                <EarthAboutCard/>
            </Link>
        </div>

        <div className="jupiter-card">
            <Link to="/cv">
                <JupiterCVCard/>
            </Link>
        </div>

    
     
    </main>
  )
}