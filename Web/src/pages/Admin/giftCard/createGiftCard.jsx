
import './Giftcard.css'
import gft from './Frame.png'
import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';


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
                </div>
            </div>
        </div>
    )
}

export default createGiftCard
