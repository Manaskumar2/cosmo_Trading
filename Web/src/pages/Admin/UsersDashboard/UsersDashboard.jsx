import React, { useEffect } from 'react'
import AdminPanelSidebar from '../../../components/Admin/Sidebar/AdminPanelSidebar'
import { Header } from '../../../components/ComponentExport'
import TableWrapper from '../../../components/Admin/UsersPanel/UserAdminPanel_V2'
import updateTitle from '../../../utils/updateTitle'

const UsersDashboard = () => {
  useEffect(() => {
    updateTitle('Users - Admin')
  }, []);
  return (
    <div>
        <Header/>
        <div className='flex'>
          <AdminPanelSidebar/>
          {/* <UserAdminPanel/> */}
          <TableWrapper />
        </div>
    </div>
  )
}

export default UsersDashboard