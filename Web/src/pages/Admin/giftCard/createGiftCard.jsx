
import './Giftcard.css'
import gft from './Frame.png'
import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import Accordion from 'react-bootstrap/Accordion';

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function createGiftCard() {
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
                                <button className="col-12" onClick={claimCode}>SUBMIT</button>
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
                        <Accordion className=' gift-history'>
                            {data && data.map((item, i) => (
                                <Accordion.Item key={i} eventKey={i.toString()}>
                                    <Accordion.Header> <p style={{ width: '30rem', marginRight: '5rem' }}>Gift Code: {item.code}</p> <p style={{ width: '20rem', marginRight: '5rem' }}>Claimed By: {item.claimedByUsers.length}</p> <p>Remaining Claims: {item.maxClaim-item.claimedByUsers.length}</p> </Accordion.Header>
                                    <Accordion.Body>
                                        {item.claimedByUsers.map((user, j) => (
                                            <ol key={j}>
                                            <div><span style={{marginRight:'5rem'}}>UID: {user.UID}</span>  <span>Name: {user.name} </span> </div>
                                            </ol>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default createGiftCard
