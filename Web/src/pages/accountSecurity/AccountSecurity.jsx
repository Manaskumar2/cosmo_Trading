import React,{useState} from 'react'
import './AccountSecurity.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios'
import { useRecoilValue
} from 'recoil'
import { AuthState } from '../../Atoms/AuthState'

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};
function AccountSecurity() {
    const auth=useRecoilValue(AuthState)
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
        <div className='security'>
            <Toaster/>
            <div className="container-fluid PromoNav" >
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8" style={{color:'#fff'}}>
                        Security
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
            <div className='sucurity-body'>
                <div className='security-form'>
                    <p style={{color:'#fff'}}>Password</p>
                    <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <p style={{color:'#fff'}}>Confirm Password</p>
                    <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>

        </div>
    )
}

export default AccountSecurity
