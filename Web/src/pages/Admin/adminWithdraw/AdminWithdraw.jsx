import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
function AdminWithdraw() {
  return (
    <div>
      <AdminNav/>
      <div className='flex-div'>
          <Side/>
          <div className='admin-rightSection'>Withdraw</div>
        </div>
    </div>
  )
}

export default AdminWithdraw
