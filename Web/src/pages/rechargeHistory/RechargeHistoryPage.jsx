import React from 'react'
import './RechargeHistoryPage.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AuthState } from '../../Atoms/AuthState'
import { useRecoilValue, useRecoilState } from 'recoil'

function WIthdrawHistoryPage() {
  const auth = useRecoilValue(AuthState)
  const [rechargeHistory, setRechargeHistory] = useState(null)
  const getStatusColor = (status) => {
    if (status === 'pending') {
      return 'orange';
    } else if (status === 'confirmed') {
      return 'green';
    } else {
      return 'red';
    }
  };
  const handleRechargeHistory = async () => {
    try {
      let token = auth.authToken

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/rechargeHistory`, {
        headers: { Authorization: `Bearer ${token}` }
      }
      );
      if (response.status === 200) {
        console.log(response);
        setRechargeHistory(response)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;

    }

  }
  useEffect(() => { handleRechargeHistory() }, [])
  return (
    <div className='withdrawHistoryPage'>
      <div className="container ProNav">
        <div className="row">
          <Link to='/wallet' className="col-2">
            <img src={back} alt="" />
          </Link>
          <div className="col-8">
            Recharge History
          </div>
          <div className="col-2">
            <img src={ear} alt="" className="header_headphone" />
          </div>
        </div>
      </div>
      <div className='rechargeHistory-body'>
        {rechargeHistory && rechargeHistory.data.data.map((item, index) => (
          <div key={index} className='container'>
            <div className='row'>
              <div className="col-4">
                <div >Transaction Id</div>
                <div >Amount:</div>
                <div >Upi Id:</div>
                <div >Status</div>
                <div> Time:</div>
              </div>

              <div className="col-8" >
                <div>{item.upiReferenceNo}</div>
                <div>{item.amount}</div>
              
              
              <div >{item.upiId}</div>
              <div style={{ color: getStatusColor(item.status) }}>{item.status}</div>
              <div><p>{new Date(item.createdAt).toLocaleString()}</p></div>
                
              </div>

            </div>

          </div>
        ))}
      </div>




    </div>
  )
}

export default WIthdrawHistoryPage
