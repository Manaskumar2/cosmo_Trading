import React,{useEffect,useState} from 'react'
import './MyTeam.css'
import calender from '../../../../SVG/calendar 1.svg'
import { AuthState } from '../../Atoms/AuthState';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import {UserDetails} from '../../Atoms/UserDetails'

function MyTeam() {
    const userData=useRecoilValue(UserDetails)
    const auth=useRecoilValue(AuthState)
    const [downline, setDownline]=useState([])
    console.log(userData);
    const handleHistoryData = async () => {
        try {
            let userId =  auth._id
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getDownlinerDetails/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response);
                setDownline((prevArray) => [...prevArray, ...response.data.downlineDetails]);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            console.log(errorMessage);
        }
    };

    useEffect(()=>{
        handleHistoryData()
    },[])

    return (
        <div className='myTeam' style={{minHeight:'100vh'}}>
            <div className='container blue'>
                <div className='row team-top-row'>
                {userData &&<div className="col-7">Direct Team  {userData.data.data.userDetails.downline.length} People </div>}
                    <div className="col-5"><img src={calender} alt="" /><p>07 Aug 2023</p></div>
                </div>
            </div>
            <div className='container '>
                <div className='row inquries'>
                    <div className="col-6"><input type="text" placeholder='UID'/></div>
                    <div className="col-6"><button>Inquires</button></div>
                </div>
            </div>
            <div className='container '>
                <div className='row total-bet-row'>
                {userData &&<div className="col-6" style={{borderRight:'1px solid #1E5D81'}}>Total Winning Ammount : 	&nbsp;<span style={{color:"#FBB040"}}>{userData.data.data.userDetails.winningAmount}</span></div>}
                    {userData &&<div className="col-6">Total Rebate Amount : 	&nbsp;<span style={{color:"#FBB040"}}>{userData.data.data.userDetails.commissionAmount}</span></div>}
                </div>
            </div>
            <div className="table-responsive">
                        <table className="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>UID </th>
                                    <th>Nick Name</th>
                                    <th>Turn Over</th>
                                    <th>Operate </th>

                                </tr>
                            </thead>
                            <tbody className='tableBodyRow'>
                                {downline && 
                                downline.map((item, index) => 
                                <tr key={index}>
                                    <td>{item.UID}</td>
                                    <td>{item.name}</td>
                                    <td style={{ paddingLeft: 0 }}>{item.turnOver}</td>
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    )
}

export default MyTeam
