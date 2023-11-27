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
function TotalRecharge() {
    const navigate =useNavigate()
    const [gameType,setGameType]=useState('')
    const [page,setPage]=useState(1)
    const [specificDate, setSpecificDate] = useState(
        new Date().toISOString().split('T')[0]
    );
    const [companyProfits, setCompanyProfits] = useState(null);
    const authData = useRecoilValue(AdminAuthState);

    const handleDate = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/getDateWiseRecharge`,
                {
                    params: {
                        specificDate: specificDate,
                        page: page,
                    },
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                console.log(response.data)
                setCompanyProfits(response.data);
            }
        } catch (error) {
            const errorMessage = error.response
                ? error.response.data.message
                : error.message;
        }
    };

    useEffect(() => {
        handleDate();
    }, [specificDate,page]);
    const calculateTotalProfit = () => {
        if (companyProfits) {
            return companyProfits.reduce(
                (total, item) => total + item.totalAmount,
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
                            <div> <h4>Recharge History</h4></div>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <h4>Search Date : </h4>
                                <DatePicker
                                className='calender-input'
                                    selected={new Date(specificDate)}
                                    onChange={(specificDate) => { setSpecificDate(specificDate.toISOString().split('T')[0]) }}
                                    dateFormat="yyyy-MM-dd"
                                />
                                <button className='back-btn' onClick={() => {setSpecificDate(new Date().toISOString().split('T')[0]) }} style={{background:'#e44f4fed'}}><p>Reset</p></button>
                                <button className='back-btn' onClick={()=>{navigate('/admin/home')}}><img src={arr} alt="" /><p>Back</p></button>
                            </div>
                        </div>
                    
                        <div className='container total-table'>
                            <div className='total-table-heading row'>
                                <div className='col-2 text-center'>Sl No</div>
                                <div className='col-6 text-left '>Date</div>
                                <div className='col-4 text-right'>Amount</div>
                            </div>
                            <div className='total-table-parent'>
                                {companyProfits  && companyProfits.map((item, index) => (
                                    <div className='row' key={index}>
                                        <div className='col-2 text-center'>{index + 1}</div>
                                        <div className='col-6 text-left '>{item._id}</div>
                                        <div className='col-4 text-right'>{item.totalAmount.toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>
                            {companyProfits && <div className='total-profit row'>
<div className="col-10"> <h4>Total Recharge : </h4> </div>
<div className="col-2"> <h4> {calculateTotalProfit()} </h4> </div>
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

export default TotalRecharge
