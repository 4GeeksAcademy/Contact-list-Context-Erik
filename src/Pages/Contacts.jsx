import ContactCard from "../Components/ContactCard";
import useGlobalReducer from "../context/StoreContext";

const Contacts = () => {

    const {store, dispatch} = useGlobalReducer();
    
    return(
        <div>
            <h1>Contacts:</h1>

            {
                store.contacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                    />
                ))
            }

        </div>
    );
};

export default Contacts;