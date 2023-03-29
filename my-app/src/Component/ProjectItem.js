
import useAppear from "../Hooks/useAppear"

const ProjectItem = ({ item, slideDireciton }) => {
    const { itemRef } = useAppear('slideX',{threshold: 0})

    const liItems = item.details.map((item,id) =>{
        return(
            <li key={id} className="project-item-detail">{item}</li>
        )
    })
    const backgroundStyle ={
        backgroundImage: `url(${item.pictureUrl})`
    }
    return (
        <div ref={itemRef} className={`project-item-${slideDireciton}`}>
            <div className="project-item-pic-div" style={backgroundStyle}></div>
            <h3 className="project-item-name">{item.name}</h3>
            <p className="project-description">{item.about}</p>
            <div className="project-item-details-div">
                <ul className="project-details-ul">
                    {liItems}
                </ul>
            </div>
            <div className="project-item-buttons-div">
                <button 
                    className="project-item-button"
                    onClick={() => window.open(item.gitHub,"_blank")}
                >GitHub</button>
                <button 
                    className="project-item-button visit-site"
                    onClick={() => window.open(item.siteUrl,"_blank")}
                >Visit Site</button>
            </div>
        </div>
    )
}

export default ProjectItem