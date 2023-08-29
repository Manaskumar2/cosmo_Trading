import ac from './bank-account 1.svg'
import './BankCard.css'
import back from '../../images/back-button 1.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useRecoilValue} from 'recoil'
import { AuthState } from '../../Atoms/AuthState'
import { useNavigate } from 'react-router-dom'
function BankCard() {
  const navigate =useNavigate()
  const [bankName, setbankName] = useState('')
  const [accountHolderName, setaccountHolderName] = useState('')
  const [bankAccountNo, setbankAccountNo] = useState(0)
  const [city, setcity] = useState('')
  const [ifscCode, setifscCode] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState(0)
  const [bankBranchAddress, setbankBranchAddress] = useState('')

  const auth = useRecoilValue(AuthState)

  const handleBankData = async (e) => {
    e.preventDefault();
    try {
      let token = auth.authToken
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/createbankAccount`, {
        bankName,
        accountHolderName,
        bankAccountNo,
        city,
        ifscCode,
        email,
        bankBranchAddress,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      }
      );
      if (response.status === 201) {
        console.log(response);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      console.log(errorMessage);
    }
  }

  return (
    <div className='bankCard'>
      <div className="container-fluid PromoNav" >
        <div className="row">
          <Link to='/withdraw' className="col-2">
            <img src={back} alt="" />
          </Link>
          <div className="col-8">
            Promotion
          </div>
        </div>
      </div>
      <div className='bankCardbody'>

        <div className="container">
          <div className="row bank-card-head">
            <div className="col-2"><img src={ac} alt="" /></div>
            <div className="col-10">Add Bank Account</div>
          </div>
        </div>


        <div className="form-container">
          <form onSubmit={handleBankData}>
            <div className='bank-Card-box'>
              <label className='label'>Bank Name</label>
              <input type="text" placeholder='It is required' value={bankName} onChange={(e) => { setbankName(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>Your Full</label>
              <input type="text" placeholder='It is required' value={accountHolderName} onChange={(e) => { setaccountHolderName(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>Bank Account Number</label>
              <input type="number" placeholder='It is required' value={bankAccountNo} onChange={(e) => { setbankAccountNo(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>City</label>
              <input type="text" placeholder='It is required' value={city} onChange={(e) => { setcity(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>IFSC Code</label>
              <input type="text" placeholder='It is required' value={ifscCode} onChange={(e) => { setifscCode(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>Email Address</label>
              <input type="email" placeholder='It is required' value={email} onChange={(e) => { setemail(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>Phone Number</label>
              <input type="text" placeholder='It is required' value={phone} onChange={(e) => { setphone(e.target.value) }} />
            </div>

            <div className='bank-Card-box'>
              <label className='label'>Bank Branch Address</label>
              <input type="text" placeholder='It is required' value={bankBranchAddress} onChange={(e) => { setbankBranchAddress(e.target.value) }} />
            </div>

            <div className="container">
              <div className="row withdraw-Button">
                <button className="col-12" type='submit'>Withdraw</button>
              </div>
            </div>
          </form>
        </div>
      </div></div>
  )
}

export default BankCard
