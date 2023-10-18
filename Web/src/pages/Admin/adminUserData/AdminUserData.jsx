import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import axios from 'axios'
import Side from '../adminSide/Side'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import { AllUserData } from '../../../AdminAtom/AllUserData'

import Modal from 'react-bootstrap/Modal';
import './User.css'
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
export const toastProps = {
  position: "top-center",
  duration: 2000,
  style: {
    fontSize: "1rem",
    background: "#fff",
    color: "#333",
  },
};

function AdminUserData() {
  const [uidFilter, setUidFilter] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose=()=>{setModalShow(false);setbankName('');
  setaccountHolderName('');
  setbankAccountNo('' );
  setcity('');
  setbankId('');
  setifscCode('');
  setbankBranchAddress('' )}

  const [bankName, setbankName] = useState('')
  const [accountHolderName, setaccountHolderName] = useState('')
  const [bankAccountNo, setbankAccountNo] = useState(0)
  // const[confirmBankAccountNo,setconfirmBankAccountNo]=useState(0)
  const [city, setcity] = useState('')
  const [uid, setUid] = useState('')
  const [ifscCode, setifscCode] = useState('')
  const [bankBranchAddress, setbankBranchAddress] = useState('')
  const [name, setname] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setpassword] = useState('')
  const [parentReferralCode, setparentReferralCode] = useState('')
  const [bankId, setbankId] = useState('')
  const [walletAmount, setwalletAmount] = useState(0)
  const [rechargeAmount, setrechargeAmount] = useState(0)
  const navigate = useNavigate()
  const authData = useRecoilValue(AdminAuthState)
  const [queryPageIndex, setQueryPageIndex] = useState(1)
  const [queryPageFilter, setqueryPageFilter] = useState('')
  const [queryPageSortBy, setqueryPageSortBy] = useState([])
  const [allUser, setAllUser] = useRecoilState(AllUserData)
  const handleUpdateData = async (userId) => {
    try {
      let token = authData.authToken;
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/admin/updateUser/${userId}`,{
      bankName,
      accountHolderName,
      bankAccountNo,
      bankId,
      city,
      ifscCode,
      bankBranchAddress,
      name,
      phoneNumber,
      password,
      parentReferralCode,
      walletAmount,
      rechargeAmount,
      },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        toast.success('User Data Successfully Updated', { ...toastProps });
        setbankName('')
        setaccountHolderName('')
        setbankAccountNo('' )
        setcity('')
        setbankId('')
        setifscCode('')
        setbankBranchAddress('' )
        handleClose()


        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }
  const handleUser = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getAllUsers`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { queryPageIndex, queryPageSortBy },
      });
  
      if (response.status === 200) {
        const lowerCaseQuery = queryPageFilter.toLowerCase();
        const filteredUsers = response.data.response.getUsers.filter((user) => {
          const phoneNumberMatch = user.phoneNumber.includes(lowerCaseQuery);
          const uidMatch = user.UID.toString().toLowerCase().includes(lowerCaseQuery);
          return phoneNumberMatch || uidMatch;
        });
  
        setAllUser({ ...response, data: { ...response.data, response: { ...response.data.response, getUsers: filteredUsers } } });
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      console.error("An error occurred:", errorMessage);
    }
  };
  
  
  
  
  const getAllUserData = async (userId) => {
    
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/userAndBankData/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200||304) {
        if(response.data.user){ setname(response.data.user.name)
          setphoneNumber(response.data.user.phoneNumber)
          setpassword(response.data.user.password)
          setparentReferralCode(response.data.user.parentReferralCode)
          setwalletAmount(response.data.user.walletAmount.toFixed(2))
          setrechargeAmount(response.data.user.rechargeAmount.toFixed(2))
          setUid(response.data.user._id)
        }
       if(response.data.bankDetails!==null){
        setbankName(response.data.bankDetails.bankName )
        
        setaccountHolderName(response.data.bankDetails.accountHolderName )
        setbankAccountNo(response.data.bankDetails.bankAccountNo )
        // setbankAccountNo(response.data.bankDetails.bankAccountNo)
        // setconfirmBankAccountNo(response.data.bankDetails.)
        setcity(response.data.bankDetails.city )
        setbankId(response.data.bankDetails._id)
        setifscCode(response.data.bankDetails.ifscCode )
        setbankBranchAddress(response.data.bankDetails.bankBranchAddress )
       }

        setModalShow(true)
       
        
        console.log(modalShow)

        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }

  const handleActive = async (userId) => {
    try {
      let token = authData.authToken;
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/activateUser/${userId}`, {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        toast.success("User Activated", { ...toastProps });
        return response;
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      console.error(errorMessage);
    }
  };

  const handleDeactive = async (userId) => {
    try {

      let token = authData.authToken;

      let adminId = authData._id

      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/deactivateUser/${userId}`, {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        toast.success("User Deactivated", { ...toastProps });

        return response;
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      console.error(errorMessage);
    }
  };

  useEffect(() => { handleUser() }, [queryPageIndex, queryPageFilter, queryPageSortBy])



  const totalPages = allUser && allUser.data.response.totalPages;


  const handleDecrement = () => {
    if (queryPageIndex > 1) {
      setQueryPageIndex(queryPageIndex - 1);
    }
  };


  const handleIncrement = () => {
    if (queryPageIndex < totalPages) {
      setQueryPageIndex(queryPageIndex + 1);
    }
  };

  const handleLogin = async (phoneNumber, password) => {

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signIn`, {
        phoneNumber,
        password,
      });

      if (response.status === 200) {
        toast.success('Welcome to our Gaming Zone', { ...toastProps });
        localStorage.setItem('authUserToken', JSON.stringify(response.data.data));
        window.open('/', '_blank');
        // window.location.reload();
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  };
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <Toaster />
          <input
  type="text"
  className="user-input"
  value={uidFilter}
  onChange={(e) => setUidFilter(e.target.value)}
  placeholder="Search UID"
/>
<div className='total-wallet-amount'>
  <h4>Total Wallet Amount Of All Users</h4>
  <div>{allUser && allUser.data.response.totalWalletAmount}</div>
  
</div>

          <table>
            <thead>
              <tr className='table-row'>
                <th>UID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Joining Date</th>
                <th>Total Downline</th>
                <th>Parent Id</th>
                <th>Commission Earned</th>
                <th>Wallet Amount</th>
                <th>Winning Amount</th>
                <th>User Details</th>
                <th>Actions</th>
                <th>Login</th>
              </tr>
            </thead>
            <tbody>
            {allUser &&
  allUser.data.response.getUsers
    .filter((user) =>
      String(user.UID).toLowerCase().includes(uidFilter.toLowerCase())
    )
    .map((user, index) => (
                  <tr key={index} className='table-row'>
                    <td>{user.UID}</td>
                    <td>{user.name}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.password}</td>
                    <td>{formatDate(user.createdAt)}</td>

                    <td>{user.downline.length}</td>
                    <td>{user.parentUserUid}</td>
                    <td>{user.commissionAmount.toFixed(2)}</td>
                    <td>{(user.walletAmount).toFixed(2)}</td>
                    <td>{(user.winningAmount).toFixed(2)}</td>
                    <td>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" variant="primary" onClick={() => { getAllUserData(user._id) }}>
                        Details
                      </button>
                      <Modal
                        show={modalShow}
                        onHide={handleClose}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            User Personal & Bank Data 
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='userModalBody'>
                          <div>
                          <h5>Personal Details</h5>
                          <div>  User Name :  <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> </div>
                          <div> Password :  <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}}/> </div>
                          <div> PhoneNumber :  <input type="text" value={phoneNumber} onChange={(e)=>{setphoneNumber(e.target.value)}}/> </div>
                          <div> Parent Referral Code :  <input type="text" value={parentReferralCode} onChange={(e)=>{setparentReferralCode(e.target.value)}}/> </div>
                          <div> Wallet Amount :  <input type="text" value={walletAmount} onChange={(e)=>{setwalletAmount(e.target.value)}}/> </div>
                          <div> Recharge Amount :  <input type="text" value={rechargeAmount} onChange={(e)=>{setrechargeAmount(e.target.value)}}/> </div>
                          </div>

                          { bankName && accountHolderName && <div>
                          <h5>Bank Details</h5>
                          { bankName &&
                          <div> Bank Name :  <input type="text" value={bankName} onChange={(e)=>{setbankName(e.target.value)}}/> </div>}
                          {accountHolderName &&
                          <div> Account Holder Name :  <input type="text" value={accountHolderName} onChange={(e)=>{setaccountHolderName(e.target.value)}}/> </div>}
                          {bankAccountNo && <div> Bank Account No :  <input type="text" value={bankAccountNo} onChange={(e)=>{setbankAccountNo(e.target.value)}}/> </div>}
                          {city && <div> City :  <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}}/> </div>}
                          {ifscCode && <div> IFSC Code :  <input type="text" value={ifscCode} onChange={(e)=>{setifscCode(e.target.value)}}/> </div>}
                          {bankBranchAddress && <div> Bank Branch Address :  <input type="text" value={bankBranchAddress} onChange={(e)=>{setbankBranchAddress(e.target.value)}}/> </div>}
                          </div>}
                        </Modal.Body>
                        <Modal.Footer style={{textAlign:'center'}}>
                          <button onClick={() => handleUpdateData(uid)} className='userUpdate'>Submit</button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                    <td>
                      <button onClick={() => handleActive(user._id)} className='activate'>Activate</button>
                      <button onClick={() => handleDeactive(user._id)} className='deactivate'>Deactivate</button>
                      
                    </td>
                    <td>
                    <button className='login-user' onClick={() => { handleLogin(user.phoneNumber, user.password) }}>Login</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>


          <div className='inc-dec-btns'>
            <button onClick={handleDecrement}>-</button>
            <div>{queryPageIndex}/{totalPages}</div>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminUserData
