import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
function AdminWithdraw() {
  return (
    <div>
      <AdminNav/>
      <div className='flex-div'>
          <Side/>
          <div></div>
        </div>
    </div>
  )
}

export default AdminWithdraw
