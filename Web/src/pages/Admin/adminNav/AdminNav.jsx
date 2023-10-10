import React from 'react'
import './AdminNav.css'
import { useNavigate } from 'react-router-dom'
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import { useRecoilState } from 'recoil'

function AdminNav() {
  const [auth, setAuth]=useRecoilState(AdminAuthState)
  const navigate =useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem('authToken')
    setAuth(null)
    navigate('/admin')
    
  }

  return (
    <div style={{overFlow:'hidden'}}>
       <>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    
                    <p class="navbar-brand"  title="Free Bootstrap 4 Admin Template" style={{marginLeft:"2rem"}}>Admin Dash Board</p>
                </div>

                    <button type="button" class="btn btn-danger" onClick={handleLogout}>Logout</button>
            

     
       </nav>
    </>
    
    </div>
  )
}

export default AdminNav
