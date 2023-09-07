import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'

function AdminHome() {
  return (
    <div>
      <AdminNav/>
        <div className='flex-div'>
          <Side/>
         <div className='admin-rightSection'>Home</div>
        </div>
    </div>
  )
}

export default AdminHome
