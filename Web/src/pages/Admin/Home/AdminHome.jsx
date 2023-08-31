import React, { useEffect } from 'react'
import AdminPanelSidebar from '../../../components/Admin/Sidebar/AdminPanelSidebar'
import { Header } from '../../../components/ComponentExport'
import updateTitle from '../../../utils/updateTitle';

const AdminHome = () => {
  useEffect(() => {
    updateTitle('Admin Home')
  }, []);
  return (
    <div>
        <Header/>
        <div className='flex'>
          <AdminPanelSidebar/>
        </div>
    </div>
  )
}

export default AdminHome