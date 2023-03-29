import React from "react"

import useAppear from "../Hooks/useAppear"
import ContactItem from "./ContactItem"
import ContactData from "./ContactData"

export default function Contact(){
    // const { itemRef } = useAppear('slideX')

    // const elements = ContactData.map((item,id) =>{
    //     const icon = React.createElement(item.icon,{className:"contact-icon"})

    //     return(
    //         <div key={id} className="contact-item">
    //             {icon}
    //             <h4 className="contact-h4 knowledge-h4">{item.name}</h4>
    //             <h4 className="contact-info">{item.address}</h4>
    //             {item.link && <h4 className="contact-link" onClick={() => window.open(`${item.link}`,"_blank")}>Click to go</h4>}
    //         </div>
    //     )
    // })


    return(
        <div  className="contact-div" id="contact">
            <h3 className="knowledge-h3">Contact Me</h3>
            {ContactData.map((item,id) => <ContactItem key={id} item={item}/>)}
        </div>
    )
}