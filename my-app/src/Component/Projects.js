import React from "react";
import projectsData from "./ProjectData"

export default function Projects(){
    console.log(projectsData)

    const itemElements = projectsData.map((item,id) =>{
        const liItems = item.details.map((item,id) =>{
            return(
                <li key={id} className="project-item-detail">{item}</li>
            )
        })

        const backgroundStyle ={
            backgroundImage: `url(${item.pictureUrl})`
        }

        return(
            <div key={id} className="project-item">
                <div className="project-item-pic-div" style={backgroundStyle}></div>
                <h3 className="project-item-name">{item.name}</h3>
                <p className="project-description">{item.about}</p>
                <div className="project-item-details-div">
                    <ul className="project-details-ul">
                        {liItems}
                    </ul>
                </div>
                <div className="project-item-buttons-div">
                    <button className="project-item-button">GitHub</button>
                    <button 
                        className="project-item-button visit-site"
                        onClick={() => window.open(item.siteUrl,"_blank")}
                    >Visit Site</button>
                </div>
            </div>
        )
    })

    return(
        <div className="knowledge-main-div" id="projects">
            <h4 className="knowledge-h4">What have I done</h4>
            <h3 className="knowledge-h3">My Projects</h3>
            <div className="projects-div">
                {itemElements}
            </div>
        </div>
    )
}