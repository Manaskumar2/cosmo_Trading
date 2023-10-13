import './Profile.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'
import profileImg from '../../../../SVG/profile 2.svg'
import wallet from '../../images/green-wallet.svg'
import rupee from '../../images/rupee.svg'
import reload from '../../images/reload 1.svg'
import mic from '../../../../SVG/mic.svg'
import next from '../../../../SVG/next.svg'
import bell from '../../../../SVG/bell 1.svg'
import list from '../../../../SVG/list 1.svg'
import document from '../../../../SVG/document 1.svg'
import premium from '../../../../SVG/premium 1.svg'
import shield from '../../../../SVG/shield 1.svg'
import gift from '../../../../SVG/gift-card 1.svg'
import marketing from '../../../../SVG/marketing-2 1.svg'
import video from '../../../../SVG/video-2 1.svg'
import info from '../../../../SVG/information-button 1.svg'
import customer from '../../../../SVG/customer-service 1.svg'
import Nav from '../../components/Nav/Nav'
import { AuthState } from '../../Atoms/AuthState'
import { UserDetails } from '../../Atoms/UserDetails'
import { useRecoilValue, useRecoilState } from 'recoil'
import {AiOutlineEdit} from 'react-icons/ai'
import {ImCheckmark} from 'react-icons/im'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import prime from './prime.svg'
function Profile() {


    const [edit , setEdit]=useState(true)
    const [userName , setuserName]=useState('')
    const navigate = useNavigate()
    const [auth, setAuth] = useRecoilState(AuthState)
    const [userData, setUserData] = useRecoilState(UserDetails)

    const logout = () => {
        localStorage.removeItem('authUserToken');
        setAuth(null)
        navigate('/signIn')
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

                setUserData(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }

    }
    const handleUserName = async () => {
        try {
            let token = auth.authToken
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/updateUserProfile`, { userName } , {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                handleUserdata()
                setEdit(!edit)
                handleUserdata()
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }

    }
    useEffect(() => {
        handleUserdata();
    }, [])


    return (
        <div className='profileContainer'>

            <div className="container ProNav">
                <div className="row">
                    <Link to='/' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Profile
                    </div>
                    <div className="col-2" style={{ textAlign: "right" }} onClick={() => { navigate('/customerCare') }}>
                        <img src={ear} alt="" className="header_headphone" />
                    </div>
                </div>
            </div>
            <div className='profile-card'>
                <div className="container">
                    <div className="row">
                        <div className='col-4'><div className='img-cover'><img src={profileImg} alt="" /></div>
                        
                        {userData && userData.data.data.userDetails.isPremiumUser===true && <img src={prime} alt="" className='prime-icon'/>}
                        </div>
                        
                        <div className='col-8'>
                            <div className='userData'>
                            {!edit ? (
        <div>
            <p>Name : <input type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}} className='name-input'/>  <span onClick={handleUserName}><ImCheckmark style={{color:'#1B92AC',fontSize:"1rem"}}/></span></p>
        </div>
    ) : (
        <div>
            <p>Name : {userData && userData.data.data.userDetails.name}  <span onClick={() => setEdit(!edit)}><AiOutlineEdit style={{color:'#1B92AC',fontSize:"1.4rem"}}/></span></p>
        </div>
    )}

                                <p>ID : {auth.UID}</p>
                                <p>Mobile :{auth.phoneNumber}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="wallet listing-wrapper">
                    {/* <div className="container winWallet">
                    <div className="row">
                        <div className="col-8" style={{ marginBottom: "10px" }}>
                            <h4 style={{marginBottom:3, color: '#6FC0EE',fontFamily: 'Montserrat',letterSpacing: 0.09, fontWeight:600, }}>Total</h4>
                            <p style={{ color: '#29CEE4',fontFamily: 'Montserrat' }}>Wallet balance</p>
                            </div>
                            <div className="col-4" style={{textAlign:'right'}}><img src={wallet} alt="" /></div>
                            <h2 style={{ color: '#fff',letterSpacing: 0.15,fontSize: 27,fontFamily: 'Montserrat',display:'flex', fontWeight: 600}}><img src={rupee} alt="" />{userData && userData.data.data.userDetails.walletAmount} <img src={reload} alt="" style={{marginLeft:10,}} /></h2>
                        </div>
                        
                        <div className="container">
                            <div className="row wr-btns">
                                <div className="col-6 "><button className='withdraw'>Withdraw</button></div>
                                <div className="col-6 "><button className='recharge'>Recharge</button></div>
                            </div>
                        </div>
                        
                    </div> */}
                    <div className="container">
                        <div className="color-btn">
                            <button className='promotion-btn' onClick={() => { navigate("/promotion") }}><div className='promotion'><img src={mic} alt="" />Promotion<img src={next} alt="" /></div></button>
                        </div>
                    </div>

                    {/* <div className="container profileIcons">
                            <div className="row">
                                <div className="col-4">
                                    <div className='icon'><img src={document} alt="" /></div>
                                    <div className='description'>Bet Record</div>
                                </div>
                                <div className="col-4"  style={{marginTop:'.8rem',cursor:'pointer'}} onClick={()=>{navigate("/transaction")}}>
                                <div className='icon'><img src={list} alt="" /></div>
                                    <div className='description'>History Transaction</div>
                                </div>
                                <div className="col-4" onClick={()=>{navigate("/message")}}>
                                <div className='icon'><img src={bell} alt="" /></div>
                                    <div className='description'>
                                        Message
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    <div className="container chart">
                        <div className='row' onClick={() => { navigate("/premium") }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={premium} alt="" /></div></div>
                            <div className='col-8 lvlContainer'>Prime Membership <div className='lvl'>LV1</div></div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row'>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={shield} alt="" /></div></div>
                            <div className='col-8' onClick={() => { navigate("/security") }}>Account Security</div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row' onClick={() => { navigate("/promotion") }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={marketing} alt="" /></div></div>
                            <div className='col-8 '>Promotion Mission </div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row' onClick={() => { navigate('/gift') }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={gift} alt="" /></div></div>
                            <div className='col-8'>Gift Code</div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row' onClick={() => { navigate("/beginnerTutorial") }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={video} alt="" /></div></div>
                            <div className='col-8' >Beginner Tutorial</div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row' onClick={() => { navigate("/about") }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={info} alt="" /></div></div>
                            <div className='col-8' >About</div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row' onClick={() => { navigate("/customerCare") }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={customer} alt="" /></div></div>
                            <div className='col-8' >Customer Service</div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        <div className='row' onClick={() => { navigate("/walletTransfer") }}>
                            <div className='col-2'><div className='profile-logo-Wrapper'><img src={customer} alt="" /></div></div>
                            <div className='col-8' >Wallet to Wallet Transfer</div>
                            <div className='col-2 backImg'><img src={next} alt="" /></div>
                        </div>
                        {/* <div className='row'onClick={()=>{navigate('/admin/home')}}>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={customer} alt="" /></div></div>
                                <div className='col-8' >Admin Panel</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="color-btn">
                        <button className='promotion-btn' style={{ background: 'linear-gradient(140deg, #C82F36 0%, #EC4E56 100%)', marginTop: "3rem", marginBottom: '8rem' }} onClick={logout}><div className='promotion'>Log Out</div></button>
                    </div>
                </div>

            </div>
            <Nav />
        </div>
    )
}

export default Profile
