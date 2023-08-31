import React, { useEffect } from 'react'
import AdminPanelSidebar from '../../../components/Admin/Sidebar/AdminPanelSidebar'
import TeacherRegistrations2 from '../../../components/Admin/TeacherRegistrations/TeacherRegistrations2'
import { Header } from '../../../components/ComponentExport'
import updateTitle from '../../../utils/updateTitle'

const TeachersDashboard = () => {
  useEffect(() => {
    updateTitle('Teachers Request - Admin')
  }, []);
  return (
    <div>
        <Header/>
        <div className='flex'>
          <AdminPanelSidebar/>
          <TeacherRegistrations2/>
        </div>
    </div>
  )
}

export default TeachersDashboard