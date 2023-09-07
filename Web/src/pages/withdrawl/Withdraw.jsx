import React, { useState } from 'react'
import './Withdraw.css'
import { UserDetails } from '../../Atoms/UserDetails'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import back from '../../images/back-button 1.svg'
import reload from '../../images/reload 1.svg'
import wallet from '../../images/green-wallet.svg'
import rupee from '../../images/rupee.svg'
import { useNavigate } from 'react-router-dom'
import money from '../../../../SVG/money-4 1.svg'
import icon from './Icon.svg'
import withdrawIcon from '../../../../SVG/withdraw 1.svg'
import walleticon from '../../../../SVG/wallet 2.svg'
import  notification from '../../../../SVG/notification-2 1.svg'
import coins from '../../../../SVG/coins 1.svg'
import { useRecoilState } from 'recoil'
import { RechargeAmount } from '../../Atoms/RechargeAmount'
import add from './add.svg'


function Withdraw() {
  const [withdraw, setWithdraw] = useState(0);
  const [selectedRoute, setSelectedRouteButton] = useState(true);

  const [rechargeAmount, setRechargeAmount] = useRecoilState(RechargeAmount)
  // const handleButtonClick = (buttonIndex) => {
  //   setSelectedButton(buttonIndex);

  // };
  const handleRouteButtonClick = (buttonIndex) => {

    setSelectedRouteButton(buttonIndex)
  };
  const navigate = useNavigate()
  const userData = useRecoilValue(UserDetails)
  return (
    <div className='recharge'>
      <div className="container-fluid PromoNav" >
        <div className="row">
          <Link to='/growUp' className="col-2">
            <img src={back} alt="" />
          </Link>
          <div className="col-8">
            Withdraw
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>

      <div className="wallet">
        <div className="container winWallet">
          <div className="row">
            <div className="col-8" style={{ marginBottom: "10px" }}>
              <h4 style={{ marginBottom: 3, color: '#6FC0EE', fontFamily: 'Montserrat', letterSpacing: 0.09, fontWeight: 600, }}>Total</h4>
              <p style={{ color: '#29CEE4', fontFamily: 'Montserrat' }}>Wallet balance</p>
            </div>
            <div className="col-4" style={{ textAlign: 'right' }}><img src={wallet} alt="" /></div>
            <h2 style={{ color: '#fff', letterSpacing: 0.15, fontSize: 27, fontFamily: 'Montserrat', display: 'flex', fontWeight: 600 }}><img src={rupee} alt="" /> {userData && userData.data.data.userDetails.walletAmount} <img src={reload} alt="" style={{ marginLeft: 10, }} /></h2>
          </div>
        </div>
      </div>
      <div className='text-center payment-heading'>Payment Method</div>
      <div className="container recharge-btn">
        <div className="row">
          <button
            className={`col-10 ${selectedRoute === false ? 'transaction' : ''}`}
            style={{ borderRight: "1px solid #024672", borderBottom: "1px solid #024672", borderRadius: "10px " }}
            onClick={() => setSelectedRouteButton(!selectedRoute)}
          >
            <img src={icon} alt="" />
            <p>Bank Card</p>
          </button>

        </div>
      </div>


      <div className="container-fluid recharge-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="row inputRow">
            <div className="col-2"><img src={rupee} alt="" /></div>
            <div className='col-10'><input value={withdraw} type="number" onChange={(e) => { setWithdraw(e.target.value) }} placeholder='Enter the amount' /></div>
          </div>
          {/* <button>Recharge Now</button> */}
        </div>
        <p className='payment-heading text-center'>Payout</p>
        <div className="container">
          <div className="row AddCard-Button">
            <button className="col-11" onClick={()=>{navigate('/bankCard')}}> <img src={add} alt="" /> Add Bank Card</button>
          </div>
        </div>
        <div className="container">
          <div className="row recharge-Button">
            <button className="col-12" onClick={() => { navigate('/upi') }}>Withdraw</button>
          </div>
        </div>
        <div className="container withdraw-chart">
        <div className='row'>
          <div className='col-2'><div className='profile-logo-Wrapper'><img src={money} alt="" /></div></div>
          <div className='col-10'>1. Rate 0%</div>
        </div>
        <div className='row'>
          <div className='col-2'><div className='profile-logo-Wrapper'><img src={walleticon} alt="" /></div></div>
          <div className='col-10'>2. Total Bet ₹ 59</div>
        </div>
        <div className='row'>
          <div className='col-2'><div className='profile-logo-Wrapper'><img src={withdrawIcon} alt="" /></div></div>
          <div className='col-10'>3.Withdraw Time 00:00-23:59</div>
        </div>
        <div className='row'>
          <div className='col-2'><div className='profile-logo-Wrapper'><img src={notification} alt="" /></div></div>
          <div className='col-10'>4.Daily Withdrawal Times 3</div>
        </div>
        <div className='row'>
          <div className='col-2'><div className='profile-logo-Wrapper'><img src={coins} alt="" /></div></div>
          <div className='col-10'>5. Withdrawal Amount Range 100-10000000</div>
        </div>
        <div className='row'>
          <div className='col-2'><div className='profile-logo-Wrapper'><img src={coins} alt="" /></div></div>
          <div className='col-10'>6. Withdrawal multiple of ₹10</div>
        </div>


      </div>
      </div>
     

    </div>
  )
}

export default Withdraw