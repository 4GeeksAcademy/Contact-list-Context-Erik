import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Pages/Contacts";
import AddContact from "./Pages/AddContact";


function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Contacts/>} />
                <Route path= "/add-contact" element={<AddContact/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;