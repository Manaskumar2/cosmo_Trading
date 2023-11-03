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
    const [editIndex, setEditIndex] = useState(-1);
    const[winner , setWinner]=useState(null)
    const initialDocuments = Array(10).fill({ name: '', winningAmount: 0 });
    const [documents, setDocuments] = useState(initialDocuments);
    const [totalPlayers, settotalPlayers] = useState(0)
    const [bankName, setBank] = useState('')
    const [TotalBetting, setTotalBetting] = useState(0)
    const [onlinePlayers, setonlinePlayers] = useState(0)
    const [todayTotalWithdrawal, settodayTotalWithdrawal] = useState(0)
    const [file, setfile] = useState(null);
    const authData = useRecoilValue(AdminAuthState)
    const [newsText, setnewsText] = useState('')
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setfile(file);
    };
    const handleEdit = (index) => {setEditIndex(index);};
    const handleImg = async () => {
        const formData = new FormData();
        formData.append('image', file);
        console.log(formData)
        try {
            let token = authData.authToken;
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/admin/uploads`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (response.status === 201) {
                toast.success("Image uploaded!", { ...toastProps });
                setfile(null)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    const handleQr = async (e) => {
        e.preventDefault()
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/articles`, { newsText },
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
    const handleDelete = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/deleteImage`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            );
            if (response.status === 200) {
                toast.success("Pop up image deleted!", { ...toastProps });
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    const getWinner = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/getWinningDocument`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            );
            if (response.status === 200) {
                setWinner(response.data.documents)
                console.log(response.data.documents)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    const handleFakeData = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/fakePlayers`, {
                totalPlayers,
                TotalBetting,
                onlinePlayers,
                todayTotalWithdrawal
            },
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            if (response.status === 201) {
                toast.success("Successfully Updated!", { ...toastProps });

                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    const handleBankData = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/bankName`, { bankName },
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            if (response.status === 200) {
                toast.success("Bank Name Successfully Created!", { ...toastProps });
                setBank('')
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    const handleWinner = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin/winningDoument`, { documents },
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            if (response.status === 200) {
                toast.success("Winners Successfully Created!", { ...toastProps });
                setDocuments(null)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }
    const handleDeleteWinner = async () => {
        try {
            let token = authData.authToken;
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/deleteWinningDocument`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                },
            )
            if (response.status === 200) {
                toast.success("Previous Winners Successfully Deleted!", { ...toastProps });
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }





    const handleDocumentNameChange = (index, event) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index] = { ...updatedDocuments[index], name: event.target.value };
        setDocuments(updatedDocuments);
    }

    const handleWinningAmountChange = (index, event) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index] = { ...updatedDocuments[index], winningAmount: parseInt(event.target.value, 10) };
        setDocuments(updatedDocuments);
    }

    useEffect(()=>{getWinner()},[])
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
                    <div className='form-rechrge' >
                        <h3 className='text-centre'>Upload Promo Image</h3>
                        <label >Select Image</label>
                        <input type="file" accept=".jpg, .jpeg, .png, .svg" onChange={handleImageChange} />
                        <button onClick={handleImg}>Submit</button>
                        <button onClick={handleDelete} style={{ background: "red" }}>Delete</button>
                    </div>
                    {/* totalPlayers,
                    TotalBetting,
                    onlinePlayers,
                    todayTotalWithdrawal */}
                    <div className='form-rechrge' >
                        <h3 className='text-centre'>Update Players & Total Withdraw</h3>
                        <label htmlFor="">Enter Total Players </label>
                        <input type='number' onChange={(e) => { settotalPlayers(e.target.value) }} placeholder='Enter Total Players' value={totalPlayers} />
                        <label htmlFor="">Enter Total Betting </label>
                        <input type='number' onChange={(e) => { setTotalBetting(e.target.value) }} placeholder='Enter Total Betting' value={TotalBetting} />
                        <label htmlFor="">Enter Total Online Players</label>
                        <input type='number' onChange={(e) => { setonlinePlayers(e.target.value) }} placeholder='Enter onlinePlayers' value={onlinePlayers} />
                        <label htmlFor="">Enter Total Withdraw </label>
                        <input type='number' onChange={(e) => { settodayTotalWithdrawal(e.target.value) }} placeholder='Enter Total Withdraw' value={todayTotalWithdrawal} />
                        <button onClick={handleFakeData}>Submit</button>
                    </div>
                    <div className='form-rechrge' >
                        <h3 className='text-centre'>Add Bank Name</h3>
                        <label htmlFor="">Enter Bank Name</label>
                        <input type='text' onChange={(e) => { setBank(e.target.value) }} placeholder='Enter Bank Name' value={bankName} />
                        <button onClick={handleBankData}>Submit</button>
                    </div>
                    <div className='form-rechrge'>
                        <h2>Enter Winner IDs, Names, and Winning Amounts</h2>
                        <form>
                            {documents && documents.map((document, index) => (
                                <div key={index} className='winner-input'>
                                    <input
                                        type="text"
                                        placeholder={`Winner ${index + 1} Name`}
                                        value={document.name} 
                                        onChange={(event) => handleDocumentNameChange(index, event)}
                                    />
                                    <input
                                        type="number"
                                        placeholder={`Winner ${index + 1} Winning Amount`}
                                        value={document.winningAmount}
                                        onChange={(event) => handleWinningAmountChange(index, event)}
                                        style={{marginLeft:'12rem'}}
                                    />
                                </div>
                            ))}
                        </form>
                        <button onClick={() => { handleWinner() }}>Save Documents</button>
                        <button onClick={() => { handleDeleteWinner() }} style={{background:'red'}}>Delete Previous Data</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPopUpAndNews
