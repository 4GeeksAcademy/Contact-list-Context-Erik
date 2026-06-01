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
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                        address={contact.address}
                    />
                ))
            }

        </div>
    );
};

export default Contacts;