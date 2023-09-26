import React from 'react'
import './BeginnerTutorial.css'
import Register from './Tutorial-Image/Register.jpg'
import Login from './Tutorial-Image/Login.jpg'
import Dashboard from './Tutorial-Image/Dashboard.jpg'
import Recharge from './Tutorial-Image/Recharge.jpg'
import Upi from './Tutorial-Image/Normal UPI.jpg'
import Upi1 from './Tutorial-Image/Normal UPI-1.jpg'
import GrowUp from './Tutorial-Image/Grow UP Game.jpg'
import Amount from './Tutorial-Image/Amount Popup.jpg'
import History from './Tutorial-Image/Game and My Game Record.jpg'
import Customer from './Tutorial-Image/Customer Service.jpg'
import Customer1 from './Tutorial-Image/Customer Service-1.jpg'
import Refer from './Tutorial-Image/Referal Link.jpg'
import Withdraw from './Tutorial-Image/Withdraw.jpg'
import BankCard from './Tutorial-Image/Bank Card.jpg'
import BankCard1 from './Tutorial-Image/Bank Card-1.jpg'
import BankCard2 from './Tutorial-Image/Bank Card-2.jpg'
function BeginnerTutorial() {
  return (
    <div >
      <div className='beginnerTutorial'>
        <div className='container '>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To Register?</h3>
              <p>1. Fill your name.</p>
              <p>2. Type 10 digit phone number.</p>
              <p>3. Set password minimum 8 character. Combination of Number, Special Symbol, Capital letter and Small letter.</p>
              <p>4. Type Referral Code.</p>
              <p>5. Agree the Privacy Policy.</p>
              <p>6. Click Register Button.</p>
            </div>
            <div className='tutorial-image-box'>
                <img src={Register} alt="register" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To Login?</h3>
              <p>1. Type 10 digit phone number.</p>
              <p>2. Type Password .</p>
              <p>3. Click Login Button.</p>
            </div>
            <div className='tutorial-image-box'>
                <img src={Login} alt="" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To Recharge?</h3>
              <p>1. Go to Recharge page Click on Normal Upi button and select the amount above or equal 500 Rs.</p>
              <p>2. Click on Recharge Now button.</p>
              <p>3. Copy the Upi id or Scan the QR code and complete the payment. </p>
              <p>4. Enter the Transaction ID and Click on Submit button. </p>
              <p>( After Confirmation Your Wallet Will Be Credited With Amount ) </p>
            </div>
            <div className='tutorial-image-box'>
                <img src={Dashboard} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={Recharge} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={Upi} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={Upi1} alt="" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To Play Game?</h3>
              <p>1. Click on GrowUp Banner.</p>
              <p>2. Then Click on Alpha or Beta button which you want to place bet.</p>
              <p>3. Select the amount and Click on red button to place bet.</p>
            </div>
            <div className='tutorial-image-box'>
                <img src={GrowUp} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={Amount} alt="" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To See Result?</h3>
              <p>1. After every round Game Record section and Your betting history will be updated on My Game Record section..</p>

            </div>
            <div className='tutorial-image-box'>
                <img src={History} alt="" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To Refer A Friend?</h3>
              <p>1. Goto Promotion Page.</p>
              <p>2. Click on Copy Referral Link. the link will be copied then send the link to your friend to join Cosmo Trade..</p>

            </div>
            <div className='tutorial-image-box'>
                <img src={Refer} alt="" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How to Contact Us?</h3>
              <p>1. Goto profile page.</p>
              <p>2. Click on Customer Service</p>
              <p>3. A Chat will open you can send your query.</p>

            </div>
            <div className='tutorial-image-box'>
                <img src={Customer} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={Customer1} alt="" />
            </div>
          </div>
          <div className='tutorial-section'>
            <div className='tutorial-text-content'>
              <h3>How To Withdraw?</h3>
              <p>1. Goto Wallet page.</p>
              <p>2. Click on withdraw button.</p>
              <p>3. Click on Bank card , fill the form and submit the data(If you not added your bank card deatls).</p>
              
              <p>4. Select bank card option.</p>
              <p>5. Fill the amount which you want to withdraw (MULTIPLE OF 100).</p>
              <p>6. Click on WIthdraw Button.</p>
              <p>( After Verification Amount Will Credited On Your Account)</p>

            </div>
            <div className='tutorial-image-box'>
                <img src={Withdraw} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={BankCard} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={BankCard1} alt="" />
            </div>
            <div className='tutorial-image-box'>
                <img src={BankCard2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginnerTutorial
