import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AuthState } from '../../../Atoms/AuthState'
import './ARecharge.css'
import Accordion from 'react-bootstrap/Accordion';
import toast, { Toaster } from "react-hot-toast";
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function AdminRecharge() {
  const authData = useRecoilValue(AuthState)
  const [user, setUser] = useState(null)
  const [upiId, setUpiId] = useState('')
  const [qrCode, setQrCode] = useState('')
  const[withdrawData ,  setWithdrawData] = useState(null)



  const handleQr = async (e) => {
    e.preventDefault()
    try {
      let uploadedBy = authData._id
      let token = authData.authToken;
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/uploadQrcode/${uploadedBy}`, { upiId, qrCode },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 201) {
        toast.success("Qr code uploaded!", { ...toastProps });
        setUpiId("")
        setQrCode("")
        console.log(response);

        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  const handleUser = async (userId) => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getUserDetails/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        console.log(response);
        setUser(response);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };
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
        setWithdrawData(response.data)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  const handlePayment = async (paymentId,status) => {
    try {
      let token = authData.authToken;
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/admin/confirm-payment/${paymentId}`,{status},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        toast.success("Recharge request confirmed", { ...toastProps });
        console.log(response);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  useEffect(() => { handlePaymentRequest() }, [])


  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <Toaster/>
          <form onSubmit={handleQr} className='form-rechrge' >
            <h3 className='text-centre'>Submit Qr Code</h3>
            <label >Enter Qr Code Link</label>

            <input type="text" value={qrCode} placeholder='Enter QR code' onChange={(e) => { setQrCode(e.target.value) }} />

            <label >Enter UPI Id</label>

            <input type="text" value={upiId} placeholder='Enter UPI Id' onChange={(e) => { setUpiId(e.target.value) }} />

            <button type='submit'>Submit</button>
          </form>
{withdrawData && withdrawData.map((item,i)=>(
          <Accordion key={i}>
              <Accordion.Item eventKey={i}>
                <Accordion.Header onClick={() => { handleUser(item.userId) }}>
                  <p style={{marginRight:"1.3rem"}}>User Id: {item.userId}</p>
                  <p style={{marginRight:"1.3rem"}}>Amount: {item.amount}</p>
                  <p style={{marginRight:"1.3rem"}}>Status: {item.status}</p>

                </Accordion.Header>
                <Accordion.Body>
                <p>UID: {user && user.data.data.userDetails.UID}</p>
                  <p>Phone: {user && user.data.data.userDetails.phoneNumber}</p>
                  <p>Upi ReferenceNo: {item.upiReferenceNo}</p>
                  <p>Upi Id: {item.upiId}</p>
                  <button onClick={()=>{handlePayment(item._id,'confirm')}}>Approve</button><button onClick={()=>{handlePayment(item._id,'cancel')}}>Reject</button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>))}




        </div>
      </div>
    </div>
  )
}

export default AdminRecharge
