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
import '../adminRecharge/ARecharge.css'
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
  // bankName, ifscCode, accountHolderName, accountNumber

  const [bankName, setbankName] = useState('');
  const [ifscCode, setifscCode] = useState('');
  const [accountHolderName, setaccountHolderName] = useState('');
  const [accountNumber, setaccountNumber] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleClose = () => { setShowModal1(false); setShowModal2(false); };
  const handleShow1 = () => { setShowModal1(true); };
  const handleShow2 = () => { setShowModal2(true); };
  const [approvedBy, setapprovedBy] = useState('')
  const [status, setStatus] = useState('confirmed')
  const [user, setUser] = useState(null)
  const [withDrawdata, setWithdrawData] = useState(null)
  const [bankData, setBankData] = useState(null)

  const authData = useRecoilValue(AdminAuthState)

  const submitBankData = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/createBank`,{ bankName, IfscCode:ifscCode, accountHolderName, accountNumber }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 201) {
        handleClose()
        setbankName('')
        setifscCode('')
        setaccountHolderName('')
        setaccountNumber('')
        toast.success('Bank Details Successfully Updated', { ...toastProps });
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });}};
      
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
      const errorMessage = error.response ? error.response.data.message : error.message;}};


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
        handleShow2()
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
          handlePaymentRequest()
          if(status==='confirmed'){
            toast.success(`Withdraw Request Confirmed`, { ...toastProps });}
            if(status==='cancelled'){
            toast.error(`Withdraw Request Rejected`, { ...toastProps });}
          return response;
        }
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage || 'Something went wrong', { ...toastProps });
      }
    } else { toast.error('Write Your Name first', { ...toastProps }); }
  }
  useEffect(() => { handlePaymentRequest() }, [status])
  const handleDecrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const totalPages=withDrawdata && withDrawdata.data && withDrawdata.data.totalPages

  const handleIncrement = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        {/* bankName, ifscCode, accountHolderName, accountNumber */}
      
        <div className='admin-rightSection'>
        <form className='form-rechrge' >
            <h3 className='text-centre'>Submit Account Details</h3>
            <label >Enter Bank Name</label>
            <input type="text"  value={bankName} placeholder='Enter Bank Name' onChange={(e) => { setbankName(e.target.value) }}/>
            <label >Enter Account Holder Name</label>
            <input type="text"  value={accountHolderName} placeholder='Enter Name' onChange={(e) => { setaccountHolderName(e.target.value) }}/>
            <label >Enter Account Number</label>
            <input type="number" value={accountNumber} placeholder='Enter Account Number' onChange={(e) => { setaccountNumber(e.target.value) }} />
            <label >Enter IFSC Code</label>
            <input type="text" value={ifscCode} placeholder='Enter Account Number' onChange={(e) => { setifscCode(e.target.value) }} />
            <button onClick={handleShow1}>Submit</button>
            <Modal
                    show={showModal1}
                    onHide={handleClose}
                    size="lg"
                    centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Bank Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='userModalBody'>
                    <div className='admin-withdraw-data'>
                          <h3>Confirm Bank Details</h3>
                          <p>Bank Name: {bankName}</p>
                          <p>Account Holder Name: {accountHolderName}</p>
                          <p>Account Number: {accountNumber}</p>
                          <p>IFSC Code: {ifscCode}</p>
                          
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={submitBankData} >
                        Confirm Submit
                      </Button>
                      <Button variant="secondary" onClick={handleClose} >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
          </form>
          <div className='row tab-btns'>
            <button className={status === 'confirmed' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('confirmed'),setPage(1) }}>Approved List</button>
            <button className={status === 'pending' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('pending'),setPage(1) }}>Pending List</button>
            <button className={status === 'cancelled' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('cancelled'),setPage(1) }}>Reject List</button>

          </div>
          <Toaster />

          <table>
            <thead>
              <tr className='table-row'>
                <th>Sl No</th>
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
              {withDrawdata && withDrawdata.data.pendingWithdrawRequests.map((item, index) => (
                <tr key={index} className='table-row'>
                  <td>{(page - 1) * 20 + index + 1}</td>
                  <td>{item._id}</td>
                  <td>  {item.withdrawAmount}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  {status !== 'pending' && <td>{new Date(item.updatedAt).toLocaleString()}</td>}
                  <td>{item.status}</td>
                  {status !== 'pending' && <td >{item.approvedBy}</td>}
                  <td> <button type="button" class="btn btn-primary" onClick={() => { handleBankData(item.userId); handleUser(item.userId) }}>Details</button> </td>
                  <Modal
                    show={showModal2}
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
          {withDrawdata && withDrawdata.data && withDrawdata.data.pendingWithdrawRequests && withDrawdata.data.pendingWithdrawRequests.length!=0 &&
          <div className='inc-dec-btns'>
            <button onClick={handleDecrement}>-</button>
            <div>{page}/{totalPages}</div>
            <button onClick={handleIncrement}>+</button>
          </div> }
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
