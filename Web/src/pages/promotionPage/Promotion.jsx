import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import './Promotion.css';
import { UserDetails } from '../../Atoms/UserDetails';
import { AuthState } from '../../Atoms/AuthState';
import { Nav } from '../../components/ComponentExport';
import MyTeam from '../../components/myTeam/MyTeam';
import CommissionHistory from '../../components/commissionHistory/CommissionHistory';
import PromotionHistory from '../../components/promotionHistory/PromotionHistory';
import back from '../../images/back-button 1.svg';
import gift from '../../../../SVG/gift-box 1.svg';
import paper from './papers 1.svg';
import line from './Line 28.svg';

// /getReferralStats/:referralID
function Promotion() {
    const auth = useRecoilValue(AuthState)
    const [userData, setUserdata] = useRecoilState(UserDetails)
    const [activeTab, setActiveTab] = useState(1)
    const [referalLink, setReferalLink] = useState(() => {
        if (import.meta.env.VITE_LIVE_URL && userData?.data?.data?.userDetails?.referralCode) {
            return `${import.meta.env.VITE_LIVE_URL}/#/signUp?referral=${userData.data.data.userDetails.referralCode}`;
        } else {
            return null;
        }
    });

    const [referal, setReferal] = useState(null)
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);

    };
    const handleUserdata = async () => {

        try {
            let token = auth.authToken
            let UID = auth.UID
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID}`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                // toast.success("got user money data", { ...toastProps });
                setUserdata(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;

        }
    }
    const handleReferrelData = async () => {

        try {
            let referralID = userData.data.data.userDetails.referralCode
            let token = auth.authToken

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getReferralStats/${referralID}`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                // toast.success("got user money data", { ...toastProps });
                setReferal(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;

        }
    }
    useEffect(() => {

        // setTimeout(() => {
        handleReferrelData();
        handleUserdata();
        // }, 100);
    }, []);


    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = userData.data.data.userDetails.referralCode;
        document.body.appendChild(textField);
        textField.select();
        alert("Invitation Code Copied!")
        document.execCommand('copy');
        document.body.removeChild(textField);
    };
    const copyLinkToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = `${import.meta.env.VITE_LIVE_URL}/#/signUp?referral=${userData.data.data.userDetails.referralCode}`
        document.body.appendChild(textField);
        textField.select();
        alert("Invitation Link Copied!")
        document.execCommand('copy');
        document.body.removeChild(textField);
    };

    return (
        <div className='promotionContainer'>
            <div className="container-fluid PromoNav" >
                <div className="row">
                    <Link to='/' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Promotion
                    </div>
                    {/* <div className="col-2">
                        <img src={bill} alt="" className="header_headphone" />
                    </div> */}
                </div>
            </div>
            <div className='tab-btn-container row'>
                <button className={activeTab === 1 ? 'active-Tab col-3' : 'tab col-3'} onClick={() => { handleTabClick(1); }}>

                    <p>Data</p>
                </button>
                <button className={activeTab === 2 ? 'active-Tab col-3' : 'tab col-3'} onClick={() => { handleTabClick(2) }}>

                    <p>My Team</p>
                </button>
                <button className={activeTab === 3 ? 'active-Tab col-3' : 'tab col-3'} onClick={() => { handleTabClick(3) }}>
                    <p>History</p>
                </button>
                <button className={activeTab === 4 ? 'active-Tab col-3' : 'tab col-3'} onClick={() => { handleTabClick(4) }}>

                    <p>Salary History</p>
                </button>
            </div>
            {activeTab === 1 &&
                <>
                    <div className='gift'>
                        <img src={gift} alt="" />
                        <p>My Reward</p>
                    </div>
                    <div className='container commission'>
                        {userData && <h2 className='text-center'>{userData.data.data.userDetails.commissionAmount.toFixed(2)}</h2>}
                        <p className='text-center'>Total Commission</p>
                        {/* <div className="container">
                            <div className="row commission-row">
                                <div className="col-9">Direct Commission</div>
                                {userData && <div className="col-3">{userData.data.data.userDetails.commissionAmount.toFixed(2)}</div>}
                            </div>

                        </div> */}
                    </div>
                    <div className='container commission'>

                        <div className="container">
                            {userData && <div className="row commission-bot-row">
                                <div className="col-10">Number Of Direct Subordinates</div>
                                <div className="col-2">
                                    {userData.data.data.userDetails.downline.length}
                                </div>
                            </div>}
                            {userData && <div className="row commission-bot-row">
                                <div className="col-10">Total Invite </div>
                                <div className="col-2">
                                    {userData.data.data.userDetails.downline.length}
                                </div>
                            </div>}
                            <div className="row commission-bot-row">
                                <div className="col-10">Today’s Invite</div>
                                <div className="col-2">{referal ? referal.data.data.todayCount : 0}</div>
                            </div>
                            <div className="row commission-bot-row">
                                <div className="col-10">Weekly Invite</div>
                                <div className="col-2">{referal ? referal.data.data.weeklyCount : 0}</div>
                            </div>


                        </div>
                    </div>
                    <div className='container commission'>
                        <h4 style={{ color: '#fff' }} className='text-center'>Invitation Code</h4>
                        <div className='container'>
                            <div className="row invitation-row">
                                {userData && <div className="col-10">{userData.data.data.userDetails.referralCode}</div>}


                                <button onClick={copyToClipboard} className="col-2"><img src={paper} alt="" /></button>
                            </div>
                        </div>
                        <h4 style={{ color: '#fff' }} className='text-center'>Invitation Link</h4>
                        <div className='container' style={{ paddingBottom: "8rem" }}>
                            <div className="row invitation-row"  >
                                {userData && <div className="col-10">Copy Invitation Link</div>}

                                <button onClick={copyLinkToClipboard} className="col-2"><img src={paper} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </>}
            {activeTab == 2 && <MyTeam />}
            {activeTab == 3 && <PromotionHistory />}
            {activeTab == 4 && <CommissionHistory/>}

            <Nav style={{ marginTop: "2rem" }} />
        </div>
    )
}

export default React.memo(Promotion);

