import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/Cosmo Logo.svg';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const toastProps = {
  position: 'top-center',
  duration: 2000,
  style: {
    fontSize: '1rem',
    background: '#fff',
    color: '#333',
  },
};

function Login() {
  useEffect(() => {
    const preloadBackgroundImage = () => {
      const backgroundImage = new Image();
      backgroundImage.src = '../../images/Game-Banner.svg';
    };

    preloadBackgroundImage();
  }, []);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (loading) {
      return;
    }
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signIn`, {
        phoneNumber,
        password,
      });

      if (response.status === 200) {
        toast.success('Welcome to our Gaming Zone', { ...toastProps });
        sessionStorage.setItem('authUserToken', JSON.stringify(response.data.data));
        localStorage.setItem('showPopUp', JSON.stringify('show'));
        setPhone('');
        setPassword('');
        setLoading(false);
        navigate('/');
        window.location.reload();
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
      setLoading(false);
    }
  };

  return (
    <div className="desktop">
      <div className="login">
        <div className="wrapper">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="login-container">
            <h3 className="title">Log In</h3>
            <Toaster />
            <form onSubmit={handleSubmit} className="container-fluid">
              <div className="inputBox">
                <div className="inputBoxInner">
                  <div className="front">+91</div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phoneNumber}
                    />
                  </div>
                </div>
                <div className="back-icon">
                  <i className="icon-mobile"></i>
                </div>
              </div>
              <div className="inputBox">
                <div className="inputBoxInner">
                  <div className="front">
                    <i className="icon-lock"></i>
                  </div>
                  <div>
                    <input
                      type={showPassword ? 'text' : 'password'} // Toggle between text and password type
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
                <div
                  className="back-icon"
                  onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                >
                  <i className={showPassword ? 'icon-eye' : 'icon-eye'}></i>
                </div>
              </div>
              <div className="forget">
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>
              <div className="btn-container">
                <button className="top-btn" type="submit">
                  {loading ? <div className="loader"></div> : 'LogIn'}
                </button>
                <button className="bot-btn" onClick={() => navigate('/signUp')}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Login);

