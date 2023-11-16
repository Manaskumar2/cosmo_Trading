import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import '../adminUserData/User.css'
import { useRecoilValue, useRecoilState } from 'recoil';
import { PremiumState } from '../../../Atoms/Premium';
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import '../AdminPrime/AdminPrime.css';
import toast, { Toaster } from "react-hot-toast";
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

function PremiumUser() {
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
  

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    const authData = useRecoilValue(AdminAuthState);
    const [premiumState, setPremiumState] = useState(null);

    const handlePrimeRequest = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/getPremiumUsers?&page=${currentPage}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                setPremiumState(response.data);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
        }
    };

    const handleDistribution = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/franchisecommissions`, { amount }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                handlePrimeRequest()
                toast.success('Commission Successfully Distributed!', { ...toastProps })
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
    }, [currentPage]);

    
    const handleLogin = async (phoneNumber, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/signIn`, {
                phoneNumber,
                password,
            });

            if (response.status === 200) {
                toast.success('Welcome to our Gaming Zone', { ...toastProps });
                sessionStorage.setItem('authUserToken', JSON.stringify(response.data.data));

                navigate('/');
                window.location.reload();
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
        }
    };


    return (
        <div>
            <AdminNav />
            <div className='flex-div'>
                <Side />
                <div className='admin-rightSection'>
                    <div className='Amount-distribution-box'>
                        <h5>Enter Premium Member Distribution Amount</h5>
                        <div><input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder='Enter Amount' /></div>
                        <button onClick={handleDistribution}>SEND COMMISSION</button>
                    </div>
                    <Toaster />
                    <table>
                        <thead>
                            <tr className='table-row'>
                                <th>Serial No.</th>
                                <th>UID</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>Commission Amount</th>
                                <th>Wallet Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {premiumState &&  premiumState.response &&  premiumState.response.getUsers && premiumState.response.getUsers.map((user, index) => (
                                <tr key={index} className='table-row'>
                                    <td>{index + 1}</td>
                                    <td>{user.UID}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.commissionAmount.toFixed(2)}</td>
                                    <td>{user.walletAmount.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => { handleLogin(user.phoneNumber, user.password) }} className='login-user'>
                                            Login
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    {premiumState && premiumState.response && premiumState.response.totalPages &&  <div className='pagination-prime'>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>-</button>
            <span>{currentPage} / {premiumState &&  premiumState.response &&  premiumState.response.getUsers && premiumState.response.totalPages}</span>
            <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === premiumState.response.totalPages}
>
    +
</button>

          </div>}
                </div>
            </div>
        </div>
    );
}

export default PremiumUser;
