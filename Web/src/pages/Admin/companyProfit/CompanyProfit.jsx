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
import { useNavigate } from 'react-router';
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

function CompanyProfit() {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [specificMonth, setSpecificMonth] = useState(new Date().toISOString().split('T')[0]);
    const [specificDay, setSpecificDay] = useState(new Date().toISOString().split('T')[0]);


    const [companyProfits, setCompanyProfits] = useState(null);
    const authData = useRecoilValue(AdminAuthState);

    const handleMonth = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/getComapnyProfits`,
                {
                    params: {
                        specificMonth: specificMonth,
                        specificDay: null
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

    const handleDay = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin/getComapnyProfits`,
                {
                    params: {
                        specificDay: specificDay,
                        specificDate: null,
                        
                    },
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                setCompanyProfits(response.data);
            }
        } catch (error) {
            const errorMessage = error.response
                ? error.response.data.message
                : error.message;
        }
    };


    useEffect(() => {
        handleMonth();
    }, [specificMonth]);
    useEffect(() => {
        handleDay();
    }, [ specificDay]);

    return (
        <div>
            <AdminNav />
            <div className='flex-div'>
                <Side />
                <div className='admin-rightSection'>
                    <Toaster />
                    <div className="container ">
                        <div className='admin-total-head'>
                            <div> <h4>Company Profit</h4> </div>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <h5 style={{ margin: '0' }}>Search By Month : </h5>

                                <DatePicker
                                    selected={new Date(specificMonth)}
                                    onChange={(newDate) => {
                                        setSpecificMonth(newDate.toISOString().split('T')[0]);
                                    }}
                                    dateFormat="yyyy-MM"
                                    showMonthYearPicker
                                    className='calender-input'
                                />
                                <h5 style={{ margin: '0' }}>Search By Day : </h5>
                                <DatePicker
                                    className='calender-input'
                                    selected={new Date(specificDay)}
                                    onChange={(newSpecificDay) => { setSpecificDay(newSpecificDay.toISOString().split('T')[0]) }}
                                    
                                    dateFormat="yyyy-MM-dd"
                                />


                                <button className='back-btn' onClick={() => {setSpecificMonth(new Date().toISOString().split('T')[0]);setSpecificDay(new Date().toISOString().split('T')[0]) }} style={{background:'#e44f4fed'}}><p>Reset</p></button>
                                <button className='back-btn' onClick={() => { navigate('/admin/home') }}><img src={arr} alt="" /><p>Back</p></button>
                            </div>
                        </div>
                        <div className='container total-table'>
                            <div className='total-table-heading row'>
                                <div className='col-2 text-center'>Sl No</div>
                                <div className='col-6 text-left '>Date</div>
                                <div className='col-4 text-right'>Amount</div>
                            </div>
                            <div className='total-table-parent'>
                                {companyProfits && companyProfits.data && companyProfits.data.map((item, index) => (
                                    <div className='row' key={index}>
                                        <div className='col-2 text-center'>{index + 1}</div>
                                        <div className='col-6 text-left '>{item._id}</div>
                                        <div className='col-4 text-right'>{item.totalProfit.toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>
                            {companyProfits && companyProfits.overallTotalProfit && <div className='total-profit row'>
                                <div className="col-10"> <h4>Total Profit : </h4> </div>
                                <div className="col-2"> <h4>{companyProfits && companyProfits.overallTotalProfit.toFixed(2)}</h4> </div>
                            </div>}
                            <div>
                                {companyProfits && companyProfits.totalPages &&
                                    <div className="pagination-buttons-p2p">
                                        <button onClick={() => { setPage(Math.max(page - 1, 1)); }} className='page-leftarr'>  <img src={right} alt="" /> </button>
                                        {companyProfits && <div>{page}</div>}
                                        <button onClick={() => { setPage(Math.min(page + 1, companyProfits.totalPages)); }} className='page-rightarr'>  <img src={left} alt="" /> </button>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyProfit;
