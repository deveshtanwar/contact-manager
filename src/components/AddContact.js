import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddContact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All the fields are mandatory!!");
            return;
        }
        props.addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate('/');
    }

    return (
        <>
            <div className='container'>
                <h3 className='ms-3 mt-5 text-secondary'>Add Contact</h3>
                <form onSubmit={add}>
                    <div className='m-3'>
                        <label>Name</label>
                        <input type="text" placeholder="john doe"
                            value={name}
                            id="name" className='form-control'
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>

                    <div className='m-3'>
                        <label>Email</label>
                        <input type="email" placeholder="example@gmail.com" id="email" className='form-control'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                    <div className='ms-3'>
                        <input type="submit" value="Add" className='btn btn-primary' />
                        <Link to="/"><button className='btn btn-secondary ms-2'>Back</button></Link>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddContact;
