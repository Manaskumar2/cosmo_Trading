import React from 'react'
import './Side.css'
import {Link} from 'react-router-dom'
function Side() {
  return (
    <div>
      <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <Link to='/admin/home'> Home</Link>
                <Link to='/admin/user'>All Users</Link>
                <Link to='/admin/recharge'> Recharge Requests</Link>
                <Link to='/admin/withdraw'> Withdraw Requests</Link>
                <Link to='/admin/prime'> Premium Membership</Link>
                <Link to='/admin/premiumUsers'> Premium Users</Link>

            </ul>
       </div>
    </div>
  )
}

export default Side
