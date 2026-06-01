import { useState } from "react";
import useGlobalReducer from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {

   const [name, setName] = useState('');
   const {dispatch} = useGlobalReducer();
   const navigate = useNavigate();

   const addContact = () => {

      if (name.trim() === '') return;

      const newContact = {
         id: Date.now(),
         name: name,
         email: 'pending',
         phone: 'pending',
         address: 'pending'
      };

      dispatch({
         type: 'ADD_CONTACT',
         payload: newContact
      });
      navigate('/')
      setName("")
   }

   return(
      <div>
         <h1>Add Contact</h1>

         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />

         <button onClick={addContact}>Add Contact</button>
      </div>
   )
}   

export default AddContact;