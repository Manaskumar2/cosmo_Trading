import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import axios from 'axios'
import Side from '../adminSide/Side'
function AdminUserData() {

  
  return (
    <div>
      <AdminNav/>
      <div className='flex-div'>
          <Side/>
          <div>Recharge</div>
        </div>
    </div>
  )
}

export default AdminUserData
