import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import './AWithdraw.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AuthState } from '../../../Atoms/AuthState'
import Accordion from 'react-bootstrap/Accordion';

function AdminWithdraw() {
  const [user, setUser] = useState(null)
  const [withDrawdata, setWithdrawData] = useState(null)
  const [bankData, setBankData] = useState(null)

  const authData = useRecoilValue(AuthState)

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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getWithdrawRequest`,
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
  const handleBankData = async (userId) => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getbankDetails/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        console.log(response);
        setBankData(response)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  const handleConfirm = async (requestId, status) => {
    try {
      let token = authData.authToken;
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/admin/conformWithdrawRequest/${requestId}`, { newStatus: status },
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
  useEffect(() => { handlePaymentRequest() }, [])
  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          {withDrawdata && withDrawdata.data.map((item, index) => (
            <Accordion key={index}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header onClick={() => { handleBankData(item.userId); handleUser(item.userId) }} >
                  <div className='admin-Widthdraw-box'>
                    <p>User Id : {item.userId}</p>
                    <p>Amount : {item.withdrawAmount}</p>
                    <p>Status : {item.status}</p>
                  </div>

                </Accordion.Header>
                <Accordion.Body>
                  <div className='flex-div'>

                    <div>
                      <h3>User Details</h3>
                      <p>UID: {user && user.data.data.userDetails.UID}</p>
                      <p>Phone: {user && user.data.data.userDetails.phoneNumber}</p>
                      <p>Wallet Amount: {user && user.data.data.userDetails.walletAmount}</p>
                      <p>Commission Amount: {user && user.data.data.userDetails.commissionAmount}</p>
                      <p>Winning Amount: {user && user.data.data.userDetails.winningAmount}</p>
                      <p>Downline Count: {user && user.data.data.userDetails.downline.length}</p>
                    </div>
                    <div style={{ marginLeft: "6rem" }}>
                      <h3>Bank Data</h3>
                      {bankData && <div>
                        <p>Account Holder Name: {bankData.data.data.accountHolderName}</p>
                        <p>Email: {bankData.data.data.email}</p>
                        <p>Bank Name: {bankData.data.data.bankName}</p>
                        <p>Account No: {bankData.data.data.bankAccountNo}</p>
                        <p>Ifsc Code: {bankData.data.data.ifscCode}</p>
                        <p>Branch Address: {bankData.data.data.bankBranchAddress}</p>
                        <p>City: {bankData.data.data.city}</p>
                        <button onClick={() => { handleConfirm(item._id, "confirmed") }} className='prime-approve-btn'>Approve</button> <button onClick={() => { handleConfirm(item._id, "cancelled") }} className='prime-reject-btn'>Reject</button>
                      </div>}
                    </div>
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AdminWithdraw
