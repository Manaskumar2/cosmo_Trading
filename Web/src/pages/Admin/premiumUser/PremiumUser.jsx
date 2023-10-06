import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import '../adminUserData/User.css'
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
    const [amount, setAmount]=useState('')

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
                setAmount('')
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
                        <div><input type="number" value={amount } onChange={(e)=>{setAmount(e.target.value)}} placeholder='Enter Amount'/></div>
                        <button onClick={handleDistribution}>SEND COMMISSION</button>

                    </div>

                    <Toaster />
                    {/* {premiumState && premiumState.response && premiumState.response.getUsers.map((item, index) => (
                        <Accordion key={index}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header  className='admin-prime-head'>
                                    <div>user Id: {item.UID}</div>
                                    <div>Phone No: {item.phoneNumber}</div>
                                    <p>Wallet Amount:   </p>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <p>UID:   </p>
                                            <p>Name:</p>
                                            <p>Phone No:  </p>
                                            <p>Wallet Amount:</p>
                                            <p>Commission Amount:   </p>
                                        </div>
                                        <div className='col-2' style={{textAlign:"right"}}>
                                            <p>{item.UID}</p>
                                            <p>{item.name}</p>
                                            <p>{item.phoneNumber}</p>
                                            <p>{item.walletAmount}</p>
                                            <p>{item.commissionAmount}</p>
                                        </div>
                                    
                                    
                                    
                                    
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))} */}
                    <table>
            <thead>
              <tr className='table-row'>
                <th>UID</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Commission Amount</th>
                <th>Wallet Amount</th>
              </tr>
            </thead>
            <tbody>
            {premiumState && premiumState.response && premiumState.response.getUsers.map((user, index) => (
                  <tr key={index} className='table-row'>
                    <td>{user.UID}</td>
                    <td>{user.name}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.commissionAmount}</td>
                    <td>{user.walletAmount}</td>
                    
                    

                  </tr>
                ))}
            </tbody>
          </table>
                </div>
            </div>
        </div>
    );
}

export default PremiumUser;
