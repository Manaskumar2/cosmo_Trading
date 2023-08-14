import {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import './Register.css'
import logo from '../../images/Cosmo Logo.svg'
import phoneImg from '../../images/smartphone 1.svg'
import lock from '../../images/lock.svg'
import eye from '../../images/eye 1.svg'
import comp from '../../images/computer.svg'
import toast,{Toaster  } from "react-hot-toast";
import axios from 'axios';


export const toastProps = {
  position: "top-center",
  duration: 2000,
  style: {
      fontSize: "1rem",
      background: "#fff",
      color: "#333",
  },
};

function Register() {
 
  const [phoneNumber, setPhone] = useState('');
  const [referral, setReferral] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const navigateToLogin = () => {
    navigate('/signIn');
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/SignUp`, {
          phoneNumber,
            password,
            referral,
        });
        console.log(response);
        if(response.status===201){
            toast.success("Registration Successful", { ...toastProps });
            setPhone('');
            setPassword('');
            navigate('/signIn');
            window.location.reload();
            console.log(response);
            return response;
        }
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage || "Something went wrong", { ...toastProps });
        
        return;
    }
};
  return (
  <div className='desktop'>
    <div className='register '>
        <div className='wrapper'>
        <div className='logo-container'>
          <img src={logo} alt="" className='logo'/>
          </div>
          <div className='signup-container'>
            <h3 className='title'>Register</h3>

          <Toaster/>
          <form onSubmit={handleSubmit} className='container-fluid'>
            <div className='inputBox'>
              <div className='front'>+91</div>
              <div><input type="number" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} value={phoneNumber}/></div>
              <div className='back-icon'><img src={phoneImg} alt="" /></div>
            </div>
            <div className='inputBox'>
            <div className='front'><img src={lock} alt="" /></div>
              <div><input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/></div>
              <div className='back-icon'><img src={eye} alt="" /></div>
            </div>
            <div className='inputBox'>
            <div className='front'><img src={comp} alt="" /></div>
              <div ><input type="text" placeholder='Referral Code' onChange={(e) => setReferral(e.target.value)} value={referral}/></div>
            </div>
            <div className='policy'><input type="checkbox" /> I Agree <Link>Privacy Policy</Link> </div>
            <div className="btn-container">
              <button className='top-btn' type='submit'>REGISTER</button>
              <button className='bot-btn' onClick={navigateToLogin}>LOGIN</button>
            </div>
          </form>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Register
