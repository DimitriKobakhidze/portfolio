import { BsPatchCheckFill } from "react-icons/bs";

import useAppear from "../Hooks/useAppear";

const frontendKnowledge = [
  { title: "HTML", img: "/html-icon.png" },
  { title: "CSS", img: "/css-icon.png" },
  { title: "Tailwind", img: "/tailwind-icon.png" },
  { title: "Javascript", img: "/js-icon.png" },
  { title: "ReactJS", img: "/react-icon.png" },
  { title: "Redux", img: "/redux-icon.png" },
  { title: "React Query", img: "/reactQuery-icon.png" },
  { title: "Zustand", img: "/zustand-icon.png" },
];
const backendKnowledge = [
  { title: "NodeJS", img: "/node-icon.png" },
  { title: "Express", img: "/express-icon.png" },
  { title: "Mongoose", img: "/mongoose-icon.png" },
  { title: "MongoDB", img: "/mongoDB-icon.png" },
  { title: "MySQL", img: "/mySQL-icon.png" },
];
export default function Knowledge() {
  const { itemRef } = useAppear("slideX", { threshold: 0 });
  const { itemRef: itemRef2 } = useAppear("slideY", { threshold: 0 });
  return (
    <div className="knowledge-main-div" id="knowledge">
      <h4 className="knowledge-h4">What Skills I Have</h4>
      <h3 className="knowledge-h3">My Knowledge</h3>
      <div className="knowledge-div">
        <div ref={itemRef} className="knowledge-inner-div-left">
          <h3 className="knowledge-h2">Frontend Development</h3>
          <div className="knowledge-items-div">
            {frontendKnowledge.map((item) => (
              <div key={item.title} className="knowledge-item">
                {item.img ? (
                  <img src={item.img} alt="item icon" />
                ) : (
                  <BsPatchCheckFill className="knowledge-check" />
                )}
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div ref={itemRef2} className="knowledge-inner-div-right">
          <h3 className="knowledge-h2">Backend Development</h3>
          <div className="knowledge-items-div">
            {backendKnowledge.map((item) => (
              <div key={item.title} className="knowledge-item">
                {item.img ? (
                  <img src={item.img} alt="item icon" />
                ) : (
                  <BsPatchCheckFill className="knowledge-check" />
                )}
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
