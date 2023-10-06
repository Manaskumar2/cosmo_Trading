import React from 'react'
import Modal from 'react-modal';
import './PremiumApply.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AuthState } from '../../Atoms/AuthState'
import { PremiumState } from '../../Atoms/Premium'
import '../accountSecurity/AccountSecurity.css'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function PremiumApply() {
    const [userData,setUserData]=useState(null)
    const auth = useRecoilValue(AuthState);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authData=useRecoilValue(AuthState)
    const premium = useRecoilValue(PremiumState);
    const [amount, setPremiumMoney] = useState(null);

    useEffect(() => {
        if (premium && premium.data && premium.data.data) {
            const dataLength = premium.data.data.length;

            if (dataLength < 50) {
                setPremiumMoney(10000);
            } else if (dataLength >= 50 && dataLength < 100) {
                setPremiumMoney(20000);
            } else {
                setPremiumMoney(30000);
            }
        }
    }, [premium]);

    const handleUserdata = async () => {
        try {
            let UID=auth.UID
            let token = auth.authToken;
            const response =await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID} `, {
                headers: { Authorization: `Bearer ${token}` },
                // params: { UID: receiverUID } 
            });

            if (response.status === 200) {
                setUserData(response.data)
                console.log(response.data)
                setIsModalOpen(true);
                return response;
            }
        } catch (error) {
            
            const errorMessage = error.response ? error.response.data.message : error.message;
            console.log(errorMessage)
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const handlePrimeRequest = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/applyPremium`,{amount},
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            );
            if (response.status === 201) {
                console.log(response);
                toast.success( "Application sent for Premium User", { ...toastProps });
                setIsModalOpen(false)
                return response;
            }
        }  catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };





    return (
        <div className='PremiumApply'>
            <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Prime Membership
                    </div>
                </div>
                < Toaster/>
            </div>
            <div className='Premium-Body'>
                <p>Transaction Amount</p>
                <input type="text" value={amount} disabled />
                
                <button onClick={() => {  handleUserdata(); }} className='premiumApply-Submit'>Submit</button>


            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                
                <div className='modal-body-w2w'>
                    
                    <div>
                    {userData && (
                            <div className='userDetaisW2W'>
                                <h4>I Want To Upgrade As A Premium User</h4>
                                <p>Name: {userData.data.userDetails.name}</p>
                                <p>UID: {userData.data.userDetails.UID}</p>
                                <p>Phone no: {userData.data.userDetails.phoneNumber}</p>
                                <p>Amount: {amount}</p>
                                
                            </div>
                        )}
                    </div>

                <button className='confirm'  onClick={handlePrimeRequest} >Go To Premium</button>
                <button className='close' onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default PremiumApply
