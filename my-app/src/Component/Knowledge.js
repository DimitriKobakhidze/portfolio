import { BsPatchCheckFill } from "react-icons/bs";

import useAppear from "../Hooks/useAppear";
import RoundSpinner from "./ReUse/RoundSpinner";

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
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <h3>ReactJS</h3>
            </div>
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <h3>Redux</h3>
            </div>
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <h3>React Query</h3>
            </div>
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <h3>Zustand</h3>
            </div>
          </div>
        </div>
        <div ref={itemRef2} className="knowledge-inner-div-right">
          <h3 className="knowledge-h2">Backend Development</h3>
          <div className="knowledge-items-div">
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <RoundSpinner />
              <h3>ExpressJS</h3>
            </div>
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <RoundSpinner />
              <h3>Mongoose</h3>
            </div>
            <div className="knowledge-item">
              <BsPatchCheckFill className="knowledge-check" />
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
