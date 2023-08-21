import './Profile.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import {Link} from  'react-router-dom'
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
// import { UserDetails } from '../../Atoms/UserDetails'
// import { useRecoilValue } from 'recoil'
function Profile() {
    // const userData= useRecoilValue(UserDetails)
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
                    <div className="col-2">
                        <img src={ear} alt="" className="header_headphone" />
                    </div>
                </div>
            </div>
            <div className='profile-card'>
                <div className="container">
                    <div className="row">
                        <div className='col-4'><div className='img-cover'><img src={profileImg} alt="" /></div></div>
                        <div className='col-8'>
                            <div className='userData'>
                            <p>Member : 4581666</p>
                        <p>ID : 135468</p>
                        <p>Mobile : 7005643072</p>
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
                            <h2 style={{ color: '#fff',letterSpacing: 0.15,fontSize: 27,fontFamily: 'Montserrat',display:'flex', fontWeight: 600}}><img src={rupee} alt="" /> 25,000.00 <img src={reload} alt="" style={{marginLeft:10,}} /></h2>
                        </div>
                        
                        <div className="container">
                            <div className="row wr-btns">
                                <div className="col-6 "><button className='withdraw'>Withdraw</button></div>
                                <div className="col-6 "><button className='recharge'>Recharge</button></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="container">
                            <div className="color-btn">
                                <button className='promotion-btn'><div className='promotion'><img src={mic} alt="" />Promotion<img src={next} alt="" /></div></button>
                            </div>
                        </div>

                        <div className="container profileIcons">
                            <div className="row">
                                <div className="col-4">
                                    <div className='icon'><img src={document} alt="" /></div>
                                    <div className='description'>Bet Record</div>
                                </div>
                                <div className="col-4"  style={{marginTop:'.8rem'}}>
                                <div className='icon'><img src={list} alt="" /></div>
                                    <div className='description'>History Transaction</div>
                                </div>
                                <div className="col-4">
                                <div className='icon'><img src={bell} alt="" /></div>
                                    <div className='description'>
                                        Message
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container chart">
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={premium} alt="" /></div></div>
                                <div className='col-8 lvlContainer'>Membership Level <div className='lvl'>LV1</div></div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={shield} alt="" /></div></div>
                                <div className='col-8'>Account Security</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={marketing} alt="" /></div></div>
                                <div className='col-8 '>Promotion Mission </div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={gift} alt="" /></div></div>
                                <div className='col-8'>Gift Code</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={video} alt="" /></div></div>
                                <div className='col-8'>Beginner Tutorial</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={info} alt="" /></div></div>
                                <div className='col-8'>About</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><div className='profile-logo-Wrapper'><img src={customer} alt="" /></div></div>
                                <div className='col-8'>Customer Service</div>
                                <div className='col-2 backImg'><img src={next} alt="" /></div>
                            </div>
                        </div>
                </div>
                
            </div>
            <Nav/>
        </div>
    )
}

export default Profile
