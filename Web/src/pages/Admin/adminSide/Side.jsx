import React, { useEffect } from 'react'
import './Side.css'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Side() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem('authToken')===null){navigate('/admin')}
  },[])
  return (
    <div>
      <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex sticky-top pl-0 pt-5 p-3 mt-3 admin-links">
                <NavLink to='/admin/home'> Home</NavLink>
                <NavLink to='/admin/user'>Users</NavLink>
                <NavLink to='/admin/recharge'> Recharge Requests</NavLink>
                <NavLink to='/admin/withdraw'> Withdraw Requests</NavLink>
                <NavLink to='/admin/prime'> Prime Membership</NavLink>
                <NavLink to='/admin/premiumUsers'> Prime Commission</NavLink>
                <NavLink to='/admin/uploadNewsAndImage'>Update Ui</NavLink>
                <NavLink to='/admin/createGiftCard'>Gift Card</NavLink>
                <NavLink to='/admin/adminResetPassword'>Reset Password</NavLink>
            </ul>
       </div>
    </div>
  )
}

export default Side
