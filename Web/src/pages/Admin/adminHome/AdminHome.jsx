import React, { useState, useEffect } from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import axios from 'axios'
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import { useRecoilValue, useRecoilState } from 'recoil';
import './AdminHome.css'
function AdminHome() {

  const [cosmo, setCosmo] = useState(null)
  const [transaction, setTransaction] = useState(null)
  const [riseUp, setRiseUp] = useState(null)
  const [growUp, setGrowUp] = useState(null)
  const authData = useRecoilValue(AdminAuthState);

  const handleCosmoData = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}admin/companyDetails`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setCosmo(response)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };
  const handleTransactionData = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}admin/totalTransactions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setTransaction(response.data.data)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };
  const handleRiseUp = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}admin/riseUpbet `, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setRiseUp(response)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };
  const handleGrowUp = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}admin/growUpbetAmount`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setGrowUp(response)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };

  useEffect(() => {
    const callFunctions = () => {
      handleTransactionData()
      handleCosmoData();
      handleGrowUp();
      handleRiseUp();
    };
    callFunctions();
    const intervalId = setInterval(callFunctions, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div>
      <AdminNav />
      <div className='flex-div'>
        <Side />
        <div className='admin-rightSection'>
          <div className='container admin-home'>
            {cosmo &&
            <div>
              <div className="row">
                <div className='col-12'><h2 className='heading'>Cosmo Trade</h2></div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className='admin-home-box'>
                    <h5>Company Profit</h5>
                    <p>{cosmo.data.data[0].amount.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className='admin-home-box'>
                  <h5>Total Betting Amount</h5>
                  <p>{cosmo.data.data[0].totalBettingAmount.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-4">
                <div className='admin-home-box'>
                  <h5>Today Betting Amount</h5>
                  <p>{cosmo.data.data[0].everydayBettingAmount.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
              }
            {transaction &&
            <div>
              <div className="row">
                <div className="col-4">
                  <div className='admin-home-box'>
                    <h5>Today Recharge</h5>
                    <p>{transaction.todayTotalRecharge.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className='admin-home-box'>
                  <h5>Total Recharge</h5>
                  <p>{transaction.overallTotalRecharge.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-4">
                <div className='admin-home-box'>
                  <h5>Today Withdraw</h5>
                  <p>{transaction.todayTotalWithdraw.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-4">
                <div className='admin-home-box'>
                  <h5>Total Withdraw</h5>
                  <p>{transaction.overallTotalWithdraw.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
              }
            {growUp &&
            <div>
              <div className="row">
              <div className='col-12'><h2 className='heading'>Grow Up</h2></div>
            </div>
              <div className="row">
              <div className="col-3 ">
                <div className='admin-home-box'>
                  <h5>Today Betting Amount on Alpha</h5>
                  <p>{growUp.data.data.todayBetAmounts.small.toFixed(2)}</p>
                </div>
                </div>
                <div className="col-3">
                  <div className='admin-home-box'>
                  <h5>Today Betting Amount on Beta</h5>
                  <p>{growUp.data.data.todayBetAmounts.big.toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-3 ">
                <div className='admin-home-box'>
                  <h5>Current Betting Amount on Alpha</h5>
                  <p>{growUp.data.data.totalBetAmounts.small.toFixed(2)}</p>
                </div>
                </div>
              </div>
              <div className="col-3 ">
                <div className='admin-home-box'>
                  <h5>Current Betting Amount on Beta</h5>
                  <p>{growUp.data.data.totalBetAmounts.big.toFixed(2)}</p>
                </div>
                </div>
              </div>
              }
            {riseUp &&
            <>  <div className="row">
            <div className='col-12'><h2 className='heading'>Rise Up</h2></div>
          </div>
              <div className="row">
                <div className="col-4 ">
                  <div className='admin-home-box'>
                  <h5>Current Betting Amount on Alpha</h5>
                  <p>{riseUp.data.data.totalBetAmounts.A.toFixed(2)}</p>

                </div>
                </div>
                <div className="col-4 ">
                  <div className='admin-home-box'>
                  <h5>Current Betting Amount on Beta</h5>
                  <p>{riseUp.data.data.totalBetAmounts.B.toFixed(2)}</p>

                </div>
                </div>
                <div className="col-4 ">
                  <div className='admin-home-box'>
                  <h5>Current Betting Amount on Gamma</h5>
                  <p>{riseUp.data.data.totalBetAmounts.C.toFixed(2)}</p>
                </div>
                </div>
                <div className="col-4 ">
                  <div className='admin-home-box'>
                  <h5>Today Betting Amount on Alpha</h5>
                  <p>{riseUp.data.data.todayBetAmounts.A.toFixed(2)}</p>
                </div>
                </div>
                <div className="col-4 ">
                  <div className='admin-home-box'>
                  <h5>Today Betting Amount on Beta</h5>
                  <p>{riseUp.data.data.todayBetAmounts.B.toFixed(2)}</p>
                </div>
                </div>
                <div className="col-4">
                  <div className='admin-home-box'>
                  <h5>Today Betting Amount on Gamma</h5>
                  <p>{riseUp.data.data.todayBetAmounts.C.toFixed(2)}</p>
                </div>
                </div>
              </div></>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
