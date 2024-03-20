import ContactItem from "./ContactItem";
import ContactData from "./ContactData";

export default function Contact() {
  return (
    <div className="contact-div" id="contact">
      <h3 className="knowledge-h3">Contact Me</h3>
      {ContactData.map((item, id) => (
        <ContactItem key={id} item={item} />
      ))}
    </div>
  );
}
