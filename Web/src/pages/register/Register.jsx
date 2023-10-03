import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Register.css';
import logo from '../../images/Cosmo Logo.svg';
import comp from '../../images/computer.svg';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { Uid } from '../../Atoms/Uid';
import user from './user.svg'
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
  LiveChatWidget.call("hide");
  const [uid , setUid]=useRecoilState(Uid)
  const [phoneNumber, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [referralCode, setReferral] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const referralCodeFromURL = searchParams.get('referral');

    console.log('Referral Code from URL:', referralCodeFromURL);

    if (referralCodeFromURL) {
      setReferral(referralCodeFromURL);
    }
  }, [location.search]);

  const navigateToLogin = () => {
    navigate('/signIn');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!phoneNumber || !password || !referralCode || !agreed) { // Check for agreement
      toast.error('Phone Number, Password, Referral Code, and Agreement are required', { ...toastProps });
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/SignUp`, {
        userName,
        phoneNumber,
        password,
        referralCode,
      });

      console.log(response);
      if (response.status === 201) {
        toast.success('Registration Successful', { ...toastProps });
        sessionStorage.setItem('password', password);
        setUid(response)
        setPhone('');
        setPassword('');
        setReferral('');
        setUserName('')
        setAgreed(false);
        setTimeout(() => {
          navigate('/registered');
        }, 1500);
        console.log(response);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div className="desktop">
      <div className="register">
        <div className="wrapper">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="signup-container">
            <h3 className="title">Register</h3>

            <Toaster />
            <form onSubmit={handleSubmit} className="container-fluid">
            <div className="inputBox">
                <div className="inputBoxInner">
                  <div className="front">
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                    />
                  </div>
                </div>
              </div>
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
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
                <div
                  className="back-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={showPassword ? 'icon-eye' : 'icon-eye'}></i>
                </div>
              </div>
              <div className="inputBox">
                <div className="inputBoxInner">
                  <div className="front">
                    <img src={comp} alt="" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Referral Code"
                      onChange={(e) => setReferral(e.target.value)}
                      value={referralCode}
                    />
                  </div>
                </div>
              </div>
              
              <div className="policy">
                <label>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />{' '}
                  I Agree <Link to='/terms&condition'>Privacy Policy</Link>
                </label>
              </div>
              <div className="btn-container">
                <button className="top-btn" type="submit" disabled={!agreed}>
                  Register
                </button>
                <button className="bot-btn" onClick={navigateToLogin}>
                  Already have an account, Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Register);
