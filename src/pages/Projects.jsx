import '../styles/projects.css'
import { Link } from "react-router-dom";
import ProjectSpaceBackground from '../components/ProjectSpaceBackground'
import StarsLayer from '../components/StarsLayer'
import SatelliteContactCard from '../components/SatelliteContactCard'
import PlanetVehiculosCard from '../components/PlanetVehiculosCard'
import UxDesignCard from '../components/UxDesignCard';


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
                
            <div className="uxdesign-card">

             <a
                href="https://www.figma.com/proto/G5NziaDMRrsxPxw3g1lqsA/Menu-Viewing---Ordering-App?node-id=562-6323&starting-point-node-id=562%3A6312&t=pac0IlM3wcm03RJS-1"
                target="_blank"
                rel="noopener noreferrer"
            >  <UxDesignCard /></a>
            </div>

            <div className="satellite-card">
                <Link to="/contact">
                    <SatelliteContactCard/>
                
                </Link>

            </div>

        

        </main>
    )
}