import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../components/modal/Auth';
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
import gift from './myCommission.svg';
import paper from './papers 1.svg';
import line from './Line 28.svg';
import { useNavigate } from 'react-router-dom';

function Promotion() {
    
    const [downline, setDownline]=useState(null)
    const [total, setTotal]=useState(0)
    const [totalTeam, setTotalTeam]=useState(null)
    const [commission,setCommission]=useState(0)
    const navigate=useNavigate()
    const handleBackButtonClick = () => {

        navigate(-1);
    };
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
    // const handleCommission = async () => {
    //     try {
    //         let token = auth.authToken
    //         let userId = auth._id
    //         const response = await axios.get(`${import.meta.env.VITE_API_URL}/commissionAmount/${userId}`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         }
    //         );
    //         if (response.status === 200) {
    //             localStorage.setItem('commission', JSON.stringify(response.data));
    //             setCommission(response.data)
    //             return response;
    //         }
    //     } catch (error) {
    //         if (error.response.status || error.status === 403) {
    //             localStorage.removeItem('authUserToken');
    //             navigate('/signIn')
    //             return response;
    //         }
    //         const errorMessage = error.response ? error.response.data.message : error.message;

    //     }
    // }
    const handleLevelData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getAllUsersAtLevel?levelNumber=${1}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setDownline(response.data);
            
            }
            return response
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
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
            if (error.response.status === 403) {
                navigate('/signIn')
                return response;
            }
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
    const handleDownline = async () => {
        try {
            let token = auth.authToken
            let userId = auth._id
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getTotalTeams/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                // toast.success("got user money data", { ...toastProps });
                console.log(response.data)
                setTotalTeam(response.data)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    useEffect(() => {
setCommission(JSON.parse(localStorage.getItem('commission')))
        handleLevelData()
        // handleCommission()
        handleReferrelData();
        handleUserdata();
         handleDownline()
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
                    <Link  className="col-2" onClick={handleBackButtonClick}>
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
                        <img src={gift} alt="" className='my-commision-img'/>
                        <p>My Commission Table</p>
                    </div>
                    <div className='container commission' style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                        <div>
                            {commission && <h2 className='text-center'>{commission.overallTotalCommission.toFixed(2)}</h2>}
                        <p className='text-center'>Total Commission</p>
                        </div>
                        <div>
                        {commission && <h2 className='text-center'>{commission.totalTodayCommission.toFixed(2)}</h2>}
                            <p className='text-center'>Today's Commission</p>
                        </div>
                    </div>
                    <div className='container commission'>
                        <div className="container">
                            {downline && downline.totalUsers && <div className="row commission-bot-row">
                                <div className="col-10">Number Of Direct Subordinates</div>
                                <div className="col-2">
                                    {downline.totalUsers} 
                                </div>
                            </div>}
                            {totalTeam &&  totalTeam.totalTeam && <div className="row commission-bot-row">
                                <div className="col-10">Total Invite Team </div>
                                <div className="col-2">
                                    {totalTeam.totalTeam}
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
                        <div className='container' style={{ paddingBottom: "2rem" }}>
                            <div className="row invitation-row"  >
                                {userData && <div className="col-10">Copy Invitation Link</div>}

                                <button onClick={copyLinkToClipboard} className="col-2"><img src={paper} alt="" /></button> 
                            </div>
                        </div>
                    </div>
                    <div className='container commission chart' style={{marginBottom:'6rem'}}>
                        <div className='promotion-heading-box text-center'><h2 style={{ color: '#fff' }} className='text-center'>Level Income</h2></div>
                        
                        <h4 style={{ color: '#fff',padding:'.5rem' }} className='text-center'>Distribution Commission of &#x20B9;100k</h4>
                        <h6 style={{ color: '#d4af37', }} className='text-center'>Commission Calculation Method(Grow Up & Rise Up)</h6>
                        <div className="row chat-head">
                            <div className="col-4 text-center">Agent Level</div>
                            <div className="col-4 text-center">Commission</div>
                            <div className="col-4 text-center">Value</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-1</div>
                            <div className="col-4 text-center">0.7%</div>
                            <div className="col-4 text-center">&#x20B9;700</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-2</div>
                            <div className="col-4 text-center">0.5%</div>
                            <div className="col-4 text-center">&#x20B9;500</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-3</div>
                            <div className="col-4 text-center">0.3%</div>
                            <div className="col-4 text-center">&#x20B9;300</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-4</div>
                            <div className="col-4 text-center">0.2%</div>
                            <div className="col-4 text-center">&#x20B9;200</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-5</div>
                            <div className="col-4 text-center">0.15%</div>
                            <div className="col-4 text-center">&#x20B9;150</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-6</div>
                            <div className="col-4 text-center">0.1%</div>
                            <div className="col-4 text-center">&#x20B9;100</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-7</div>
                            <div className="col-4 text-center">0.08%</div>
                            <div className="col-4 text-center">&#x20B9;80</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-8</div>
                            <div className="col-4 text-center">0.06%</div>
                            <div className="col-4 text-center">&#x20B9;60</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-9</div>
                            <div className="col-4 text-center">0.05%</div>
                            <div className="col-4 text-center">&#x20B9;50</div>
                        </div>
                        <div className="row ">
                            <div className="col-4 text-center">Level-10</div>
                            <div className="col-4 text-center">0.04%</div>
                            <div className="col-4 text-center">&#x20B9;40</div>
                        </div>
                        </div>                    
                </>}
            {activeTab == 2 && <MyTeam />}
            {activeTab == 3 && <PromotionHistory />}
            {activeTab == 4 && <CommissionHistory/>}
            <Nav style={{ marginTop: "2rem" }} />
            <Auth/>
        </div>
    )
}

export default React.memo(Promotion);

