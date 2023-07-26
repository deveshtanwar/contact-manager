import ContactCard from "./ContactCard";
import '../components/ContactCard.css';
import {Link} from 'react-router-dom';
import { useRef } from "react";


const ContactList = (props) =>{

    const deleteContactHandler = (id) =>{
        props.removeContactHandler(id);
    }

    const inputElement = useRef("");

    const getSearchTerm = () =>{
        props.searchKeyword(inputElement.current.value);
    }

    return(
        <div className="container">
            <div className=" addContact-btn">
                <h3 className='text-secondary mt-4 ms-3'>Contact List</h3>
                <Link to="/addContact"><button className="btn btn-primary mt-3 cstm-btn">Add Contact</button></Link>
            </div>
            <div className="container input-group mt-3 ms-2">
                <input type="text"  id="search" className="form-control"
                ref={inputElement}
                value={props.term}
                onChange = {getSearchTerm}
                />
                <button className="btn btn-secondary">
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <div className="parent mt-2">
                {props.contact.length !== 0 ? props.contact.map((val)=>{
                    return(
                        <div key={val.id}>
                            <ContactCard data={val} clickHandler={deleteContactHandler}/>
                        </div>
                    );
                }) : "No Contacts Found"}
                
            </div>
        </div>
    );    
}
export default ContactList;