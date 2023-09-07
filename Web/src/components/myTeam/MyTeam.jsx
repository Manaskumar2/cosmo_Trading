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
    const [level, setLevel] = useState(2);
    const[date,setDate]=useState(null)
    const [commission, setCommission] = useState(null)

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };
    console.log(userData);
    const handleHistoryData = async () => {
        try {
            let userId =  auth._id
            let token = auth.authToken;
            console.log(level)
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getDownlinerDetails/${userId}?level=${level}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response);
                setDownline(response.data.downlineDetails);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            console.log(errorMessage);
        }
    };
    const handleCommission = async (date) => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getCommissionDetails/${date}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response);
                setCommission(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            console.log(errorMessage);
        }
    };

    useEffect(()=>{
        handleHistoryData()
    },[level])
    useEffect(()=>{
        handleCommission(date)
    },[date])

    return (
        <div className='myTeam' style={{minHeight:'100vh'}}>
            <div className='container blue'>
                <div className='row team-top-row'>
                {userData &&<div className="col-7">Direct Team  {userData.data.data.userDetails.downline.length} People </div>}
                    <div className="col-5"><img src={calender} alt="" onClick={()=>{handleCommission()}}/><input type="date" className='calender' value={date} onChange={(e) => { setDate(e.target.value) }} />



</div>
                </div>
            </div>
            <div className='container '>
                <div className='row inquries'>
                    <div className="col-4"><input type="text" placeholder='UID'/></div>
                    <div className='col-4'>
      <select value={level} onChange={handleLevelChange} className='options '>
        <option value={2}>Level 1</option>
        <option value={3}>Level 2</option>
        <option value={4}>Level 3</option>
        <option value={5}>Level 4</option>
        <option value={6}>Level 5</option>
        <option value={7}>Level 6</option>
        <option value={8}>Level 7</option>
        <option value={9}>Level 8</option>
        <option value={10}>Level 9</option>
      </select>
    </div>
                    <div className="col-4"><button>Inquires</button></div>
                </div>
            </div>
            <div className='container '>
                <div className='row total-bet-row'>
                {userData &&<div className="col-6" style={{borderRight:'1px solid #1E5D81'}}>Total Winning Ammount : 	&nbsp;<span style={{color:"#FBB040"}}>{userData.data.data.userDetails.winningAmount}</span></div>}
                    <div className="col-6">Total Commission Amount : 	&nbsp;{commission &&<span style={{color:"#FBB040"}}>{commission.data.totalCommissionAmount}</span>}</div>
                </div>
            </div>
            
            <div className="table-responsive">
                        <table className="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>UID </th>
                                    <th>Nick Name</th>
                                    <th>Phone No</th>
                                    <th>Operate </th>
                                </tr>
                            </thead>
                            <tbody className='tableBodyRow'>
                                {downline && 
                                downline.map((item, index) => 
                                <tr key={index}>
                                    <td>{item.UID}</td>
                                    <td>{item.name}</td>
                                    <td style={{ paddingLeft: 0 }}>{item.phoneNumber}</td>
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