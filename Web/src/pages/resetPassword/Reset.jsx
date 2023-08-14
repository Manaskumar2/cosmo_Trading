import {useState} from 'react'
import './Reset.css'
import { useNavigate } from 'react-router-dom'
import head from '../../images/headset.svg'
import eye from '../../images/eye 1.svg'
import lock from '../../images/lock.svg'
// import blueLine from '../../images/blueLine.svg'
import back from '../../images/back-button 1.svg'
import toast, { Toaster } from "react-hot-toast";
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

function Reset() {
    const navigate = useNavigate()

    const [newPassword, setNewPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirm) {
            toast.error("New password and confirm password must match.", { /* your toast properties */ });
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_SIGNIN_API_URL}/resetPassword`, {
                newPassword,
            });
            console.log(response);
            if (response.status === 200) {
                toast.success("Welcome to our Gaming Zone", { /* your toast properties */ });
                setConfirm('');
                setNewPassword('');
                console.log(response);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { /* your toast properties */ });
            return;
        }

    };
    return (
        <div className='desktop'>
            <div className='forgotPage'>
                <div className='wrapper'>
                    <div className='top'>
                    <div className="row">
                            <div className="col-2 "><button className='back-btn back' onClick={() => { navigate('/verifyOtp') }}><img src={back} alt="" /></button></div>
                            <div className="col-8">Forgot Password</div>
                            <div className="col-2"><img src={head} alt="" className='head' /></div>

                        </div>
                    </div>
                    <div className='container-fluid'>
                        {/* <h3 className='title'>Forgot Password</h3>
                        <div><img src={blueLine} alt="" /></div> */}
                    
                    <Toaster/>
                    <form onSubmit={handleSubmit}>
                    <div className='inputBox reset-input'>
                        <div className='front'><img src={lock} alt="" /></div>
                        <div><input type='password' placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword}/></div>
                        <div className='back-icon'><img src={eye} alt="" /></div>
                    </div>
                    <div className='inputBox reset-input'>
                        <div className='front'><img src={lock} alt="" /></div>
                        <div><input placeholder='Confirm Password' type='password' onChange={(e) => setConfirm(e.target.value)} value={confirm}/></div>
                        <div className='back-icon'><img src={eye} alt="" /></div>
                    </div>
                    <div className='passwordChange-btn'>
                        <button className='top-btn' type='submit' onClick={() => { navigate('/success') }}>RESET PASSWORD</button>
                        <button className='bot-btn' type='submit' onClick={() => { navigate('/success') }}>Back</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset
