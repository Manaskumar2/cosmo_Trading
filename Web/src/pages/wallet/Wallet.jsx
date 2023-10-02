import './Wallet.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import {Link , useNavigate} from  'react-router-dom'
import profileImg from '../../../../SVG/profile 2.svg'
import wallet from '../../images/green-wallet.svg'
import rupee from '../../images/rupee.svg'
import reload from '../../images/reload 1.svg'
// import next from '../../../../SVG/next.svg'
import Nav from '../../components/Nav/Nav'
import { AuthState } from '../../Atoms/AuthState'
import { UserDetails } from '../../Atoms/UserDetails'
import { useRecoilValue, useRecoilState } from 'recoil'
import axios from 'axios'
 import { useEffect } from 'react'
 import next from '../../../../SVG/next.svg'
import wallet1 from './wallet-2 1.svg'
import wallet2 from './wallet-3 1.svg'
import { WithdrawHistory } from '../../Atoms/WithdrawHistory'
function Wallet() {
    const navigate = useNavigate()
    const auth= useRecoilValue(AuthState )
    const [userData , setUserData]=useRecoilState(UserDetails )
    const [withdrawHistory , setWithdrawHistory]=useRecoilState(WithdrawHistory)

    const handleUserdata = async () => {
        try {
            let token = auth.authToken
            let UID = auth.UID
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID}`,  {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                // toast.success("got user money data", { ...toastProps });
                console.log(response);
                setUserData(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;

        }
    }
    const handleWithdrawHistory = async () => {
        try {
            let token = auth.authToken
            let userId = auth._id
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getWithdrawalHistory/${userId}`,  {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                // toast.success("got user money data", { ...toastProps });
                console.log(response);
                setWithdrawHistory(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;

        }
        
    }
    useEffect(()=>{handleWithdrawHistory();handleUserdata()},[])
    return (
        <div className='WalletContainer'>
            
            <div className="container ProNav">
                <div className="row">
                    <Link to='/' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Wallet
                    </div>
                    <div className="col-2" style={{textAlign:"right"}} onClick={()=>{navigate('/customerCare')}}>
                        <img src={ear} alt="" className="header_headphone" />
                    </div>
                </div>
            </div>
            <div className='wallet-card'>
                <div className="container">
                    <div className="row wallet-pro-row">
                        <div className='col-4'><div className='img-cover'><img src={profileImg} alt="" /></div></div>
                        <div className='col-8'>
                            <div className='userData'>
                            
                        <p>ID : {auth.UID}</p>
                        <p>Mobile :{auth.phoneNumber}</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="wallet">
                <div className="container winWallet">
                    <div className="row">
                        <div className="col-8" style={{ marginBottom: "10px" }}>
                            <h4 style={{marginBottom:3, color: '#6FC0EE',fontFamily: 'Montserrat',letterSpacing: 0.09, fontWeight:600, }}>Total</h4>
                            <p style={{ color: '#29CEE4',fontFamily: 'Montserrat' }}>Wallet balance</p>
                            </div>
                            <div className="col-4" style={{textAlign:'right'}}><img src={wallet} alt="" /></div>
                            <h2 style={{ color: '#fff',letterSpacing: 0.15,fontSize: 27,fontFamily: 'Montserrat',display:'flex', fontWeight: 600}}><img src={rupee} alt="" />{userData && userData.data.data.userDetails.walletAmount.toFixed(2)} <img src={reload} alt="" style={{marginLeft:10,}} onClick={handleUserdata}/></h2>
                        </div>
                        <div className="container">
                            <div className="row history-row">
                                <div className="col-6">
                                    <h6>History Withdraw</h6>
                                    {withdrawHistory && <p>&#8377; {withdrawHistory.data.totalWithdrawAmount}</p>}
                                    
                                    
                                </div>
                                <div className="col-6">
                                <h6>Today's Withdraw</h6>
                                {withdrawHistory && <p>&#8377; {withdrawHistory.data.todayTotalWithdrawAmount}</p>}
                                </div>
                            </div>
                        </div>
                        

                        
                        
                    </div>
                    
                    <div className="container ">
                            <div className="row wr-btns" style={{borderTop:"0"}}>
                                <div className="col-6 "><button className='withdraw' onClick={()=>{navigate("/withdraw")}}>Withdraw</button></div>
                                <div className="col-6 "><button className='recharge' onClick={()=>{navigate("/recharge")}}>Recharge</button></div>
                            </div>
                        </div>

                        <div className="container chart" style={{marginBottom:"8rem"}}>
                        <div className='row' onClick={()=>{navigate('/rechargeRecord')}}>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={wallet1} alt="" /></div></div>
                                <div className='col-8 lvlContainer'>Recharge Record </div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                        <div className='row' onClick={()=>{navigate('/withdrawRecord')}}>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={wallet2} alt="" /></div></div>
                                <div className='col-8 lvlContainer'>Withdraw Record</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                        </div>
                </div>
                
            </div>
            <Nav/>
        </div>
    )
}

export default Wallet
