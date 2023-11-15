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
    const usersPerPage = 20;

    const authData = useRecoilValue(AdminAuthState);
    const [premiumState, setPremiumState] = useRecoilState(PremiumState);

    const handlePrimeRequest = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/getPremiumUsers`,
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
    }, []);
    const handleIncreasePage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(premiumState.response.getUsers.length / usersPerPage)));
    };
    const totalPages = premiumState && premiumState.response && premiumState.response.getUsers && Math.ceil(premiumState.response.getUsers.length / usersPerPage);
    const handleDecreasePage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
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

    // Calculate current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = premiumState && premiumState.response && premiumState.response.getUsers.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                            {currentUsers && currentUsers.map((user, index) => (
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
                    <div className="pagination-prime">
                        <button onClick={handleDecreasePage}>-</button>
                        <span>{currentPage}/{totalPages}</span>
                        <button onClick={handleIncreasePage}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PremiumUser;
