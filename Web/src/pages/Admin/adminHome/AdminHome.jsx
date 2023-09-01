import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'

function AdminHome() {
  return (
    <div>
      <AdminNav/>
        <div className='flex-div'>
          <Side/>
          home
        </div>
    </div>
  )
}

export default AdminHome
