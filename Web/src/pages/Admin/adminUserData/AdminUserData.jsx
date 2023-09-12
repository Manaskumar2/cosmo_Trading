import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import axios from 'axios'
import Side from '../adminSide/Side'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AuthState } from '../../../Atoms/AuthState'
import { AllUserData } from '../../../AdminAtom/AllUserData'
import Accordion from 'react-bootstrap/Accordion';
import './User.css'
function AdminUserData() {
  const authData = useRecoilValue(AuthState)
  const [queryPageIndex, setQueryPageIndex] = useState(2)
  const [queryPageFilter, setqueryPageFilter] = useState('')
  const [queryPageSortBy, setqueryPageSortBy] = useState([])
  const [allUser, setAllUser] = useRecoilState(AllUserData)
  const handleUser = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getAllUsers`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { queryPageIndex ,queryPageFilter}
        },
      );
      if (response.status === 200) {
        console.log(response);
        setAllUser(response)
        console.log(allUser);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  }

  const handleActive = async (userId) => {
    try {
      let token = authData.authToken;
      console.log(token);
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/activateUser/${userId}`, {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        console.log(response);
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
      console.log(token);
      let adminId = authData._id
      console.log(adminId);
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/deactivateUser/${userId}`, {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        console.log(response);
        return response;
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      console.error(errorMessage);
    }
  };

  useEffect(() => { handleUser() }, [queryPageIndex,queryPageFilter,queryPageSortBy])



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
  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <input type="number" className='user-input' value={queryPageFilter} onChange={(e)=>{setqueryPageFilter(e.target.value)}} placeholder='Search Number'/>
          
          {allUser && allUser.data.response.getUsers.map((user, index) => (
            <div key={index}>
              <Accordion >
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    <div>UID: {user.UID}</div>
                    <div style={{ marginLeft: "6rem" }}>Phone:{user.phoneNumber}</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>Total Downline:{user.downline.length} </div>
                    <div>Total Commission Earned:{user.commissionAmount}</div>
                    <div>Level:{user.level}</div>
                    <div>Wallet Ammount:{user.walletAmount}</div>
                    <div>Winning Ammount:{user.winningAmount}</div>
                    <div style={{ marginLeft: "6rem" }} className='ac-de-btn'>
                      <button onClick={() => { handleActive(user._id) }} className='activate'>Activate</button>
                      <button onClick={() => { handleDeactive(user._id) }} className='deactivate'>Deactivate</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
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
