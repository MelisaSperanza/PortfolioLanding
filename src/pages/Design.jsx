import '../styles/projects.css'
import '../styles/design.css'
import { Link } from "react-router-dom";
import ProjectSpaceBackground from '../components/ProjectSpaceBackground'
import StarsLayer from '../components/StarsLayer'
import SatelliteContactCard from '../components/SatelliteContactCard'
import UxDesignCard from '../components/UxDesignCard';
import { Video1Card } from "../components/Video1Card";

export default function Design() {
    return (
        <main className="design">

            <ProjectSpaceBackground />


                
           <div className="video1-card"> 

                <a
                href="https://youtu.be/kJwahxzK8AA"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Video1Card /></a>

            </div>
            
            <div className="uxdesign-card">
               <a
                href="https://www.figma.com/proto/G5NziaDMRrsxPxw3g1lqsA/Menu-Viewing---Ordering-App?node-id=562-6323&starting-point-node-id=562%3A6312&t=pac0IlM3wcm03RJS-1"
                target="_blank"
                rel="noopener noreferrer"
                >
                <UxDesignCard /></a>

            </div>

            <div className="satellite-card">
                <Link to="/contact">
                    <SatelliteContactCard/>
                
                </Link>

            </div>

        

        </main>
    )
}