import { useState } from 'react'
import './OTP.css'
import head from '../../images/headset.svg'
import phone from '../../images/smartphone 1.svg'
// import blueLine from '../../images/blueLine.svg'
import back from '../../images/back-button 1.svg'
import resend from '../../images/resend.svg'
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

function OTP() {
    const [otp, setOtp] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/verifyOtp`, {
                otp,
            });
            console.log(response);
            if(response.status===200){
                toast.success("Welcome to our Gaming Zone", { ...toastProps });
                setOtp('');
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
    const navigate = useNavigate()
    return (
<div className="desktop">
 <div className='forgotPage'>
            <div className='wrapper'>
                <div className='top'>
                <div className="row">
                <Toaster />
                            <div className="col-2 "><button className='back-btn back' onClick={() => { navigate('/forgotPassword') }}><img src={back} alt="" /></button></div>
                            <div className="col-8">Forgot Password</div>
                            <div className="col-2"><img src={head} alt="" className='head' /></div>

                        </div>
                </div>
                {/* <div className='title-container'>
                    <h3 className='title'>Forgot Password</h3>
                    <div><img src={blueLine} alt="" /></div>
                </div> */}
                <form onSubmit={handleSubmit} className="container-fluid">
                <div className='inputBox'>
                    <div className='front'>OTP</div>
                    <div><input type="number" placeholder='Enter OTP' value={otp} onChange={(e)=>setOtp(e.target.value)}/></div>
                    <div className='back-icon'><img src={phone} alt="" /></div>
                </div>
                <div className='otp'><p >Enter your OTP, which sent by SMS to mobile number XXXXXX4444</p></div>
                <div className='resend'><button><img src={resend} alt="" />Resend OTP</button></div>
                <div className='passwordChange-btn'>
            <button className='top-btn' onClick={()=>{navigate("/resetPassword")}}>VERIFY</button>
            <button className='bot-btn' onClick={()=>{navigate("/resetPassword")}}>Back</button>
            </div>
                </form>
                
            </div>
            
        </div>
</div>
    )
}

export default OTP
