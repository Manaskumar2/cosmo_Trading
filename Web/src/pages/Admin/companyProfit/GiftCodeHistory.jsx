import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import './total.css';
import { useRecoilValue } from 'recoil';
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from 'react-hot-toast';
import arr from './arr.svg';
import left from '../../../images/leftArr.svg'
import right from '../../../images/RightArr.svg'
const toastProps = {
    position: 'top-center',
    duration: 2000,
    style: {
        fontSize: '1rem',
        background: '#fff',
        color: '#333',
    },
};
import { useNavigate } from 'react-router';
function GiftCodeHistory() {
    const navigate =useNavigate()
    const [gameType,setGameType]=useState('')
    const [page,setPage]=useState(1)
    const [date, setDate] = useState(
        new Date().toISOString().split('T')[0]
    );
    const [companyProfits, setCompanyProfits] = useState(null);
    const authData = useRecoilValue(AdminAuthState);

    const handleDate = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/getGiftCodeAmount`,
                {
                    params: {
                        page: page,
                    },
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                console.log(response.data)
                setCompanyProfits(response.data.data);
            }
        } catch (error) {
            const errorMessage = error.response
                ? error.response.data.message
                : error.message;
        }
    };

    useEffect(() => {
        handleDate();
    }, [date,gameType,page]);
    const calculateTotalProfit = () => {
        if (companyProfits && companyProfits.data) {
            return companyProfits.data.reduce(
                (total, item) => total + item.totalBettingAmount,
                0
            ).toFixed(2);
        }
        return 0;
    };
    return (
        <div>
            <AdminNav />
            <div className='flex-div'>
                <Side />
                <div className='admin-rightSection'>
                    <Toaster />
                    <div className="container ">
                        <div className='admin-total-head'>
                            <div> <h4>Gift Code History</h4></div>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <button className='back-btn' onClick={()=>{navigate('/admin/createGiftCard')}}><img src={arr} alt="" /><p>Back</p></button>
                            </div>
                        </div>
                        <div className='container total-table'>
                            <div className='total-table-heading row'>
                                <div className='col-1 text-left'>Sl No</div>
                                <div className='col-3 text-center '>Date</div>
                                <div className='col-5 text-center '>Gift Code</div>
                                <div className='col-1 text-center'>Amount</div>
                                <div className='col-2 text-center' style={{fontSize:'.9rem', lineHeight:'100%'}}>Claimed Amount</div>
                            </div>
                            <div className='total-table-parent'>
                                {companyProfits && companyProfits.giftCodes.map((item, index) => (
                                    <div className='row' key={index}>
                                        <div className='col-1 text-left'>{(page - 1) * 20 + index + 1}</div>
                                        <div className='col-3 text-center '>{new Date(item.createdAt).toLocaleString()}</div>
                                        <div className='col-5 text-center '>{item.code}</div>
                                        <div className='col-1 text-center'>{item.amount}</div>
                                        <div className='col-2 text-center'>{item.totalClaimedAmount}</div>
                                    </div>
                                ))}
                            </div>
                            {companyProfits && companyProfits.overallClaimedAmount && <div className='total-profit row'>
<div className="col-10"> <h4>Total Claimed Amount : </h4> </div>
<div className="col-2 text-center"> <h4> {companyProfits.overallClaimedAmount} </h4> </div>
                            </div>}
                            { companyProfits && companyProfits.totalPages &&
                            <div className='pagination-buttons-container' style={{marginTop:'2rem'}}>
                            <div className='pagination-buttons pagination-buttons-p-m'>
                                <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                    -
                                </button>
                                {companyProfits && <div className='page-count'>{page}/{companyProfits.totalPages} </div>}
                                <button className='increaseBtn ' onClick={() => { setPage(Math.min(page + 1, companyProfits.totalPages)); }}>
                                    +
                                </button>
                            </div>
                        </div>}
                            <div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftCodeHistory
