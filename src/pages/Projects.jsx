import '../styles/projects.css'
import { Link } from "react-router-dom";
import ProjectSpaceBackground from '../components/ProjectSpaceBackground'
import StarsLayer from '../components/StarsLayer'
import SatelliteContactCard from '../components/SatelliteContactCard'
import PlanetVehiculosCard from '../components/PlanetVehiculosCard'


export default function Projects() {
    return (
        <main className="projects">

            <ProjectSpaceBackground />

            <StarsLayer />

            <div className="planet-vehiculos-card">
         
           <Link to="/vehiculosapp">
               
                <PlanetVehiculosCard />
             </Link>
            </div>
                
      

            <div className="satellite-card satellite-image">
                <Link to="/contact">
                    <SatelliteContactCard/>
                
                </Link>

            </div>

        

        </main>
    )
}