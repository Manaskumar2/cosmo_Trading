import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AuthState } from '../../../Atoms/AuthState'
import './ARecharge.css'

 
function AdminRecharge() {
  const authData = useRecoilValue(AuthState)
  const [upiId,setUpiId]=useState('')
  const [qrCode,setQrCode]=useState('')



    const handleQr = async (e) => {
      e.preventDefault()
    try {
      let uploadedBy=authData._id
      let token = authData.authToken;
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/uploadQrcode/${uploadedBy}`,{upiId,qrCode},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 201) {
        setUpiId("")
        setQrCode("")
        console.log(response);

        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
    const handlePaymentRequest = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/payment-request`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        console.log(response);

        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  useEffect(()=>{handlePaymentRequest()},[])


  return (
    <div>
      <AdminNav/>
      <div className='flex-div'>
          <Side/>
          <div className='admin-rightSection'>
          <form onSubmit={handleQr} className='form-rechrge' >
            <h3 className='text-centre'>Submit Qr Code</h3>
            <label >Enter Qr Code Link</label>

          <input type="text" value={qrCode} placeholder='Enter QR code' onChange={(e)=>{setQrCode(e.target.value)}}/>

          <label >Enter UPI Id</label>

          <input type="text" value={upiId} placeholder='Enter UPI Id' onChange={(e)=>{setUpiId(e.target.value)}}/>

          <button type='submit'>Submit</button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default AdminRecharge
