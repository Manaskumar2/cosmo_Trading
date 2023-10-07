import React from 'react'
import '../adminRecharge/ARecharge.css'
import AdminNav from '../adminNav/AdminNav'
import Side from '../adminSide/Side'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AdminAuthState } from '../../../Atoms/AdminAuthState'
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

function UploadPopUpAndNews() {
    const authData = useRecoilValue(AdminAuthState)
    const [newsText, setnewsText] = useState('')
    // articles
    const handleQr = async (e) => {
        e.preventDefault()
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}admin/articles`, { newsText },
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            );
            if (response.status === 201) {
                toast.success("News updated!", { ...toastProps });

                setnewsText("")
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    return (
        <div>
             <AdminNav />
             <div className='flex-div'>
             <Side />
             <div className='admin-rightSection'>
                <Toaster />
                <form onSubmit={handleQr} className='form-rechrge' >
                    <h3 className='text-centre'>Submit News</h3>
                    <label >Enter Latest news</label>

                    <input type="text" value={newsText} placeholder='Enter News' onChange={(e) => { setnewsText(e.target.value) }} />



                    <button type='submit'>Submit</button>
                </form>
            </div>
             </div>
         
        </div>
    )
}

export default UploadPopUpAndNews
