import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { PremiumState } from '../../../Atoms/Premium';
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import '../adminUserData/User.css'
import './AdminPrime.css'
import Accordion from 'react-bootstrap/Accordion';
import toast, { Toaster } from "react-hot-toast";
import Modal from 'react-bootstrap/Modal';
import '../adminRecharge/ARecharge.css';
import Button from 'react-bootstrap/Button';

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
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('approved');
  const [user, setUser] = useState(null);
  const authData = useRecoilValue(AdminAuthState);
  const [premiumState, setPremiumState] = useRecoilState(PremiumState);
  const itemsPerPage = 20;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePrimeRequest = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/getPremiumRequest?status=${status}&page=${currentPage}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        setPremiumState(response.data);
        console.log(response.data);
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
        handleShow();
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  };

  const handlePrimeApprove = async (userId, status, premiumId) => {
    try {
      let token = authData.authToken;
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/updatePremiumRequest/${userId}`,
        { adminStatus: status, premiumId: premiumId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        toast.success("Premium Updated!", { ...toastProps });
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
  }, [status, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <div className='row tab-btns'>
            <button className={status === 'approved' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('approved') }}>Approved List</button>
            <button className={status === 'pending' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('pending') }}>Pending List</button>
            <button className={status === 'rejected' ? 'col-4 active-tab-btn-adminPage' : 'col-4 tab-btn'} onClick={() => { setStatus('rejected') }}>Reject List</button>
          </div>
          <Toaster />
          <table>
            <thead>
              <tr className='table-row'>
                <th>Sl No</th>
                <th>User Id</th>
                <th>Amount</th>
                <th>Request Time</th>
                {status !== 'pending' && <th>Action Time</th>}
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {premiumState && premiumState.response && premiumState.response.premiumApplyRequest && premiumState.response.premiumApplyRequest.map((item, index) => (
                <tr key={index} className='table-row'>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.amount}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  {status !== 'pending' && <td>{new Date(item.updatedAt).toLocaleString()}</td>}
                  <td>{item.status}</td>
                  <td><button type="button" className="btn btn-primary" onClick={() => { handleUser(item.userId) }}>Details</button></td>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='userModalBody'>
                      <div>

                        <p>UID: {user && user.data.data.userDetails.UID}</p>
                        <p>Phone: {user && user.data.data.userDetails.phoneNumber}</p>


                        {status !== 'approved' && status !== 'rejected' && (
                          <>
                            <button className='prime-approve-btn' onClick={() => { handlePrimeApprove(item.userId, 'approved', item._id) }}>Approve</button>

                            <button className='prime-reject-btn' onClick={() => { handlePrimeApprove(item.userId, 'rejected', item._id) }}>Reject</button>
                          </>
                        )}
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
          {premiumState && premiumState.response && premiumState.response.totalPages &&  <div className='pagination-prime'>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>-</button>
            <span>{currentPage} / {premiumState && premiumState.response && premiumState.response.totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === premiumState.response.totalPages}>+</button>
          </div>}
         
        </div>
      </div>
    </div>
  );
}

export default AdminPrime;