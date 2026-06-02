import useGlobalReducer from "../context/StoreContext";
import { Link } from "react-router-dom";


const ContactCard = ({contact, deleteContact}) => {
    
    const {dispatch} = useGlobalReducer();
    
    return (
        <div className="contact-card">
      <img
        className="contact-avatar"
        src={`https://i.pravatar.cc/150?img=${(contact.id % 70) + 1}`}
        alt="contact"
      />

      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>📍 {contact.address}</p>
        <p>📞 {contact.phone}</p>
        <p>✉️ {contact.email}</p>
      </div>

      <div className="contact-actions">
        <Link to={`/edit-contact/${contact.id}`} className="icon-btn">
          ✎
        </Link>

        <button
          className="icon-btn delete-icon"
          onClick={() => deleteContact(contact.id)}
        >
          🗑
        </button>
      </div>
    </div>
    );
};

export default ContactCard;