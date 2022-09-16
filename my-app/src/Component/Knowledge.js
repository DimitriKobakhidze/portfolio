import {BsPatchCheckFill} from "react-icons/bs"


export default function Knowledge(){
    return(
        <div className="knowledge-main-div" id="knowledge">
            <h4 className="knowledge-h4">What Skills I Have</h4>
            <h3 className="knowledge-h3">My Knowledge</h3>
            <div className="knowledge-div">
                <div className="knowledge-inner-div">
                    <h3 className="knowledge-h2">Frontend Development</h3>
                    <div className="knowledge-items-div">
                        <div className="knowledge-item">
                            <BsPatchCheckFill className="knowledge-check" />
                            <h3>HTML</h3>
                        </div>
                        <div className="knowledge-item">
                            <BsPatchCheckFill className="knowledge-check" />
                            <h3>CSS</h3>
                        </div>
                        <div className="knowledge-item">
                            <BsPatchCheckFill className="knowledge-check" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="knowledge-item">
                            <BsPatchCheckFill className="knowledge-check" />
                            <h3>React</h3>
                        </div>
                    </div>
                </div>   
                <div className="knowledge-inner-div">
                    <h3 className="knowledge-h2">Backend Development</h3>
                    <div className="knowledge-items-div">
                        <div className="knowledge-item">
                            <BsPatchCheckFill className="knowledge-check" />
                            <h3>Python</h3>
                        </div>
                        <div className="knowledge-item">
                            <BsPatchCheckFill className="knowledge-check" />
                            <h3>Oracle SQL</h3>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}