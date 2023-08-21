import { useState } from 'react'
import './Forgot.css'
import head from '../../images/headset.svg'
import phoneImg from '../../images/smartphone 1.svg'
// import blueLine from '../../images/blueLine.svg'
import back from '../../images/back-button 1.svg'
import { useNavigate } from 'react-router-dom'
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

function ForgotPassword() {
    // const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/forgotPassword`, {
                phoneNumber,
            });
            console.log(response);
            if(response.status===200){
                toast.success("Welcome to our Gaming Zone", { ...toastProps });
                setPhoneNumber('');
                // setPassword('');
                // setLoading(false); 
                console.log(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
            // setLoading(false);
            return;
        }
    };
    return (
        <div className="desktop">
            <div className='forgotPage'>
                <div className='wrapper'>
                    <div className='top ' >
                        <div className="row" >
                            <div className="col-2 "><button className='back-btn back' onClick={() => { navigate('/signIn') }}><img src={back} alt="" /></button></div>
                            <div className="col-8">Forgot Password</div>
                            <div className="col-2"><img src={head} alt="" className='head' /></div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <Toaster />
                        <form onSubmit={handleSubmit} >
                            <div className='inputBox'>
                                <div className="inputBoxInner">
                                    <div className='front'>+91</div>
                                    <div><input type="number" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></div>
                                </div>
                                <div className='back-icon'><i className="icon-mobile"></i></div>
                            </div>
                            <div className='otp'><p >Enter your register mobile number to get OTP</p></div>
                            <div className='passwordChange-btn'>
                                <button className='top-btn' type='submit' >Get OTP</button>
                                <button className='bot-btn' onClick={() => { navigate('/verifyOtp') }}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
