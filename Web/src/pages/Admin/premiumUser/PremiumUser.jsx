import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { PremiumState } from '../../../Atoms/Premium';
import { AuthState } from '../../../Atoms/AuthState';
import '../AdminPrime/AdminPrime.css';
import Accordion from 'react-bootstrap/Accordion';
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

function PremiumUser() {
    const [amount, setAmount]=useState(0)

    const authData = useRecoilValue(AuthState);
    const [premiumState, setPremiumState] = useRecoilState(PremiumState);

    const handlePrimeRequest = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}admin/getPremiumUsers`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                setPremiumState(response.data);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };


    const handleDistribution = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}admin/franchisecommissions`,{amount}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                handlePrimeRequest()
                toast.success( 'Commission Successfully Distributed!', { ...toastProps })
                setAmount(0)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
        }
    };



    useEffect(() => {
        handlePrimeRequest();
    }, []);

    return (
        <div>
            <AdminNav />
            <div className='flex-div'>
                <Side />
                <div className='admin-rightSection'>
                    <div className='Amount-distribution-box'>
                        <h5>Enter Premium Member Distribution Amount</h5>
                        <div><input type="number" value={amount } onChange={(e)=>{setAmount(e.target.value)}}/></div>
                        <button onClick={handleDistribution}>SEND COMMISSION</button>

                    </div>

                    <Toaster />
                    {premiumState && premiumState.response && premiumState.response.getUsers.map((item, index) => (
                        <Accordion key={index}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header  className='admin-prime-head'>
                                    <div>user Id: {item.UID}</div>
                                    <div>Phone No: {item.phoneNumber}</div>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>user Id:   {item.UID}</p>
                                    <p>Phone No:   {item.phoneNumber}</p>
                                    <p>Wallet Amount:   {item.walletAmount}</p>
                                    <p>Winning Amount:   {item.winningAmount}</p>
                                    <p>Recharge Amount:   {item.winningAmount}</p>
                                    <p>Betting Amount:   {item.bettingAmount}</p>
                                    <p>Commission Amount:   {item.commissionAmount}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PremiumUser;
