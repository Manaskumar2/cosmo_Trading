import React,{useState} from 'react'
import './AdminReset.css'
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios'
import { useRecoilValue
} from 'recoil'
import { AdminAuthState } from '../../../Atoms/AdminAuthState' 

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};
function AdminResetPassword() {
    const auth=useRecoilValue(AdminAuthState )
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')

    const handleSubmit = async () => {

        try {
            let token = auth.authToken
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/changePassword`,{password,confirmPassword},  {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 201) {
                toast.success("Password Changed Successfully", { ...toastProps });
                setPassword("")
                setConfirmPassword("")
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    return (
       <div>
        <AdminNav />
        <div>
        <Side />
            <div>
            <div className='security'>
            <Toaster/>
            <div className='sucurity-body'>
                <div className='security-form'>
                    <p>Password</p>
                    <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <p>Confirm Password</p>
                    <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>

        </div>
            </div>
        </div>
       </div>
    )
}

export default AdminResetPassword
