import React, { useEffect } from 'react'
import AdminPanelSidebar from '../../../components/Admin/Sidebar/AdminPanelSidebar'
import { Header } from '../../../components/ComponentExport'
import DoubtsPanel from '../../../components/Admin/Doubts/DoubtsPanel'
import updateTitle from '../../../utils/updateTitle'

const DoubtDashboard = () => {
    useEffect(() => {
        updateTitle('Doubts - Admin')
    }, []);
    return (
        <div>
            <Header />
            <div className='flex'>
                <AdminPanelSidebar />
                <DoubtsPanel />
            </div>
        </div>
    )
}

export default DoubtDashboard