import React from 'react';
import back from '../../images/back-button 1.svg';
import ear from '../../images/earphone.svg';
import './Premium.css';
import { Link } from 'react-router-dom';
import logo from './prime.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { AuthState } from '../../Atoms/AuthState';
import { PremiumState } from '../../Atoms/Premium';
import { useNavigate } from 'react-router-dom';

function Premium() {
    const navigate = useNavigate();
    const authData = useRecoilValue(AuthState);
    const [premiumState, setPremiumState] = useRecoilState(PremiumState);

    const handlePrimeRequest = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getPremiumUser`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setPremiumState(response);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    useEffect(() => {
        handlePrimeRequest();
    }, []);

    const isPremiumLessThan50 = premiumState && premiumState.data.premiumCount < 50;
    const isPremiumBetween50And100 =premiumState && premiumState.data.premiumCount >= 50 && premiumState.data.premiumCount < 100;
    const isPremiumBetween100And150 =premiumState && premiumState.data.premiumCount >= 100 && premiumState.data.premiumCount <= 150;

    return (
        <div className='premium'>
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
                <div className="join">
                    <img src={logo} alt="" />
                    <h5>Join Prime Membership &</h5>
                    <p>Get 0.5% of total trading commission</p>
                </div>
                <div className='premium-box' style={{ opacity: isPremiumLessThan50 ? 1 : 0.2 }}>
                    <div className='prime-data'>
                        <h5>0 TO 50</h5>
                        {isPremiumLessThan50 && (
                            <h5>Remaining seats {50 - premiumState.data.premiumCount}</h5>
                        )}
                        <h4>&#8377; 10,000</h4>
                    </div>
                    <div className='join-btn'>
                        <button onClick={() => navigate('/premiumApply')} disabled={!isPremiumLessThan50}>
                            Join Prime Membership
                        </button>
                    </div>
                </div>
                <div className='premium-box' style={{ opacity: isPremiumBetween50And100 ? 1 : 0.2 }}>
                    <div className='prime-data'>
                        <h5>50 TO 100</h5>
                        {isPremiumBetween50And100 && (
                            <h5>Remaining seats {100 - premiumState.data.premiumCount}</h5>
                        )}
                        <h4>&#8377; 20,000</h4>
                    </div>
                    <div className='join-btn'>
                        <button onClick={() => navigate('/premiumApply')} disabled={!isPremiumBetween50And100}>
                            Join Prime Membership
                        </button>
                    </div>
                </div>
                <div className='premium-box' style={{ opacity: isPremiumBetween100And150 ? 1 : 0.2 }}>
                    <div className='prime-data'>
                        <h5>100 TO 150</h5>
                        {isPremiumBetween100And150 && (
                            <h5>Remaining seats {150 - premiumState.data.premiumCount}</h5>
                        )}
                        <h4>&#8377; 30,000</h4>
                    </div>
                    <div className='join-btn'>
                        <button onClick={() => navigate('/premiumApply')} disabled={!isPremiumBetween100And150}>
                            Join Prime Membership
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premium;
