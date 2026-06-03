import '../styles/projects.css'
import { Link } from "react-router-dom";
import ProjectSpaceBackground from '../components/ProjectSpaceBackground'
import StarsLayer from '../components/StarsLayer'
import SatelliteContactCard from '../components/SatelliteContactCard'
import SeeCodeCard from '../components/SeeCodeCard'
import AstronautCard from '../components/AstronautCard'


export default function Projects() {
    return (
        <main className="projects">

            <ProjectSpaceBackground />

            <StarsLayer />
                
            <div className="see-code-card">
                <a
                    href="https://github.com/MelisaSperanza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SeeCodeCard/>
                </a>
            </div>

            <div className="astronaut-card">
                <a
                    href="https://super-pasca-612521.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AstronautCard/>
                
                </a>
                    
       

            </div>

            <div className="satellite-card satellite-image">
                <Link to="/contact">
                    <SatelliteContactCard/>
                
                </Link>

            </div>

        

        </main>
    )
}