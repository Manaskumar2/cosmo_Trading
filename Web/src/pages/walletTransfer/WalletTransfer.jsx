import React, { useState } from 'react';
import Modal from 'react-modal'; // Import react-modal
import '../accountSecurity/AccountSecurity.css';
import back from '../../images/back-button 1.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { AuthState } from '../../Atoms/AuthState';
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

function WalletTransfer() {
    const [userData,setUserData]=useState(null)
    const auth = useRecoilValue(AuthState);
    const [receiverUID, setreceiverUID] = useState('');
    const [amount, setamount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async () => {
        try {
            let token = auth.authToken;
            console.log(token)
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/walletToWallet`, { amount, receiverUID }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.status === 200) {
                toast.success("Amount successfully Sent!", { ...toastProps });
                setamount('');
                setreceiverUID("");
                console.log(response);
                setIsModalOpen(false);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = `You cannot send money until remaining bet amount 0`;
                toast.error(errorMessage, { ...toastProps });
            } else {
                const errorMessage = error.response ? error.response.data.message : error.message;
                console.log(errorMessage);
                toast.error(errorMessage || "Something went wrong", { ...toastProps });
            }
        
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUserdata = async () => {
        try {
            let token = auth.authToken;
            const response =await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${receiverUID} `, {
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

    return (
        <div className='security'>
            <Toaster />
            <div className="container-fluid PromoNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Wallet To Wallet
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className='sucurity-body'>
                <div className='security-form'>
                    <p>UID</p>
                    <input type="text" placeholder='Enter UID' value={receiverUID} onChange={(e) => { setreceiverUID(e.target.value) }} />
                    <p>Amount</p>
                    <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => { setamount(e.target.value) }} />
                    <button onClick={() => {  handleUserdata(); }}>SUBMIT</button>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                
                <div className='modal-body-w2w'>
                    
                    <div>
                    {userData && (
                            <div className='userDetaisW2W'>
                                <h2>User Details</h2>
                                <p>Name: {userData.data.userDetails.name}</p>
                                <p>UID: {userData.data.userDetails.UID}</p>
                                <p>Phone no: {userData.data.userDetails.phoneNumber}</p>
                                <p>Amount: {amount}</p>
                                
                            </div>
                        )}
                    </div>

                <button className='confirm' onClick={handleSubmit}>Confirm Submit</button>
                <button className='close' onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default WalletTransfer;
