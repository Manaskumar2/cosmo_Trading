import React, { useState } from 'react';
import './Reset.css';
import { useNavigate } from 'react-router-dom';
import head from '../../images/headset.svg';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import back from '../../images/back-button 1.svg'


export const toastProps = {
    position: 'top-center',
    duration: 2000,
    style: {
        fontSize: '1rem',
        background: '#fff',
        color: '#333',
    },
};

function Reset() {
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Added state for showing password

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirm) {
            toast.error('New password and confirm password must match.', { ...toastProps });
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_SIGNIN_API_URL}/resetPassword`, {
                newPassword,
            });
            console.log(response);
            if (response.status === 200) {
                toast.success('Password Reset Successful', { ...toastProps });
                setConfirm('');
                setNewPassword('');
                console.log(response);
                navigate('/success');
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
            return;
        }
    };

    return (
        <div className="desktop">
            <div className="forgotPage">
                <div className="wrapper">
                    <div className="top">
                        <div className="row">
                            <div className="col-2 ">
                                <button className="back-btn back" onClick={() => { navigate('/verifyOtp') }}>
                                    <img src={back} alt="" />
                                </button>
                            </div>
                            <div className="col-8">Forgot Password</div>
                            <div className="col-2">
                                <img src={head} alt="" className="head" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <Toaster />
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox reset-input">
                                <div className="inputBoxInner">
                                    <div className="front">
                                        <i className="icon-lock"></i>
                                    </div>
                                    <div>
                                        <input
                                            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
                                            placeholder="New Password"
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            value={newPassword}
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
                            <div className="inputBox reset-input">
                                <div className="inputBoxInner">
                                    <div className="front">
                                        <i className="icon-lock"></i>
                                    </div>
                                    <div>
                                        <input
                                            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
                                            placeholder="Confirm Password"
                                            onChange={(e) => setConfirm(e.target.value)}
                                            value={confirm}
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
                            <div className="passwordChange-btn">
                                <button className="top-btn" type="submit">
                                    Reset Password
                                </button>
                                <button className="bot-btn" onClick={() => navigate('/success')}>
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;
