import Button from 'react-bootstrap/Button';
import './Giftcard.css'
import '../adminUserData/User.css'
import gft from './Frame.png'
import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import Accordion from 'react-bootstrap/Accordion';
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
import Modal from 'react-bootstrap/Modal';
function createGiftCard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [giftData, setGiftData] = useState(null)
    const [isGiftCodeCopied, setIsGiftCodeCopied] = useState(false);
    const giftCodeInputRef = useRef(null);

    useEffect(() => {
        const storedGiftData = localStorage.getItem('gift');
        if (storedGiftData) {
            const parsedGiftData = JSON.parse(storedGiftData);
            setGiftData(parsedGiftData);
        } else {
            setGiftData(null);
        }
    }, []);


    const auth = useRecoilValue(AdminAuthState)
    const [code, setCode] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [maxClaims, setmaxClaims] = useState(0)
    const [amount, setamount] = useState(0)

    const codeHistory = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getGiftCode`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setData(response.data)
                console.log(response.data)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Gift card not Found.", { ...toastProps });
        }
    }
    const claimCode = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/giftCode`, { code, maxClaims, amount }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                localStorage.setItem('gift', JSON.stringify(response.data.data))
                setGiftData(response.data.data)
                setCode('')
                setamount(0)
                setmaxClaims(0)
                toast.success('Successfully Created Gift Card', { ...toastProps });
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Gift card not Found.", { ...toastProps });
        }
    }
    const handleCopyClick = () => {
        if (giftCodeInputRef.current) {
            giftCodeInputRef.current.select();
            document.execCommand('copy');
            setIsGiftCodeCopied(true);
            setTimeout(() => {
                setIsGiftCodeCopied(false);
            }, 2000);
        }
    };
    useEffect(() => { codeHistory() }, [])

    return (
        <div>
            <AdminNav />
            <div>
                <Side />
                <div className='giftCardPage'>
                    <Toaster />
                    <div className='gift-body'>
                        <div className="box">
                            <h6>Create Gift Card</h6>
                            <p>Enter Gift card Name</p>
                            <input type="text" value={code} onChange={(e) => { setCode(e.target.value) }} />
                            <p>Enter Gift Amount</p>
                            <input type="text" value={amount} onChange={(e) => { setamount(e.target.value) }} />
                            <p>Enter How many Person You Want to Share</p>
                            <input type="text" value={maxClaims} onChange={(e) => { setmaxClaims(e.target.value) }} />
                            <div className="row gift-btn">
                                <button className="col-12 submit-gft-btn" onClick={claimCode}>SUBMIT</button>
                            </div>
                            <div className="row gift-btn">

                                <button className="col-12 history-gft-btn" onClick={() => { navigate('/admin/giftCodeHistory') }}>Gift Code History</button>
                            </div>
                        </div>
                        <div className="Gift-code">
                            {giftData && (
                                <div className="box">
                                    <h6>Your Gift Card</h6>
                                    <div className='gift-code-row'>
                                        <h5> Gift Code : </h5>
                                        <input
                                            type="text"
                                            value={giftData.code}
                                            readOnly
                                            ref={giftCodeInputRef}
                                        />
                                        <button onClick={handleCopyClick}>
                                            {isGiftCodeCopied ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                    <div className='gift-code-row'>
                                        <h5> Amount : </h5>
                                        <p>{giftData.amount}</p>
                                    </div>
                                    <div className='gift-code-row'>
                                        <h5> Maximum Person Claim : </h5>
                                        <p>{giftData.maxClaims}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='container'>
                        <table>
                            <thead>
                                <tr className='table-row table-heading-admin'>
                                    <th>Sl No</th>
                                    <th>Gift Code</th>
                                    <th>Total Claimed</th>
                                    <th>Remaining Claims</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item, index) => (
                                    <tr key={index} className='table-row'>
                                        <td>{index + 1}</td>
                                        <td>{item.code}</td>
                                        <td>{item.claimedByUsers.length}</td>
                                        <td>{item.maxClaim - item.claimedByUsers.length}</td>
                                        <td> <button type="button" class="btn btn-primary" onClick={() => { { setSelectedItem(item); handleShow() } }}>Details</button>
                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                                centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Gift Code Claimed By</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className='userModalBody'>
                                                    <div>
                                                        {selectedItem && selectedItem.claimedByUsers.map((user, j) => (
                                                            <ol key={j}>
                                                                <div><span style={{ marginRight: '5rem' }}>UID: {user.UID}</span>  <span>Name: {user.name} </span> </div>
                                                            </ol>
                                                        ))}
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose} >
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal> </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default createGiftCard
