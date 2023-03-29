
import useAppear from "../Hooks/useAppear"
import {BsPatchCheckFill} from "react-icons/bs"


export default function Knowledge(){
    const { itemRef } = useAppear('slideX')
    const { itemRef: itemRef2} = useAppear('slideX')
    return(
        <div className="knowledge-main-div" id="knowledge">
            <h4 className="knowledge-h4">What Skills I Have</h4>
            <h3 className="knowledge-h3">My Knowledge</h3>
            <div className="knowledge-div">
                <div ref={itemRef} className="knowledge-inner-div-left">
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
                <div ref={itemRef2} className="knowledge-inner-div-right">
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