import React from 'react'
import './WIthdrawHistoryPage.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'
import { WithdrawHistory } from '../../Atoms/WithdrawHistory'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AuthState } from '../../Atoms/AuthState'
import axios from 'axios'
 import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
function WIthdrawHistoryPage() {
  const navigate=useNavigate()
  const auth=useRecoilValue(AuthState)
  const [withdrawHistory, setWithdrawHistory] = useRecoilState(WithdrawHistory)
  const getStatusColor = (status) => {
    if (status === 'pending') {
      return 'orange';
    } else if (status === 'confirmed') {
      return 'green';
    } else {
      return 'red';
    }
  };

  const handleWithdrawHistory = async () => {
    try {
        let token = auth.authToken
        let userId = auth._id
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/getWithdrawalHistory/${userId}`,  {
            headers: { Authorization: `Bearer ${token}` }
        }
        );
        if (response.status === 200) {
            // toast.success("got user money data", { ...toastProps });

            setWithdrawHistory(response)
            return response;
        }
    } catch (error) {
      if (error.response.status === 403) {
        navigate('/signIn')
        return response;
    }
        const errorMessage = error.response ? error.response.data.message : error.message;

    }
    
}
useEffect(()=>{handleWithdrawHistory();},[])

  return (
    <div className='withdrawHistoryPage'>
      <div className="container ProNav">
        <div className="row">
          <Link to='/wallet' className="col-2">
            <img src={back} alt="" />
          </Link>
          <div className="col-8">
            Withdraw History
          </div>
          <div className="col-2">
            <img src={ear} alt="" className="header_headphone" />
          </div>
        </div>
      </div>
      <div className='withdrawalHistory-body'>
        {withdrawHistory && withdrawHistory.data.withdrawalHistory.map((item, index) => (
          <div key={index} className='container'>
            <div className='row'>
              <div className="col-4">
                <div >Order Id:</div>
              </div>

              <div className="col-8" >

                {item._id}
              </div>
              <div className="col-4">
                <div >Amount: </div>
              </div>

              <div className="col-8" >
                
                {item.withdrawAmount}
              </div>
              <div className="col-4">
                <div ><p>Status:</p></div>
              </div>

              <div className="col-8" style={{ color: getStatusColor(item.status) }}>
                
                {item.status}
              </div>
              <div className="col-4">
                <div ><p>Type:</p></div>
              </div>

              <div className="col-8" >
                
                <p> Bank Card</p>
              </div>
              <div className="col-4">
                <div ><p>Time:</p></div>
              </div>

              <div className="col-8" >
                
              <p>{new Date(item.createdAt).toLocaleString()}</p>
              </div>

            </div>

          </div>
        ))}
      </div>


    </div>
  )
}

export default WIthdrawHistoryPage
