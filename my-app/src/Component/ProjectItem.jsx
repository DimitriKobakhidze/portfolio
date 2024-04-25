import { BsCheck } from "react-icons/bs";

import useAppear from "../Hooks/useAppear";

const ProjectItem = ({ item, slideDireciton }) => {
  const { itemRef } = useAppear("slideX", { threshold: 0 });

  const liItems = item.details.map((item, id) => {
    return (
      <li key={id} className="project-item-detail">
        <BsCheck className="project-item-checkmark" />
        {item}
      </li>
    );
  });

  return (
    <div ref={itemRef} className={`project-item-${slideDireciton}`}>
      <img
        className="project-item-pic-div"
        src={item.pictureUrl}
        alt="project item"
      />
      <h3 className="project-item-name">{item.name}</h3>
      <p className="project-description">{item.about}</p>
      <div className="project-item-details-div">
        <ul className="project-details-ul">{liItems}</ul>
      </div>
      <div className="project-item-buttons-div">
        <button
          className="project-item-button"
          onClick={() => window.open(item.gitHub, "_blank")}
        >
          Github
        </button>
        {item.gitHubBackend && (
          <button
            className="project-item-button"
            onClick={() => window.open(item.gitHubBackend, "_blank")}
          >
            Github Backend
          </button>
        )}
        <button
          className="project-item-button visit-site"
          onClick={() => window.open(item.siteUrl, "_blank")}
        >
          Visit Site
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
