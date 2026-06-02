import ContactCard from "../Components/ContactCard";
import useGlobalReducer from "../context/StoreContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
    const { store, dispatch } = useGlobalReducer();

    const agendaSlug = "erik_contacts";

    const createAgenda = async () => {
        const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${agendaSlug}`,
            {
                method: "POST"
            }
        );

        if (!response.ok && response.status !== 400) {
            console.log("Error creating agenda:", response.status);
        }
    };



    const getContacts = async () => {
        const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`
        );

        const data = await response.json();

        dispatch({
            type: "SET_CONTACTS",
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
    };

    useEffect(() => {
        const init = async () => {
            await createAgenda();
            await getContacts();
        };

        init();
    }, []);

    return (
        <div className="contacts-page">
            <div className="contacts-header">
                <h1>Contacts:</h1>

                <Link to="/add-contact" className="add-contact-btn">
                    Add Contact
                </Link>
            </div>

            {store.contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    deleteContact={deleteContact}
                />
            ))}
        </div>
    );
};

export default Contacts;