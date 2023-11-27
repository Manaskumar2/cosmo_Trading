import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';
import Side from '../adminSide/Side';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { AdminAuthState } from '../../../Atoms/AdminAuthState';
import './total.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from 'react-hot-toast';
import arr from './arr.svg';
import { useNavigate } from 'react-router';
const toastProps = {
    position: 'top-center',
    duration: 2000,
    style: {
        fontSize: '1rem',
        background: '#fff',
        color: '#333',
    },
};

function UserDownLine() {
    const auth = useRecoilValue(AdminAuthState)
    const navigate = useNavigate()
    const [downline, setDownline] = useState(null);
    const [levelNumber, setLevel] = useState(null);
    const [userId, setUserId] = useState('');
    const [page, setPage] = useState(1);

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const handleLevelData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getTotalTeams/${userId}?levelNumber=${levelNumber}&page=${page}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setDownline(response.data);
            }

            return response;
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;

            console.error(errorMessage);
        }
    };

    useEffect(() => {
        // setUserId(sessionStorage.getItem('user')) ;
        setDownline(JSON.parse(sessionStorage.getItem('downLine')));
        setUserId(JSON.parse(sessionStorage.getItem('user')));
    }, []);

    useEffect(() => {
        if(userId){handleLevelData(); }

    }, [levelNumber,page]);
    return (
        <div>
            <AdminNav />
            <div className='flex-div'>
                <Side />
                <div className='admin-rightSection'>
                    <Toaster />
                    <div className="container ">
                        <div className='admin-total-head'>
                            <div> <h4>User Downline</h4> </div>
                            {downline && downline.totalTeam && <div> <h4>Total Team : {downline.totalTeam}</h4> </div>}
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <h5 style={{ margin: '0' }}>Search By Level : </h5>
                    <div className='col-4'>
                        <select value={levelNumber} onChange={handleLevelChange} className='options '>
                            <option value={''}>Select Level</option>
                            <option value={1}>Level 1</option>
                            <option value={2}>Level 2</option>
                            <option value={3}>Level 3</option>
                            <option value={4}>Level 4</option>
                            <option value={5}>Level 5</option>
                            <option value={6}>Level 6</option>
                            <option value={7}>Level 7</option>
                            <option value={8}>Level 8</option>
                            <option value={9}>Level 9</option>
                            <option value={10}>Level 10</option>
                        </select>
                    </div>
                                <button className='back-btn' onClick={() => { navigate('/admin/user') }}><img src={arr} alt="" /><p>Back</p></button>
                            </div>
                        </div>
                        <div className='container total-table'>
                            <div className='total-table-heading row'>
                                <div className='col-2 text-center'>Sl No</div>
                                <div className='col-4 text-center '>User Name</div>
                                <div className='col-4 text-center '>Phone</div>
                                <div className='col-2 text-right'>UID</div>
                            </div>
                            <div className='total-table-parent'>
                                {downline && downline.users && downline.users.map((item, index) => (
                                    <div className='row' key={index}>
                                        <div className='col-2 text-center'>{(page - 1) * 20 + index + 1}</div>
                                        <div className='col-4 text-center '>{item.name}</div>
                                        <div className='col-4 text-center '>{item.phoneNumber}</div>
                                        <div className='col-2 text-right'>{item.UID}</div>
                                    </div>
                                ))}
                            </div>
                            { downline && downline.totalPages &&
                            <div className='pagination-buttons-container' style={{marginTop:'2rem'}}>
                            <div className='pagination-buttons pagination-buttons-p-m'>
                                <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                    -
                                </button>

                                {downline && <div className='page-count'>{page}/{downline.totalPages} </div>}

                                <button className='increaseBtn ' onClick={() => { setPage(Math.min(page + 1, downline.totalPages)); }}>
                                    +
                                </button>

                            </div>
                        </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDownLine;
