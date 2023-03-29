
import useAppear from "../Hooks/useAppear"


export default function About(){
    const { itemRef } = useAppear('slideX')
    return(
        <div ref={itemRef} className="about-div" id="about">
            <div className="about-header-div">
                <h1 className="about-h1">ABOUT ME</h1>
            </div>
            <div className="about-text-div">
                <h2 className="about-text-h2">What is my current state ?</h2>
                <p className="current-state-p">
                    I have currently <span>gathered knowledge</span> about front-end technologies, built some <span>projects</span> from scratch using them, <span>gained experience</span> from it, and mostly <span>cleared out questions</span> that I came across during the learning phase. Now I think I'm ready to <span>try real work</span> type problem solving and work with a <span>group of people.</span>
                </p>
                <h2 className="about-text-h2">What are my future plans ?</h2>
                <p className="future-p">
                    As I said I'm looking forward to joining a software development company to <span>try out an ecosystem</span> of a real job, follow and <span>learn from more experienced developers</span>, and what's most important to <span>analyze</span> and see which part of <span>my knowledge</span> is <span>more important</span> in the development field and what I need to <span>develop more</span> to became successful React developer. Also, I'm aiming to become a <span>full-stack</span> developer as I have pretty good knowledge of python, but that plan is for the far future.
                </p>
            </div>
        </div>
    )
}