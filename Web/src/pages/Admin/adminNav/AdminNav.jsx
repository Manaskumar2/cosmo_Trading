import React,{useEffect} from 'react'
import './AdminNav.css'
import { useNavigate } from 'react-router-dom'
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
export const toastProps = {
  position: "top-center",
  duration: 2000,
  style: {
    fontSize: "1rem",
    background: "#fff",
    color: "#333",
  },
};
function AdminNav() {
  const [auth, setAuth]=useRecoilState(AdminAuthState)
  const navigate =useNavigate()
  useEffect(()=>{
    const loggedIn = sessionStorage.getItem('authToken')
    if(!loggedIn){navigate('/admin')}
  },[])
  const handleLogout=()=>{
    sessionStorage.removeItem('authToken')
    setAuth(null)
    navigate('/admin')
  }

  const handleClearGrowup = async () => {
    try {
      let token = auth.authToken;
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/delete`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        toast.success("GrowUp history deleted", { ...toastProps });
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  }
  const handleClearRiseup = async () => {
    try {
      let token = auth.authToken;
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/deleteRiseUpGameHistory`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.status === 200) {
        toast.success("RiseUp history deleted", { ...toastProps });
        return response;
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    }
  }



  return (
    <div style={{overFlow:'hidden'}}>
       <>
       < Toaster/>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    
                    <p class="navbar-brand"  title="Free Bootstrap 4 Admin Template" style={{marginLeft:"2rem"}}>Admin Dash Board</p>
                </div>
                <div><button type="button" class="btn btn-primary" onClick={handleClearGrowup} style={{margin:'0 1rem'}}>Clear GrowUp History</button>
                <button type="button" class="btn btn-primary" onClick={handleClearRiseup} style={{margin:'0 1rem'}}>Clear RiseUp History</button>
                    <button type="button" class="btn btn-danger" onClick={handleLogout} style={{margin:'0 1rem'}}>Logout</button></div>
                
            

     
       </nav>
    </>
    
    </div>
  )
}

export default AdminNav
