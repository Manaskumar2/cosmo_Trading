import React,{useState} from 'react'
import './Recharge.css'
import { UserDetails } from '../../Atoms/UserDetails'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import back from '../../images/back-button 1.svg'
import reload from '../../images/reload 1.svg'
import wallet from '../../images/green-wallet.svg'
import rupee from '../../images/rupee.svg'
import { useNavigate } from 'react-router-dom'
import qr from './qr-code-scan 1.svg'
import money from './money-3 1.svg'
import icon from './Icon.svg'
import balance from './balance 1.svg'
import { useRecoilState } from 'recoil'
import {RechargeAmount} from '../../Atoms/RechargeAmount'


function Recharge() {
  // const history = useHistory();

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRoute, setSelectedRouteButton] = useState(null);

  const[rechargeAmount , setRechargeAmount] = useRecoilState(RechargeAmount)
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  
  };
  const handleRouteButtonClick = (buttonIndex) => {

    setSelectedRouteButton(buttonIndex)
  };
  const navigate = useNavigate()
  const userData = useRecoilValue(UserDetails)
  const handleBackButtonClick = () => {
    window.history.back(); 
  };
  return (
    <div className='recharge'>
      <div className="container-fluid PromoNav" >
        <div className="row">
          <Link onClick={handleBackButtonClick} className="col-2">
            <img src={back} alt="" />
          </Link>
          <div className="col-8">
            Recharge
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
            <h2 style={{ color: '#fff', letterSpacing: 0.15, fontSize: 27, fontFamily: 'Montserrat', display: 'flex', fontWeight: 600 }}><img src={rupee} alt="" /> {userData && userData.data.data.userDetails.walletAmount.toFixed(2)} <img src={reload} alt="" style={{ marginLeft: 10, }} /></h2>
          </div>
        </div>
      </div>
      <div className='text-center payment-heading'>Payment Method</div>
      <div className="container recharge-btn">
        <div className="row">
          <button
            className={`col-6 ${selectedRoute === 10 ? 'transaction' : ''}`}
            style={{ borderRight: "1px solid #024672", borderBottom: "1px solid #024672", borderRadius: "10px 0 0 0" }}
            onClick={() => handleRouteButtonClick(10)}
          >
            <img src={icon} alt="" />
            <p>Normal UPI</p>
          </button>
          <button
            className={`col-6 ${selectedRoute === 11 ? 'transaction' : ''}`}
            style={{ borderBottom: "1px solid #024672", borderRadius: "0 10px 0 0" }}
            onClick={() => handleRouteButtonClick(11)}
          >
            <img src={qr} alt="" />
            <p>Fast UPI</p>
          </button>
        </div>
      </div>
      <div className="container recharge-btn">
        <div className="row">
          <button
            className={`col-6 ${selectedRoute === 12 ? 'transaction' : ''}`}
            style={{ borderRight: "1px solid #024672", borderRadius: "0 0 0 10px " }}
            onClick={() => handleRouteButtonClick(12)}
          >
            <img src={balance} alt="" />
            <p>Bank Transfer</p>
          </button>
          <button
            className={`col-6 ${selectedRoute === 13 ? 'transaction' : ''}`}
            style={{ borderRight: "1px solid #024672", borderRadius: "0 0 10px 0 " }}
            onClick={() => handleRouteButtonClick(13)}
          >
            <img src={money} alt="" />
            <p>USDT</p>
          </button>
        </div>
      </div>

      <div className="container-fluid recharge-bottom">
      <div className="container">
        <div className="row money-btn-row">
          <button
            className={`col-3 ${selectedButton === 0 ? 'selected' : ''}`}
            onClick={() => {handleButtonClick(0),setRechargeAmount(500)}}
          >
            &#8377; 500
          </button>
          <button
            className={`col-3 ${selectedButton === 1 ? 'selected' : ''}`}
            onClick={() => {handleButtonClick(1),setRechargeAmount(1000)}}
          >
            &#8377; 1000
          </button>
          <button
            className={`col-3 ${selectedButton === 2 ? 'selected' : ''}`}
            onClick={() => {handleButtonClick(2),setRechargeAmount(5000)}}
          >
            &#8377; 5K
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row money-btn-row">
          <button
            className={`col-3 ${selectedButton === 3 ? 'selected' : ''}`}
            onClick={() =>{ handleButtonClick(3),setRechargeAmount(10000)}}
          >
            &#8377; 10K
          </button>
          <button
            className={`col-3 ${selectedButton === 4 ? 'selected' : ''}`}
            onClick={() =>{ handleButtonClick(4),setRechargeAmount(50000)}}
          >
            &#8377; 50K
          </button>
          <button
            className={`col-3 ${selectedButton === 5 ? 'selected' : ''}`}
            onClick={() => {handleButtonClick(5),setRechargeAmount(100000)}}
          >
            &#8377; 100K
          </button>
        </div>
      </div>
        <div className="container" style={{display:'flex', justifyContent:'center'}}>
        <div className="row input-row">
          <div className="col-2"><img src={rupee} alt="" /></div>
          <div className='col-10'><input value={rechargeAmount} type="number" onChange={(e)=>{setRechargeAmount(e.target.value)}} placeholder='Enter the amount'/></div>
        </div>

      </div>
      <div className="container">
        <div className="row recharge-Button">
          <button className="col-12" onClick={()=>{navigate('/upi')}}>Recharge Now</button>
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Recharge
