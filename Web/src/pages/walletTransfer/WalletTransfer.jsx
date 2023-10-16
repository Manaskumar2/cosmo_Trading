import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../accountSecurity/AccountSecurity.css';
import back from '../../images/back-button 1.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { AuthState } from '../../Atoms/AuthState';
import toast, { Toaster } from "react-hot-toast";
import receive from './receive.svg'
import send from './send.svg'
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
    const [transaction, setTransaction] = useState(null)
    const [userData, setUserData] = useState(null)
    const auth = useRecoilValue(AuthState);
    const [receiverUID, setreceiverUID] = useState(0);
    const [amount, setamount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async () => {
        try {
            let token = auth.authToken;

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/walletToWallet`, { amount, receiverUID }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.status === 200) {
                toast.success("Amount successfully Sent!", { ...toastProps });
                setamount('');
                setreceiverUID(0);
                setIsModalOpen(false);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = `You cannot send money until remaining bet amount 0`;
                toast.error(errorMessage, { ...toastProps });
            } else {
                const errorMessage = error.response ? error.response.data.message : error.message;
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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${receiverUID} `, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setUserData(response.data)
                setIsModalOpen(true);
                return response;
            }
        } catch (error) {

            const errorMessage = error.response ? error.response.data.message : error.message;

            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }
    const handleTransferdata = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getwalletToWallet `, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response)
                setTransaction(response.data)
                return response;
            }
        } catch (error) {

            const errorMessage = error.response ? error.response.data.message : error.message;

            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    useEffect(() => { handleTransferdata() }, [])

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
            <div className='sucurity-body ' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='security-form '>
                    <p style={{color:'#fff',marginTop:'1rem'}}>UID</p>
                    <input type="text" placeholder='Enter UID' value={receiverUID} onChange={(e) => { setreceiverUID(e.target.value) }} />
                    <p style={{color:'#fff',marginTop:'1rem'}}>Amount</p>
                    <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => { setamount(e.target.value) }} />
                    <button onClick={() => { handleUserdata(); }}>SUBMIT</button>
                </div>
                <div className='container' style={{margin:'2.5rem 0'}}>
                    {transaction &&
                        transaction.data.map((item, i) => (
                            <div className="row transaction-data" key={i}>
                                <div className='col-3'>
                                    {auth.UID === item.sender ? (
                                        <img src={send} alt="" />
                                    ) : (
                                        <img src={receive} alt="" />
                                    )}
                                </div>
                                <div className="col-6" >  <p style={{textAlign:'left'}}>{auth.UID === item.sender?item.receiver:item.sender}</p> 
                                <p style={{fontSize:'.8rem',textAlign:'left'}}>{new Date(item.createdAt).toLocaleString()}</p>
                                </div>
                                
                                <div className={`col-3 ${auth.UID === item.sender ? "text-red" : "text-green"}`}>
                                    {auth.UID === item.sender ? (
                                        <span>- &#x20B9;{item.amount}</span>
                                    ) : (
                                        <span className="text-green">+ &#x20B9;{item.amount}</span>
                                    )}
                                </div>
                            </div>
                        ))}
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
