import React from 'react'
import './PremiumApply.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AuthState } from '../../Atoms/AuthState'
import { PremiumState } from '../../Atoms/Premium'


function PremiumApply() {
    const authData=useRecoilValue(AuthState)
    const premium = useRecoilValue(PremiumState);
    const [amount, setPremiumMoney] = useState(null);
    const [transactionId, settransactionId] = useState('');

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

    const handlePrimeRequest = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/applyPremium`,{amount,transactionId},
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            );
            if (response.status === 201) {
                console.log(response);
                settransactionId("")
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }






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
            </div>
            <div className='Premium-Body'>
                <p>Transaction Amount</p>
                <input type="text" value={amount} disabled />
                <p>Transaction Id</p>
                <input type="text" placeholder='Enter Transaction Id' onChange={(e)=>{settransactionId(e.target.value)}}/>
                <button onClick={handlePrimeRequest}>Submit</button>


            </div>
        </div>
    )
}

export default PremiumApply
