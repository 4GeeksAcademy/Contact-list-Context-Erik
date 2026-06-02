import ContactCard from "../Components/ContactCard";
import useGlobalReducer from "../context/StoreContext";
import { useEffect } from "react";

const Contacts = () => {

    const {store, dispatch} = useGlobalReducer();
    
    const agendaSlug = 'erik_contacts';

    const getContacts = async () => {
        const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`
        );
        const data = await response.json();
        dispatch({
            type: 'SET_CONTACTS',
            payload: data.contacts
        });
    };


    const deleteContact = async (contactId) => {
        const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${contactId}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            console.log("Error deleting contact");
            return;
        }
        getContacts();
    }


        useEffect(() => {
            getContacts();
        }, []);
    return(
        <div>
            <h1>Contacts:</h1>

            {
                store.contacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                        deleteContact={deleteContact}
                    />
                ))
            }

        </div>
    );
};

export default Contacts;