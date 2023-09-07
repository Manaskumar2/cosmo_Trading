import React from 'react'
import AdminNav from '../adminNav/AdminNav'
import axios from 'axios'
import Side from '../adminSide/Side'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { AuthState } from '../../../Atoms/AuthState'
function AdminUserData() {
  const authData=useRecoilValue(AuthState)

  const handleUserMoney = async () => {
    try {
        let token = auth.authToken
        let UID = auth.UID
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID}`, {
            headers: { Authorization: `Bearer ${token}` }
        }
        );

        if (response.status === 200) {

            console.log(response);
            setUserData(response)
            return response;
        }
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage || "Something went wrong", { ...toastProps });
    }
}
  
  return (
    <div>
      <AdminNav/>
      <div className='flex-div'>
          <Side/>
          <div className='admin-rightSection'>

          </div>
        </div>
    </div>
  )
}

export default AdminUserData
