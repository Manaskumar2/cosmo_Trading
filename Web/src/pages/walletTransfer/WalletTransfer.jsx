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
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
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

function WalletTransfer() {
    const [activeTab, setActiveTab] = useState(1);
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState(null)
    const [userData, setUserData] = useState(null)
    const auth = useRecoilValue(AuthState);
    const [receiverUID, setreceiverUID] = useState(0);
    const [amount, setamount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
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
                handleTransferdata()
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                const errorMessage = `You cannot send money until remaining bet amount 0`;
                toast.error(errorMessage, { ...toastProps });
            } else if (error.response.status === 403) {
                toast.error('You can,t Withdraw Money! Your Account is Temporarily Banned. Please Contact Customer Care', { ...toastProps });

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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getwalletToWallet`, {
                params: { page },
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setTransaction(response.data.data)
                console.log(response.data.data)

                return response;
            }
        } catch (error) {
            if (error.response.status === 403) {
                navigate('/signIn')
                return response;
            }
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }

    useEffect(() => { handleTransferdata() }, [page])

    return (
        <div className='security'>
            <Toaster />
            <div className="container-fluid PromoNav">
                <div className="row">
                    <Link onClick={() => { navigate(-1) }} className="col-2">
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
                    <p style={{ color: '#fff', marginTop: '1rem' }}>UID</p>
                    <input type="text" placeholder='Enter UID' value={receiverUID} onChange={(e) => { setreceiverUID(e.target.value) }} />
                    <p style={{ color: '#fff', marginTop: '1rem' }}>Amount</p>
                    <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => { setamount(e.target.value) }} />
                    <button onClick={() => { handleUserdata(); }}>SUBMIT</button>
                </div>

                <div className="container record-btn-container wallet2wallet btn-sbtn">
                    <div className='row'>
                        {transaction &&
                            <div className='col-6 total-transection '>
                                <h5>Total Sent</h5>
                                <h5>Rs: {transaction.totalSent}</h5>

                            </div>}
                        {transaction &&
                            <div className='col-6 total-transection'>
                                <h5>Total Receive</h5>
                                <h5>Rs: {transaction.totalReceived}</h5>
                            </div>}

                    </div>
                </div>
                <div className="container record-btn-container wallet2wallet">
                    <div className='row'>
                        <div className='col-6'><button className='sendBtn' onClick={() => { handleTabClick(1) }}>
                            <p>Send</p>
                        </button></div>
                        <div className='col-6'>
                            <button className='receive-btn' onClick={() => { handleTabClick(2) }}>
                                <p>Receive</p>
                            </button>
                        </div>

                    </div>
                </div>
                {activeTab === 1 &&
                    <div className='container' style={{ margin: '2.5rem 0' }}>

                        {transaction &&
                            transaction.senderTransactions.map((item, i) => (
                                <div className="row transaction-data" key={i}>
                                    <div className='col-3'>
                                        {auth.UID === item.sender ? (
                                            <img src={send} alt="" />
                                        ) : (
                                            <img src={receive} alt="" />
                                        )}
                                    </div>
                                    <div className="col-6">
                                        <p style={{ textAlign: 'left' }}>
                                            {auth.UID === item.sender ? item.receiver : item.sender}
                                        </p>
                                        <p style={{ fontSize: '.8rem', textAlign: 'left' }}>
                                            {new Date(item.createdAt).toLocaleString()}
                                        </p>
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
                        <div className="pagination-buttons-p2p">
                            <button onClick={() => { setPage(Math.max(page - 1, 1)); }}>  <img src={right} alt="" /> </button>
                            {transaction && <div>{page}/{transaction.totalPages.senderTransactions}</div>}
                            <button onClick={() => { setPage(Math.min(page + 1, transaction.totalPages.senderTransactions)); }}>  <img src={left} alt="" /> </button>
                        </div>
                    </div>
                    // p
                }
                {activeTab === 2 &&
                    <div className='container' style={{ margin: '2.5rem 0' }}>

                        {transaction &&
                            transaction.receiverTransactions.map((item, i) => (
                                <div className="row transaction-data" key={i}>
                                    <div className='col-3'>
                                        {auth.UID === item.sender ? (
                                            <img src={send} alt="" />
                                        ) : (
                                            <img src={receive} alt="" />
                                        )}
                                    </div>
                                    <div className="col-6">
                                        <p style={{ textAlign: 'left' }}>
                                            {auth.UID === item.sender ? item.receiver : item.sender}
                                        </p>
                                        <p style={{ fontSize: '.8rem', textAlign: 'left' }}>
                                            {new Date(item.createdAt).toLocaleString()}
                                        </p>
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

                        <div className="pagination-buttons-p2p">
                            <button onClick={() => { setPage(Math.max(page - 1, 1)); }}>  <img src={right} alt="" /> </button>
                            {transaction && <div>{page}/{transaction.totalPages.receiverTransactions}</div>}
                            <button onClick={() => { setPage(Math.min(page + 1, transaction.totalPages.receiverTransactions)); }}>  <img src={left} alt="" /> </button>
                        </div>
                    </div>}


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
