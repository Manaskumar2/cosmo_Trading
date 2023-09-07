import React from 'react'
import { useState } from 'react'
import './AdminLogin.css'
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()
    const [phoneNumber, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/signIn`, {
                phoneNumber, password
            }
            );
            if (response.status === 200) {
                toast.success("Welcome Admin", { ...toastProps });
                console.log(response);
                sessionStorage.setItem('authToken', JSON.stringify(response.data.data));
                setPhone('');
                setPassword('');
                navigate('/admin/home')
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
            <form onSubmit={handleSubmit} >
                <h2>Welcome Admin</h2>
                <p>Phone No</p>
                <input type="number" placeholder='Enter Number' value={phoneNumber} onChange={(e) => { setPhone(e.target.value) }} />
                <p>Password</p>
                <input type="password" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <button type='submit' className='admin-login-btn'>Login</button>
            </form>
        </div>
    )
}

export default Adminlogin
