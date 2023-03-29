
import useAppear from "../Hooks/useAppear"
import projectsData from "./ProjectData"
import ProjectItem from "./ProjectItem"

export default function Projects(){

    return(
        <div className="projects-main-div" id="projects">
            <h4 className="knowledge-h4">What have I done</h4>
            <h3 className="knowledge-h3">My Projects</h3>
            <div  className="projects-div">
                {projectsData.map((item,id) => 
                    <ProjectItem 
                        key={id} 
                        item={item} 
                        slideDireciton={id % 2 === 0 ? "left" : "right"}
                    />)
                }
            </div>
        </div>
    )
}