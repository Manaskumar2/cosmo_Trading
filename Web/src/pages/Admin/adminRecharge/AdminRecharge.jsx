import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
function AdminRecharge() {
  return (
    <div>
      <AdminNav/>
      <div className='flex-div'>
          <Side/>
          <div className='admin-rightSection'>Recharge</div>
        </div>
    </div>
  )
}

export default AdminRecharge
