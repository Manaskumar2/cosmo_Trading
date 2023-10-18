import React from 'react'
import './gift.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import {Link} from  'react-router-dom'
import gft from './Frame.png'
import { useState } from 'react';
import { useRecoilValue } from 'recoil'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
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

function Gift() {
    const auth = useRecoilValue(AuthState)
    const [code , setCode]=useState('')
    const claimCode = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/claimGiftCode`,{code}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setCode('')
                toast.success('You have successfully claimed the gift Card!', { ...toastProps });
                return response;
            }
        } catch (error) {
            if (error.response.status === 404) {
                toast.error('Gift Card already Claimed!', { ...toastProps })
            }else{
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Gift card not Found.", { ...toastProps });}
        }
    }
  return (
    <div className='giftPage'>
        <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Gift
                    </div>
                    <div className="col-2">
                        <img src={ear} alt="" className="header_headphone" />
                    </div>
                </div>
            </div>
            <Toaster/>
            <div className='gift-body'>
                <div className="container  box">
                    <img src={gft} alt="" />
                    <h6>Hello Everyone</h6>
                    <p>We have a Gift for You</p>
                    <input type="text" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
                </div>
                <div className="container">
                    <div className="row gift-btn">
                        <button className="col-12" onClick={claimCode}>SUBMIT</button>
                    </div>
                </div>

                
            </div>
    </div>
)
}

export default Gift
