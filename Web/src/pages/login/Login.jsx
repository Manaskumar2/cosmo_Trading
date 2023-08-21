import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/Cosmo Logo.svg';
import phoneImg from '../../images/smartphone 1.svg';
import lock from '../../images/lock.svg';
import eye from '../../images/eye 1.svg';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

// import { useHistory } from 'react-router-dom';
// import bannerImg from '../../images/Game-Banner.svg'
export const toastProps = {
  position: "top-center",
  duration: 2000,
  style: {
    fontSize: "1rem",
    background: "#fff",
    color: "#333",
  },
};


function Login() {

  // const [userData,setUserData]= useRecoilState(UserDataState)
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signIn`, {
        phoneNumber,
        password,
      });
  
      if (response.status === 200) {
        toast.success("Welcome to our Gaming Zone", { ...toastProps });
        sessionStorage.setItem('authToken', JSON.stringify(response.data.data));
        setPhone('');
        setPassword('');
        setLoading(false);
        console.log(response);
        // Redirect to the home page
        navigate('/');
        window.location.reload();
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || "Something went wrong", { ...toastProps });
      setLoading(false);
    }}



  return (
    <div className='desktop'>
      <div className='login'>
        <div className='wrapper'>
          <div className='logo-container'>
            <img src={logo} alt="" className='logo' />
            
          </div>
          <div className='login-container'>
            <h3 className='title'>Log In</h3>
            {/* <p>Don&prime;t Have An Account? <span><Link to='/signUp'>Sign Up</Link></span></p> */}
          
          <Toaster />
          <form onSubmit={handleSubmit} className='container-fluid'>
            <div className='inputBox'>
              <div className='front'>+91</div>
              <div><input type="number" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} value={phoneNumber}/></div>
              <div className='back-icon'><img src={phoneImg} alt="" /></div>
            </div>
            <div className='inputBox '>
              <div className='front'><img src={lock} alt="" /></div>
              <div><input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} /></div>
              <div className='back-icon'><img src={eye} alt="" /></div>
            </div>
            <div className='forget'><Link to='/forgotPassword'>Forgot Password?</Link></div>
            <div className="btn-container">
              <button className='top-btn' type='submit'>{loading ? <div className="loader"></div> : "LOGIN"}</button>
              <button className='bot-btn' onClick={()=>{navigate('/signUp')}}>REGISTER</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
