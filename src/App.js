import { useState , useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";
// import api from "../src/api/contacts";

const App = () =>{

    const defaultContacts = [
        {
          "id": "4de35eb8-189a-4f3c-99a1-2078ad05aad4",
          "name": "Margot Robbie",
          "email": "Robbie@twows.com"
        },
        {
          "id": "368f4210-5d73-47e2-82f9-d81d35e981a4",
          "name": "Ashneer Grover",
          "email": "Grover@grofers.com"
        },
        {
          "id": "cea41fec-257f-4e7b-8ef6-f04a301051f7",
          "name": "max",
          "email": "max@hotmail.com"
        },
        {
          "id": "185c3999-b5a7-43d7-8d18-6e79e1f23880",
          "name": "nikesh",
          "email": "niks@outlook.com"
        },
        {
          "id": "45d7cd0d-bc14-4601-b25d-cce981f5c422",
          "name": "Virat Kohli",
          "email": "kohli@yahoo.com"
        },
        {
          "id": "1f837474-41ce-4c17-ac29-97d7ca64b8ef",
          "name": "subhman gill",
          "email": "gillsubhman@bcci.in"
        }
      ]

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContact] = useState(()=>{
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        return retrieveContacts ? retrieveContacts : defaultContacts;
    });


    const [searchTerm , setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // LocalStorage 
    useEffect(()=>{
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retrieveContacts) setContact(retrieveContacts);
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },[contacts]);

    // const retrieveContacts = async () =>{
    //     const response = await api.get("/contacts");
    //     return response.data;
    // }

    // useEffect(()=>{
    //     const getAllContacts = async () =>{
    //         const allContacts = await retrieveContacts();
    //         if(allContacts){
    //             setContact(allContacts);
    //         };
    //     }
    //     getAllContacts();
    // },[]);

    const searchHandler = (searchHandler) =>{
        setSearchTerm(searchHandler);
        if(searchHandler !== ""){
            const newContactList = contacts.filter((val) =>{
                return Object.values(val).join(" ").toLowerCase().includes(searchHandler.toLowerCase());
            })
            setSearchResults(newContactList);
        }
        else{
            setSearchResults(contacts);
        }
    }

    const addContactHandler = async (dataFromAddContact) => {
        // const request = {
        //     id: uuidv4(),
        //     ...dataFromAddContact
        // }
        // const response = await api.post("/contacts", request);
        // setContact([response.data, ...contacts]);
        setContact([{id: uuidv4(), ...dataFromAddContact}, ...contacts]);
    }

    const editContactHandler = async (dataFromEditContact) => {
        // const request = {
        //     ...dataFromEditContact
        // }
        // const response = await api.put(`/contacts/${dataFromEditContact.id}`, request);
        // const {id} = response.data;
        const {id} = dataFromEditContact;
        setContact(
            contacts.map((val) =>{
                if(val.id === id){
                    // return {...response.data};
                    return {...dataFromEditContact};
                }
                else{
                    return val;
                }
            })
        );
    }

    const removeContactHandler = async (id) =>{
        // await api.delete(`contacts/${id}`);
        const newContacts = contacts.filter((val)=>{
            return val.id !== id;
        });

        setContact(newContacts);
    }

    return(
        <>  
            <Header title={"Contact Manager"}/>
            <BrowserRouter basename="/contact-manager">
                <Routes>
                    <Route path ="/" exact element = {
                        <ContactList 
                            contact={searchTerm.length < 1 ? contacts : searchResults}
                            removeContactHandler={removeContactHandler}
                            term={searchTerm} 
                            searchKeyword={searchHandler}
                        />
                    }/>
                    <Route path="/addContact" element = {
                        <AddContact 
                            addContactHandler = {addContactHandler}
                        />
                    } />
                    <Route path="/contacts/:id" element={<ContactDetail />}/>
                    <Route path="/edit/:id" element={<EditContact editContactHandler = {editContactHandler}/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
