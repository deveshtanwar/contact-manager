import { Link, useLocation } from 'react-router-dom';
import user from '../images/cartoon-image.jpg';
import './ContactCard.css';

const ContactDetail = () =>{
    const style = {
        width:"300px"
    }

    const location = useLocation();
    const details = location.state;
    const {name,email} = details;
    return(
        <>
            <div className='main-div container mt-4'>
                <div className='card' style={style}>
                    <img src={user}/>
                    <div className='card-body cardDetail-content'>
                        <div className='card-title h3'>{name}</div>
                        <div className='card-text'>{email}</div>
                    </div>
                </div>
                <div className='mt-3'>
                    <Link to="/"><button className='btn btn-secondary'>Go Back</button></Link>
                </div>
            </div>
        </>
    );
}
export default ContactDetail;