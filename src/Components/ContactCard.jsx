import useGlobalReducer from "../context/StoreContext";
import { Link } from "react-router-dom";
const ContactCard = ({contact, deleteContact}) => {
    
    const {dispatch} = useGlobalReducer();
    
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>

            <Link to={`/edit-contact/${contact.id}`}>
                Edit 
            </Link>
            
            <button
                onClick={() =>
                    deleteContact(contact.id)
                }
            >
                Delete</button>
        </div>
    );
};

export default ContactCard;