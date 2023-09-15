import React from 'react'
import './AdminLoading.css'
import logo from './Logo.svg'
function AdminLoading() {
    return (
        <div className='admin-loaderBody'>
            <div className='logo-container-loader'><img src={logo} alt="" /></div>
            <div class="loader">Loading
                <span></span>
            </div>
        </div>
    )
}

export default AdminLoading

