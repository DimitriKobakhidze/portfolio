
// import {AiFillGithub} from "react-icons/ai"
// import {MdMailOutline} from "react-icons/md"
// import {BsPhone} from "react-icons/bs"
import ContactData from "./ContactData"
import React from "react"
export default function Contact(){
    console.log(ContactData[0].icon)
    const icon = React.createElement(ContactData[0].icon,{className:"contact-icon"})

    const elements = ContactData.map(item =>{
        const icon = React.createElement(item.icon,{className:"contact-icon"})

        return(
            <div className="contact-item">
                {icon}
                <h4 className="contact-h4 knowledge-h4">{item.name}</h4>
                <h4 className="contact-info">{item.address}</h4>
                {item.link && <h4 className="contact-link" onClick={() => window.open(`${item.link}`,"_blank")}>Click to go</h4>}
            </div>
        )
    })


    return(
        <div className="contact-div" id="contact">
            <h3 className="knowledge-h3">Contact Me</h3>
            {elements}
        </div>
    )
}