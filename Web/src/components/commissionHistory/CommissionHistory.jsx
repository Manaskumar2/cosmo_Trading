import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthState } from '../../Atoms/AuthState';
import { useRecoilValue } from 'recoil';
import'./CommissionHistory.css'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
function CommissionHistory() {
  const auth = useRecoilValue(AuthState);
  const [data, setData]=useState(null)
  const [page, setPage]=useState(1)

  useEffect(() => {
    const getCommissionHistory = async () => {
      try {
        let token = auth.authToken;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/commissionHistory`, {
          params: { page },
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setData(response.data.data); 
          console.log(response.data.data); 
        }
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
      }
    };

    getCommissionHistory();
  }, [page]); 

  return (
    <div className='CommissionHistory'>
      <div className="container">
      <div className="row headingCommission" >
    <div className="col-4" style={{textAlign:'left'}}>Date</div>
    <div className="col-4"  style={{textAlign:'center'}}>Amount</div>
    <div className="col-4" style={{textAlign:'center'}}>
  Commission Type
</div>


  </div>
      {data && data.commissionDetails.map((item, index) => (
  <div className="row commissionHistoryRow" key={index}>
    <div className="col-4">{new Date(item.createdAt).toLocaleString()}</div>
    <div className="col-4"  style={{textAlign:'center'}}>Rs: {item.amount}</div>
    <div className="col-4" style={{ color: item.commissionType === 'AGENT' ? '#00F2DE' : item.commissionType === 'PREMIUM' ? 'golden' : 'white' , textAlign:'center' }}>
  {item.commissionType}
</div>


  </div>
))}
<div className='pagination-buttons-container' style={{marginTop:'2rem'}}>
                            <div className='pagination-buttons'>
                                <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                    <img src={right} alt="" />
                                </button>

                                {data && <div className='page-count'>  {page}/{data.totalPages} </div>}
                                {/* {page}/{item.totalPage} */}
                                <button className='increaseBtn' onClick={() => { setPage(Math.min(page + 1, data.totalPages)); }}>
                                    <img src={left} alt="" />
                                </button>

                            </div>
                        </div>
        
      </div>
    </div>
  );
}

export default CommissionHistory;
