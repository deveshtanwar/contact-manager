import { useState } from 'react';
import { Link, useLocation , useNavigate} from 'react-router-dom';

const EditContact = (props) => {

    const location = useLocation();
    const editDetail = location.state;
    const {name : editName, email : editEmail, id} = editDetail;

    const [name, setName] = useState(editName);
    const [email, setEmail] = useState(editEmail);

    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === ""){
            alert("All the fields are mandatory!!");
            return;
        }
        props.editContactHandler({id, name, email });
        setName("");
        setEmail("");
        navigate('/');
    }

    return (
        <>
            <div className='container'>
                <h3 className='ms-3 mt-5 text-primary'>Edit Contact</h3>
                <form onSubmit={update}>
                    <div className='m-3'>
                        <label>Name</label>
                        <input type="text" placeholder="New Name"
                            value={name}
                            id="name" className='form-control'
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>

                    <div className='m-3'>
                        <label>Email</label>
                        <input type="email" id="email" className='form-control'
                            placeholder="New Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                    <div className='ms-3'>
                        <input type="submit" value="Save" className='btn btn-primary' />
                        <Link to="/"><button className='btn btn-secondary ms-2'>Back</button></Link>
                    </div>
                </form>
            </div>
        </>
    );
}
export default EditContact;
