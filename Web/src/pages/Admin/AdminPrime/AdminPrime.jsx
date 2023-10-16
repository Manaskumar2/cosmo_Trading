import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { PremiumState } from '../../../Atoms/Premium';
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import './AdminPrime.css';
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

function AdminPrime() {
  const [status, setStatus]=useState('approved')
  const [user, setUser] = useState(null);
  // const [adminStatus, setAdminStatus] = useState('');
  const authData = useRecoilValue(AdminAuthState);
  const [premiumState, setPremiumState] = useRecoilState(PremiumState);

  const handlePrimeRequest = async () => { 
    try {
      let token = authData.authToken;
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getPremiumRequest?status=${status}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      if (response.status === 200) {
        setPremiumState(response.data);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };
  

  const handleUser = async (userId) => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getUserDetails/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setUser(response);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  };

  const handlePrimeApprove = async (userId, status,premiumId) => {
    try {
      let token = authData.authToken;
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/updatePremiumRequest/${userId}`,
        {  adminStatus: status ,premiumId:premiumId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        toast.success("Premium Updated !", { ...toastProps });
        handlePrimeRequest();
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  };

  useEffect(() => {
    handlePrimeRequest();
  }, [status]);

  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
        <div className='row tab-btns'>
<button className={status==='approved'?'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('approved') }}>Approved List</button>
<button className={status==='pending'?'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('pending') }}>Pending List</button>
<button className={status==='rejected'?'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('rejected') }}>Reject List</button>
</div>
        <Toaster/>
        <Accordion >
          {premiumState && premiumState.data && premiumState.data.map((item, index) => (
            
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header onClick={() => { handleUser(item.userId) }} className='admin-prime-head' >
                  <div>user Id: {item.userId}</div>
                  <div>Amount: {item.amount}</div>
                  <div>Status: {item.status}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <p>UID: {user && user.data.data.userDetails.UID}</p>
                  <p>Phone: {user && user.data.data.userDetails.phoneNumber}</p>
                  

                  {status !== 'approved' && status !== 'rejected' && (
          <>
          <button className='prime-approve-btn' onClick={() => { handlePrimeApprove(item.userId, 'approved',item._id) }}>Approve</button>
        
          <button className='prime-reject-btn' onClick={() => { handlePrimeApprove(item.userId, 'rejected',item._id) }}>Reject</button>
          </>
        )}

                </Accordion.Body>
              </Accordion.Item>
            
          ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default AdminPrime;
