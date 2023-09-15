import React from 'react'
import './WIthdrawHistoryPage.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import { Link } from 'react-router-dom'
import { WithdrawHistory } from '../../Atoms/WithdrawHistory'
import { useRecoilState } from 'recoil'


function WIthdrawHistoryPage() {
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
        {withdrawHistory && withdrawHistory.data.withdrawalHistory.map((item , index)=>(
          <div key={index} className='container'>
            <div className='row'>
              <div className="col-8">{item._id}
              <div >Amount: {item.withdrawAmount}</div>
              </div>
              
              <div className="col-4" style={{ color: getStatusColor(item.status) }}> 
              <p>Status:</p>
      {item.status}
    </div>

            </div>

          </div>
        ))}
      </div>


    </div>
  )
}

export default WIthdrawHistoryPage
