import React, { useEffect, useState } from 'react';
import './MyTeam.css';
import calender from '../../../../SVG/calendar 1.svg';
import { AuthState } from '../../Atoms/AuthState';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { UserDetails } from '../../Atoms/UserDetails';
// import left from '../../images/leftArr.svg'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
function MyTeam() {

    const [searchData, setSearchData] = useState(null);
    const [uid, setSearchUID] = useState('');
    // const [downData, setDownData] = useState(null);
    const userData = useRecoilValue(UserDetails);
    const auth = useRecoilValue(AuthState);
    const [downline, setDownline] = useState([]);
    const [page, setPage] = useState(1);
    const [levelNumber, setLevel] = useState(1);
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
    const [accordionOpen, setAccordionOpen] = useState({});

    const toggleAccordion = (UID) => {
        setAccordionOpen((prevState) => {
            const updatedAccordion = { ...prevState };
            for (const key in updatedAccordion) {
                updatedAccordion[key] = false;}
            updatedAccordion[UID] = !prevState[UID];
            return updatedAccordion;});
        handleUserdata(UID);
    };


    const [date, setDate] = useState(formattedCurrentDate);
    const [commission, setCommission] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedUserData, setSelectedUserData] = useState(null);

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        setPage(1)
    };


    const handleLevelData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getAllUsersAtLevel?levelNumber=${levelNumber}&page=${page}&uid=${uid}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setSearchUID('')
                if(response.data.users){
                    setSearchData(null)
                    setDownline(response.data)}
                if(response.data.userDetails){setSearchData(response.data.userDetails)}
                
                console.log(response.data)
            
            }
            return response
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };
    const handleHistoryDataUID = async (UID) => {
        try {
            let userId = auth._id
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getDownlinerDetails/${userId}?UID=${uid}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setSearchUID("")
                console.log(response.data.data)
                setSearchData(response.data.data)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    const handleUserdata = async (UID) => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.status === 200) {
                setSelectedUserData(response.data);
                setShowPopup(true);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    useEffect(() => {
        setSearchData(null)
    }, []);
    useEffect(() => {
        handleLevelData()
    }, [levelNumber,page]);

    // function maskPhoneNumber(phoneNumber) {
    //     const maskedPhoneNumber = phoneNumber.substring(0, 2) + '****' + phoneNumber.substring(6);
    //     return maskedPhoneNumber;
    // }


    return (
        <div className='myTeam' style={{ minHeight: '100vh' }}>
            <div className='container blue'>
                <div className='row team-top-row'>
                    {downline && <div className="col-7">Level {levelNumber } Team : {downline.totalUsers} People </div>}

                    <div className="col-5">
                        <img src={calender} alt="" />
                        <input type="date" className='calender' value={date} onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='row inquries'>
                    <div className="col-4">
                        <input
                            type="text"
                            style={{ color: "#fff", fontFamily: "Montserrat" }}
                            placeholder='UID'
                            value={uid}
                            onChange={(e) => setSearchUID(e.target.value)}
                        />
                    </div>
                    <div className='col-4'>
                        <select value={levelNumber} onChange={handleLevelChange} className='options '>
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
                    <div className="col-4"><button onClick={() => { handleLevelData() }}>Inquiries</button></div>
                </div>
            </div>
            <div className="table-responsive" style={{marginBottom:'5rem'}}>
                <>
                <table className="table table-striped">
                    <thead>
                        <tr className='greenBg'>
                            <th className='b-font'>UID</th>
                            <th className='b-font'>Nick Name</th>
                            <th className='b-font'>Turn Over</th>
                            <th className='b-font'>Status</th>
                            <th className='b-font'>Operate</th>
                        </tr>
                    </thead>
                    {!searchData ?
                        <tbody className='tableBodyRow' >
                            
                            {downline && downline.users && downline.users.map((item, index) => {
                                const phoneNumber = item.phoneNumber;
                                const maskedPhoneNumber = phoneNumber.substring(0, 2) + '****' + phoneNumber.substring(6);
                                return (
                                    <React.Fragment key={index}>
                                    <tr>
                                        <td className='sm-font'>{item.UID}</td>
                                        <td className='sm-font'>{item.name}</td>
                                        <td style={{ paddingLeft: 0 }}>{item.bettingAmount===null?'0':item.bettingAmount}</td>
                                        <td style={{ paddingLeft: 0 }} className='sm-font'>{item.isDeleted===false?'Enable':'Disable'}</td>
                                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='sm-font'>
                                        <button className='details-btn' onClick={() => toggleAccordion(item.UID)} >Details</button>
                                        </td>
                                    </tr>
                                    
                                    {accordionOpen[item.UID] && (
                                        <tr>
                                            <td colSpan="5">
                                                <div className="accordion-content">
                            <div className='down-details'>
                                <p>Total Betting Amount: {item.bettingAmount.toFixed(2)}</p>
                                <p>Registration Time: {new Date(item.createdAt).toLocaleString()} </p>
                                {/* <p>Number of Subordinates: {selectedUserData.data.userDetails.downline.length}</p> */}
                                <p>Today Recharge Amount: {item.lastRechargeAmount}</p>
                            </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    
                                    </React.Fragment>
                                    
                                );
                            })}
                            
                        </tbody> : <tbody className='tableBodyRow'>
                            <tr>
                                <td>{searchData.UID}</td>
                                <td>{searchData.name}</td>
                                <td style={{ paddingLeft: 0 }}>{searchData.bettingAmount===null?'0':searchData.bettingAmount}</td>
                                <td style={{ paddingLeft: 0 }}>
                                {searchData.isDeleted===false?'Enable':'Disable'}
                                </td>
                                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button className='details-btn' onClick={() => toggleAccordion(searchData.UID)}>Details</button>
                                    </td>
                            </tr>
                            {accordionOpen[searchData.UID] && (
                                        <tr>
                                            <td colSpan="5">
                                                <div className="accordion-content">
                                                {selectedUserData && 
                            <div className='down-details'>
                                <p>Total Betting Amount: {selectedUserData.data.userDetails.bettingAmount.toFixed(2)}</p>
                                <p>Registration Time: {new Date(selectedUserData.data.userDetails.createdAt).toLocaleString()} </p>
                                {/* <p>Number of Subordinates: {selectedUserData.data.userDetails.downline.length}</p> */}

                                <p>Today Recharge Amount: {selectedUserData.data.userDetails.lastRechargeAmount}</p>
                            </div>}
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                        </tbody>
                        
                    }
                  
                </table>
                <div className='pagination-buttons-container'>
                            <div className='pagination-buttons'>
                                <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                    <img src={right} alt="" />
                                </button>

                                {downline && <div className='page-count'>{page}/{downline.totalPages} </div>}
                                {/* */}

                                <button className='increaseBtn' onClick={() => { setPage(Math.min(page + 1, downline.totalPages)); }}>
                                    <img src={left} alt="" />
                                </button>

                            </div>
                        </div>
                </>
            </div>
            
          
        </div>
    );
}

export default MyTeam;
