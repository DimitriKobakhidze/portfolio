import { createElement } from "react";

import useAppear from "../Hooks/useAppear";

const ContactItem = ({ item }) => {
  const { itemRef } = useAppear("slideX");

  const icon = createElement(item.icon, { className: "contact-icon" });

  return (
    <div ref={itemRef} className="contact-item">
      {icon}
      <h4 className="contact-h4 knowledge-h4">{item.name}</h4>
      <h4 className="contact-info">{item.address}</h4>
      {item.link && (
        <h4
          className="contact-link"
          onClick={() => window.open(`${item.link}`, "_blank")}
        >
          Click to go
        </h4>
      )}
    </div>
  );
};

export default ContactItem;
