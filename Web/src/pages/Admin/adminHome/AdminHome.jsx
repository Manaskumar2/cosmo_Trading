import React, { useState, useEffect } from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import axios from 'axios'
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import { useRecoilValue, useRecoilState } from 'recoil';
import './AdminHome.css'
import arrow from './Arrow.svg'
import { useNavigate } from 'react-router-dom';
function AdminHome() {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [cosmo, setCosmo] = useState(null)
  const [transaction, setTransaction] = useState(null)
  const authData = useRecoilValue(AdminAuthState);

  const betData = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/geBetAmount`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        console.log(response)
        setData(response.data.data)
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
    }
  };
  const handleCosmoData = async () => {
    try {
      let token = authData.authToken;
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/companyDetails`, {
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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/totalTransactions`, {
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



  useEffect(() => {
    const callFunctions = () => {
      betData()
      handleTransactionData()
      handleCosmoData();
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

            <div>
              <div className="row">
                <div className='col-12'><h2 className='heading'>Cosmo Trade</h2></div>
              </div>
              <div className="row">
                {cosmo &&
                  <div className="col-4">
                    <div className='admin-home-box link-box-admin arrow-img-container'  onClick={()=>{navigate('/admin/totalProfit')}}>
                      <h5>Company Profit</h5>
                      <p>{cosmo.data.data[0].amount.toFixed(2)}</p>
                      <img src={arrow} alt="" className='arrow-img-admin'/>
                    </div>
                  </div>}
                {cosmo &&
                  <div className="col-4">
                    <div className='admin-home-box link-box-admin arrow-img-container' onClick={()=>{navigate('/admin/RiseUpAndGrowUpProfit')}}>
                      <h5>Total Betting Amount</h5>
                      <p>{cosmo.data.data[0].totalBettingAmount.toFixed(2)}</p>
                      <img src={arrow} alt="" className='arrow-img-admin'  />
                    </div>
                  </div>}
                {data && data.overralBetAmounts &&
                  <div className="col-4">
                    <div className='admin-home-box'>
                      <h5>Today Betting Amount</h5>
                      <p>{data.overralBetAmounts.toFixed(2)}</p>
                    </div>
                  </div>}
              </div>
            </div>
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
                    <div className='admin-home-box link-box-admin arrow-img-container'  onClick={()=>{navigate('/admin/totalRecharge')}}>
                      <h5>Total Recharge</h5>
                      <p>{transaction.overallTotalRecharge.toFixed(2)}</p>
                      <img src={arrow} alt="" className='arrow-img-admin' />
                    </div>
                  </div>
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className='admin-home-box'>
                      <h5>Today Withdraw</h5>
                      <p>{transaction.todayTotalWithdraw.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className='admin-home-box link-box-admin arrow-img-container'  onClick={()=>{navigate('/admin/totalWithdraw')}}>
                      <h5>Total Withdraw</h5>
                      <p>{transaction.overallTotalWithdraw.toFixed(2)}</p>
                      <img src={arrow} alt="" className='arrow-img-admin' />
                    </div>
                  </div>
                </div>
              </div>
            }
            {data &&
              <div>
                <div className="row">
                  <div className='col-12'><h2 className='heading'>Grow Up</h2></div>
                </div>
                <div className="row">
                  <div className="row">
                    <div className="col-4 ">
                      <div className='admin-home-box'>
                        <h5>Today Betting Amount on Alpha</h5>
                        <p>{data.growUp.todayBetAmounts.small ? data.growUp.todayBetAmounts.small.toFixed(2) : "0"}</p>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className='admin-home-box'>
                        <h5>Today Betting Amount on Beta</h5>
                        <p>{data.growUp.todayBetAmounts.big ? data.growUp.todayBetAmounts.big.toFixed(2) : "0"}</p>
                      </div>
                    </div>

                  </div>
                  <div className="row" >
                    <div className="col-4 ">
                      <div className='admin-home-box'>
                        <h5>Current Betting Amount on Alpha</h5>
                        <p>{data.growUp.totalBetAmounts.small ? data.growUp.totalBetAmounts.small.toFixed(2) : "0"}</p>
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div className='admin-home-box'>
                        <h5>Current Betting Amount on Beta</h5>
                        <p>{data.growUp.totalBetAmounts.big ? data.growUp.totalBetAmounts.big.toFixed(2) : "0"}</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            }
            {data &&
              <>  <div className="row">
                <div className='col-12'><h2 className='heading'>Rise Up</h2></div>
              </div>
                <div className="row">
                  <div className="col-4 ">
                    <div className='admin-home-box'>
                      <h5>Current Betting Amount on Alpha</h5>
                      <p>{data.riseUp.totalBetAmounts.A ? data.riseUp.totalBetAmounts.A.toFixed(2) : "0"}</p>

                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className='admin-home-box'>
                      <h5>Current Betting Amount on Beta</h5>
                      <p>{data.riseUp.totalBetAmounts.B ? data.riseUp.totalBetAmounts.B.toFixed(2) : "0"}</p>

                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className='admin-home-box'>
                      <h5>Current Betting Amount on Gamma</h5>
                      <p>{data.riseUp.totalBetAmounts.C ? data.riseUp.totalBetAmounts.C.toFixed(2) : "0"}</p>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className='admin-home-box'>
                      <h5>Today Betting Amount on Alpha</h5>
                      <p>{data.riseUp.todayBetAmounts.A ? data.riseUp.todayBetAmounts.A.toFixed(2) : "0"}</p>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className='admin-home-box'>
                      <h5>Today Betting Amount on Beta</h5>
                      <p>{data.riseUp.todayBetAmounts.B ? data.riseUp.todayBetAmounts.B.toFixed(2) : "0"}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className='admin-home-box'>
                      <h5>Today Betting Amount on Gamma</h5>
                      <p>{data.riseUp.todayBetAmounts.C ? data.riseUp.todayBetAmounts.C.toFixed(2) : "0"}</p>
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
