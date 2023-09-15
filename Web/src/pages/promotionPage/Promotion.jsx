import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import './Promotion.css';
import { UserDetails } from '../../Atoms/UserDetails';
import { AuthState } from '../../Atoms/AuthState';
import { Nav } from '../../components/ComponentExport';
import MyTeam from '../../components/myTeam/MyTeam';
import Tutorial from '../../components/tutorial/Tutorial';
import PromotionHistory from '../../components/promotionHistory/PromotionHistory';
import bill from './bill.svg';
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
    console.log(userData);
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
                console.log(response);
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
                console.log(response);
                console.log(referal);
                setReferal(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;

        }
    }
    useEffect(() => {
        handleUserdata();
        setTimeout(() => {
          handleReferrelData();
        }, 1500);
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

                    <p>Tutorial</p>
                </button>
            </div>
            {activeTab === 1 &&
                <>
                    <div className='gift'>
                        <img src={gift} alt="" />
                        <p>My Reward</p>
                    </div>
                    <div className='container commission'>
                        {userData && <h2 className='text-center'>{userData.data.data.userDetails.winningAmount}</h2>}
                        <p className='text-center'>Total Winning</p>
                        <div className="container">
                            <div className="row commission-row">
                                <div className="col-10">Direct Commission</div>
                                {userData && <div className="col-2">{userData.data.data.userDetails.commissionAmount}</div>}
                            </div>

                        </div>
                    </div>
                    <div className='container commission'>

                        <div className="container">
                            {userData && <div className="row commission-bot-row">
                                <div className="col-10">Number Of Direct Subordinates</div>
                                <div className="col-2">
                                    {userData.data.data.userDetails.downline.length}
                                </div>
                            </div>}
                            <div className="row commission-bot-row">
                                <div className="col-10">Today’s Invite</div>
                                {referal && <div className="col-2">{referal.data.data.todayCount}</div>}
                            </div>
                            <div className="row commission-bot-row">
                                <div className="col-10">Weekly Invite</div>
                                {referal && <div className="col-2">{referal.data.data.weeklyCount}</div>}
                            </div>
                            <div className="row commission-bot-row">
                                <div className="col-10">Total Commission For The Week</div>
                                <div className="col-2">0</div>
                            </div>
                            {userData && <div className="row total-commission">
                                <div className="col-10">Total Commission </div>
                                <div className="col-2 text-center">{userData.data.data.userDetails.commissionAmount}</div>
                            </div>}
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
                        <div className='container' style={{paddingBottom:"8rem"}}>
                            <div className="row invitation-row"  >
                                {userData && <div className="col-10">Copy Invitation Link</div>}
                                
                                <button onClick={copyLinkToClipboard} className="col-2"><img src={paper} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='table-heading'>
                        <h5 className='text-center heading-amount'>Rebate Amount Corresponding Table</h5>
                        <img src={line} alt="line" className='line' />
                    </div> */}
                    {/* <div className="table-responsive " style={{paddingBottom:"8rem"}}>
                        <table class="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>Agent Level</th>
                                    <th>Total Referral</th>
                                    <th>Total Bet</th>
                                    <th>Recharge</th>
                                </tr>
                            </thead>
                            <tbody className='tableBodyRow' >
                                <tr>
                                    <td>0LV</td>
                                    <td style={{ paddingLeft: 0 }}>0</td>
                                    <td><h5><i className="icon-rupee"></i> 0</h5></td>
                                    <td><h6>0</h6></td>
                                </tr>
                                <tr>
                                    <td >1LV</td>
                                    <td style={{ paddingLeft: 0 }}>5</td>
                                    <td><h5><i className="icon-rupee"></i>50000</h5></td>
                                    <td><h6>10000</h6></td>
                                </tr>

                                <tr>
                                    <td >2LV</td>
                                    <td style={{ paddingLeft: 0 }}>10</td>
                                    <td><h5><i className="icon-rupee"></i> 2500000</h5></td>
                                    <td><h6>50000</h6></td>
                                </tr>
                                <tr>
                                    <td >3LV</td>
                                    <td style={{ paddingLeft: 0 }}>15</td>
                                    <td><h5><i className="icon-rupee"></i>3500000</h5></td>
                                    <td><h6>700000</h6></td>
                                </tr>
                                <tr>
                                    <td >4LV</td>
                                    <td style={{ paddingLeft: 0 }}>20</td>
                                    <td><h5><i className="icon-rupee"></i>5000000</h5></td>
                                    <td><h6>1000000</h6></td>
                                </tr>
                                <tr>
                                    <td >5LV</td>
                                    <td style={{ paddingLeft: 0 }}>25</td>
                                    <td><h5><i className="icon-rupee"></i>1000000</h5></td>
                                    <td><h6>1200000</h6></td>
                                </tr>
                                <tr>
                                    <td >6LV</td>
                                    <td style={{ paddingLeft: 0 }}>30</td>
                                    <td><h5><i className="icon-rupee"></i>1500000</h5></td>
                                    <td><h6>15000000</h6></td>
                                </tr>


                            </tbody>
                        </table>
                    </div> */}
                    {/* <div className='table-heading'>
                        <h5 className='text-center heading-amount'>Commission Calculation Method (Lottery)</h5>
                        <img src={line} alt="line" className='line' />
                    </div>
                    <div className="table-responsive">
                        <table class="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>Hierarchy <p className='table-subHeading'>Rebate Ratio</p></th>
                                    <th>Tire 1 <p className='table-subHeading'>commission</p></th>
                                    <th>Tire 2 <p className='table-subHeading'>commission</p></th>
                                    <th>Tire 3 <p className='table-subHeading'>commission</p></th>

                                </tr>
                            </thead>
                            <tbody className='tableBodyRow'>
                                <tr>
                                    <td>0LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>1LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>2LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>3LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>4LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>5LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>6LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>



                            </tbody>
                        </table>
                    </div> */}
                </>}
            {activeTab == 2 && <MyTeam />}
            {activeTab == 3 && <PromotionHistory />}
            {activeTab == 4 && <Tutorial />}

            <Nav style={{ marginTop: "2rem" }} />
        </div>
    )
}

export default React.memo(Promotion);

