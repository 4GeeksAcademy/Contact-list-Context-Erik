import useGlobalReducer from "../context/StoreContext";

const ContactCard = ({contact}) => {
    
    const {dispatch} = useGlobalReducer();
    
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>

            <button>Edit</button>
            <button
                onClick={() =>
                    dispatch({
                        type: 'DELETE_CONTACT',
                        payload: contact.id
                    })
                }
            >
                Delete</button>
        </div>
    );
};

export default ContactCard;