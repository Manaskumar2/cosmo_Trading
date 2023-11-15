import React, { useEffect } from 'react'
import './Side.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Side() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem('authToken')===null){navigate('/admin')}
  },[])
  return (
    <div>
      <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex sticky-top pl-0 pt-5 p-3 mt-3 ">
                <Link to='/admin/home'> Home</Link>
                <Link to='/admin/user'>Users</Link>
                <Link to='/admin/recharge'> Recharge Requests</Link>
                <Link to='/admin/withdraw'> Withdraw Requests</Link>
                <Link to='/admin/prime'> Prime Membership</Link>
                <Link to='/admin/premiumUsers'> Prime Commission</Link>
                <Link to='/admin/uploadNewsAndImage'>Update Ui</Link>
                <Link to='/admin/createGiftCard'>Gift Card</Link>
                <Link to='/admin/adminResetPassword'>Reset Password</Link>

            </ul>
       </div>
    </div>
  )
}

export default Side
