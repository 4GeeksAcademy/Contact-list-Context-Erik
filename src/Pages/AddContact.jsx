import { useState, useEffect } from "react";
import useGlobalReducer from "../context/StoreContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {

   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [address, setAddress] = useState('');
   const {store, dispatch} = useGlobalReducer();
   const navigate = useNavigate();
   const agendaSlug = 'erik_contacts';
   const {contactId} = useParams();
   
   

 const addContact = async () => {
  if (
    name.trim() === "" ||
    phone.trim() === "" ||
    email.trim() === "" ||
    address.trim() === ""
  ) return;

  const newContact = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    address: address.trim()
  };

  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    }
  );

  if (!response.ok) {
    console.log("Error creating contact:", response.status);
    return;
  }

  navigate("/");
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

      return data.contacts;
   }

  useEffect(() => {
  const loadContactForEdit = async () => {
    if (!contactId) return;

    let contacts = store.contacts;

    if (contacts.length === 0) {
      contacts = await getContacts();
    }

    const contactToEdit = contacts.find(
      (contact) => String(contact.id) === String(contactId)
    );

    console.log("contactToEdit:", contactToEdit);

    if (!contactToEdit) return;

    setName(contactToEdit.name || "");
    setPhone(contactToEdit.phone || "");
    setEmail(contactToEdit.email || "");
    setAddress(contactToEdit.address || "");
  };

  loadContactForEdit();
}, [contactId]);



    

   return(
      <div>
         <h1>Add Contact</h1>

         <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="Name"/>

         <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone"/>

         <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>

         <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />

         <button onClick={addContact}>Add Contact</button>
      </div>
   )
}   

export default AddContact;


