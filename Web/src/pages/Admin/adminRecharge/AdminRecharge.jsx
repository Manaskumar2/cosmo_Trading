import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import './ARecharge.css'
import '../adminUserData/User.css'
import toast, { Toaster } from "react-hot-toast";
import Modal from 'react-bootstrap/Modal';
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
 
  const [approvedBy, setapprovedBy] = useState('')
  const [status, setStatus] = useState('confirmed')
  const authData = useRecoilValue(AdminAuthState)
  const [user, setUser] = useState(null)
  const [file, setfile] = useState(null);
  const [upiId, setUpiId] = useState('')
  const [withdrawData, setWithdrawData] = useState(null)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setfile(file);
    console.log(file)
  };

  const handleQr = async () => {

    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('upiId', upiId);

      let uploadedBy = authData._id
      let token = authData.authToken;
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/uploadQrcode/${uploadedBy}`, formData,
        {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'multipart/form-data',
        },
      );
      if (response.status === 201) {
        toast.success("Qr code uploaded!", { ...toastProps });
        setUpiId("")
        setfile(null)
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
        handleShow()
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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/payment-request?status=${status}`,
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
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  }
  const handlePayment = async (paymentId, status) => {
    if (approvedBy !== '') {
      try {
        let token = authData.authToken;
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/admin/confirm-payment/${paymentId}`, { status, approvedBy },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.status === 200) {
          toast.success("Recharge request confirmed", { ...toastProps });
          handleClose()
          setapprovedBy('')
          handlePaymentRequest()
          return response;
        }
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage || 'Something went wrong', { ...toastProps });
      }
    } else { toast.error('Write Your Name First', { ...toastProps }); }
  }
  useEffect(() => { handlePaymentRequest() }, [status])
  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <Toaster />
          <form className='form-rechrge' >
            <h3 className='text-centre'>Submit Qr Code</h3>
            <label >Enter Qr Code Image</label>
            <input type="file" accept=".jpg, .jpeg, .png, .svg" onChange={handleImageChange} />
            <label >Enter UPI Id</label>
            <input type="text" value={upiId} placeholder='Enter UPI Id' onChange={(e) => { setUpiId(e.target.value) }} />
            <button onClick={handleQr}>Submit</button>
          </form>
          <div className='row tab-btns'>
            <button className={status === 'confirmed' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('confirmed') }}>Approved List</button>
            <button className={status === 'pending' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('pending') }}>Pending List</button>
            <button className={status === 'cancelled' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('cancelled') }}>Reject List</button>
          </div>
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
              {withdrawData && withdrawData.map((item, index) => (
                <tr key={index} className='table-row'>
                  <td>{item._id}</td>
                  <td> {item.amount}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  {status !== 'pending' && <td>{new Date(item.updatedAt).toLocaleString()}</td>}
                  <td>{item.status}</td>
                  {status !== 'pending' && <td >{item.approvedBy}</td>}
                  <td> <button type="button" class="btn btn-primary" onClick={() => { handleUser(item.userId) }}>Details</button> </td>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    centered>
                    <Modal.Header closeButton>
                      <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='userModalBody'>
                      <div>
                      <p>Name: {user && user.data.data.userDetails.name}</p>
                      <p>UID: {user && user.data.data.userDetails.UID}</p>
                      <p>Phone: {user && user.data.data.userDetails.phoneNumber}</p>
                      <p>Upi ReferenceNo: {item.upiReferenceNo}</p>
                      <p>Upi Id: {item.upiId}</p>
                      {status == 'pending' && <> <div > <input type="text" value={approvedBy} onChange={(e) => { setapprovedBy(e.target.value) }} placeholder='Enter Name' className='name-input-admin' style={{ width: '14rem' }} /> </div>
                        <button className='prime-approve-btn' onClick={() => { handlePayment(item._id, 'confirm') }}>Approve</button>
                        <button onClick={() => { handlePayment(item._id, 'cancel') }} className='prime-reject-btn'>Reject</button>
                      </>}</div>
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
        </div>
      </div>
    </div>
  )
}

export default AdminRecharge
