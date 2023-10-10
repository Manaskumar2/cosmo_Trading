import React, { useState } from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from './Logo-22.png';
import toast, { Toaster } from "react-hot-toast";

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function Adminlogin() {
    const navigate = useNavigate();
    const [phoneNumber, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}admin/signIn`, {
                phoneNumber, password
            });
            if (response.status === 200) {
                toast.success("Welcome Admin", { ...toastProps });
                sessionStorage.setItem('authToken', JSON.stringify(response.data.data));
                setPhone('');
                setPassword('');
                navigate('/admin/home');
                window.location.reload();
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    return (
        <div className='admin-login'>
            <Toaster />
            <form onSubmit={handleSubmit} className='admin-form'>
                <div className='text-center'><img src={logo} alt="" /></div>
                <h2>Welcome Admin</h2>
                <p>Phone No</p>
                <input
                    type="number"
                    placeholder='Enter Number'
                    style={{ width: "90%" }}
                    value={phoneNumber}
                    onChange={(e) => { setPhone(e.target.value) }}
                />&nbsp;
                <i className='icon-mobile'></i>
                <p>Password</p>
                <div className="password-input">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        style={{ width: "90%" }}
                    />&nbsp;
                    <i
                        className='icon-eye'
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </div>
                <br />
                <button className="Btn" type='submit'>
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default Adminlogin;
