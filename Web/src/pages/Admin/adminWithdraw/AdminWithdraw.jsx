import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import './AWithdraw.css'
import '../adminUserData/User.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
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

function AdminWithdraw() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [approvedBy, setapprovedBy] = useState('')
  const [status, setStatus] = useState('confirmed')
  const [user, setUser] = useState(null)
  const [withDrawdata, setWithdrawData] = useState(null)
  const [bankData, setBankData] = useState(null)

  const authData = useRecoilValue(AdminAuthState)

  const handleUser = async (userId) => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getUserDetails/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setUser(response);
        handleShow()
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;

    }
  };
  const handlePaymentRequest = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getWithdrawRequest?status=${status}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
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
        
        setBankData(response)
        handleShow()
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  const handleConfirm = async (requestId, status) => {
    if (approvedBy !== '') {
      try {
        let token = authData.authToken;
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/admin/conformWithdrawRequest/${requestId}`, { newStatus: status, approvedBy },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.status === 200) {
          handleClose()
          setapprovedBy('')
          toast.success("Withdraw request confirmed", { ...toastProps });
          handlePaymentRequest()


          return response;
        }
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage || 'Something went wrong', { ...toastProps });
      }
    } else { toast.error('Write Your Name first', { ...toastProps }); }
  }
  useEffect(() => { handlePaymentRequest() }, [status])
  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <div className='row tab-btns'>
            <button className={status === 'confirmed' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('confirmed') }}>Approved List</button>
            <button className={status === 'pending' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('pending') }}>Pending List</button>
            <button className={status === 'cancelled' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('cancelled') }}>Reject List</button>

          </div>
          <Toaster />

          <table>
            <thead>
              <tr className='table-row'>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Request Time</th>
                {status !== 'pending' && <th>Action Time</th>}
                <th>Status</th>
                {status != 'pending' && <th>Action Done By</th>}
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {withDrawdata && withDrawdata.data.map((item, index) => (
                <tr key={index} className='table-row'>
                  <td>{item._id}</td>
                  <td>  {item.withdrawAmount}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  {status !== 'pending' && <td>{new Date(item.updatedAt).toLocaleString()}</td>}
                  <td>{item.status}</td>
                  {status !== 'pending' && <td >{item.approvedBy}</td>}
                  <td> <button type="button" class="btn btn-primary" onClick={() => { handleBankData(item.userId); handleUser(item.userId) }}>Details</button> </td>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    centered>
                    <Modal.Header closeButton>
                      <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='userModalBody'>
                      <div style={{ display: 'flex' }}>

                        <div className='admin-withdraw-data'>
                          <h3>User Details</h3>
                          <p>UID: {user && user.data.data.userDetails.UID}</p>
                          <p>Phone: {user && user.data.data.userDetails.phoneNumber}</p>
                          <p>Wallet Amount: {user && user.data.data.userDetails.walletAmount}</p>
                          <p>Commission Amount: {user && user.data.data.userDetails.commissionAmount}</p>
                          <p>Winning Amount: {user && user.data.data.userDetails.winningAmount}</p>
                          <p>Downline Count: {user && user.data.data.userDetails.downline.length}</p>
                        </div>
                        <div style={{ marginLeft: "6rem" }}>
                          
                          {bankData && <div className='admin-withdraw-data'>
                          <h3>Bank Data</h3>
                            <p>Account Holder Name: {bankData.data.data.accountHolderName}</p>
                            <p>Bank Name: {bankData.data.data.bankName}</p>
                            <p>Account No: {bankData.data.data.bankAccountNo}</p>
                            <p>Ifsc Code: {bankData.data.data.ifscCode}</p>
                            <p>Branch Address: {bankData.data.data.bankBranchAddress}</p>
                            <p>City: {bankData.data.data.city}</p>

                            {item.status !== 'confirmed' && item.status !== 'cancelled' && (
                              <>
                                <div > <input type="text" value={approvedBy} onChange={(e) => { setapprovedBy(e.target.value) }} placeholder='Enter Name' className='name-input-admin' /> </div>
                                <div className='flex-div'><button onClick={() => { handleConfirm(item._id, "confirmed") }} className='prime-approve-btn'>Approve</button> <button onClick={() => { handleConfirm(item._id, "cancelled") }} className='prime-reject-btn'>Reject</button></div>
                              </>
                            )}

                          </div>}
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose} >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <Accordion >
          {withDrawdata && withDrawdata.data.map((item, index) => (
            
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header onClick={() => { handleBankData(item.userId); handleUser(item.userId) }} className='acc-head'>
                  <div className='admin-Widthdraw-box'>
                    <p>Order : {item._id}</p>
                    <p>Amount : {item.withdrawAmount}</p>
                    <p>Status : {item.status}</p>
                    {status!=='pending' && <p>Action done by : {item.approvedBy}</p> }
                    
                  </div>

                </Accordion.Header>
                <Accordion.Body>
                  <div style={{display:'flex'}}>

                    <div className='admin-withdraw-data'>
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
                      {bankData && <div className='admin-withdraw-data'>
                        <p>Account Holder Name: {bankData.data.data.accountHolderName}</p>
                        <p>Email: {bankData.data.data.email}</p>
                        <p>Bank Name: {bankData.data.data.bankName}</p>
                        <p>Account No: {bankData.data.data.bankAccountNo}</p>
                        <p>Ifsc Code: {bankData.data.data.ifscCode}</p>
                        <p>Branch Address: {bankData.data.data.bankBranchAddress}</p>
                        <p>City: {bankData.data.data.city}</p>

                        {item.status !== 'confirmed' && item.status !== 'cancelled' && (
                          <>
                            <div > <input type="text" value={approvedBy}  onChange={(e)=>{setapprovedBy(e.target.value)}} placeholder='Enter Name' className='name-input-admin'/> </div>
                            <div className='flex-div'><button onClick={() => { handleConfirm(item._id, "confirmed") }} className='prime-approve-btn'>Approve</button> <button onClick={() => { handleConfirm(item._id, "cancelled") }} className='prime-reject-btn'>Reject</button></div>
                          </>
                        )}

                      </div>}
                    </div>
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            
          ))}
          </Accordion> */}
        </div>

      </div>
    </div>
  )
}

export default AdminWithdraw
