import '../components/ContactCard.css';
import userLogo from '../images/user-profile.png';
import {Link} from 'react-router-dom';

const ContactCard = (props) =>{

    const{name, email, id} = props.data;
    return(
        <div className="container mt-3">
            <hr className='hr-style'/>
            <div className='items mt-2'>
                <div className='inner-items'>
                    <img src={userLogo} className='userLogo'/>
                    <div className="content">
                        <Link className='link-detail' 
                        to={`/contacts/${id}`} state={props.data}>
                            <div className='name'>{name}</div>
                            <div >{email}</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link className='link-detail' 
                    to={`/edit/${id}`} state={props.data}>
                        <i className="bi bi-pencil-square me-2"
                        style={{color:"blue", marginTop:"25px", cursor:"pointer", fontSize:"22px"}}
                        ></i>
                    </Link>
                    <i className="bi bi-trash"
                    style={{color:"red", marginTop:"25px", cursor:"pointer",fontSize:"22px"}}
                    onClick={()=>{
                        props.clickHandler(id);
                    }}
                    ></i>
                </div>
            </div>
        </div>
    );
}
export default ContactCard;