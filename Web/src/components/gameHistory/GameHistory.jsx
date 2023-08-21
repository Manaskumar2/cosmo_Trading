import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { GameHistoryList } from '../../Atoms/GameHistory';
import { useRecoilState, useRecoilValue } from 'recoil'
import './GameHistory.css'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function GameHistory() {
    const [activeTab, setActiveTab] = useState(1);
    const auth = useRecoilValue(AuthState)
    const [gameHistoryList, setGameHistoryList] = useRecoilState(GameHistoryList)
    const [userGames, setUserGames] = useState([])
    const [page, setPage] = useState(1)

    const getUserGameHistory = async () => {

        try {
            let userId = auth._id;
            let token = auth.authToken;
            console.log(token);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/bettingHistory/${userId}`, {
                params: { page },
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response);
                setUserGames(response)
                console.log(userGames)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const getGameHistory = async () => {

        try {
            let token = auth.authToken;
            console.log(token);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSuccessFullGameHistory`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response);
                setGameHistoryList(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    useEffect(() => {
        getGameHistory()
    }, [])
    useEffect(() => {
        getUserGameHistory()
    }, [page])


    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="gameHistory">
            <Toaster />
            <div className="container record-btn-container">
                <div className='row'>
                    <div className='col-6'><button className={activeTab === 1 ? 'activeTab record-btn' : ' record-btn'} onClick={() => { handleTabClick(1) }}>
                        <p>Game Record</p>
                    </button></div>
                    <div className='col-6'>
                        <button className={activeTab === 2 ? 'activeTab record-btn' : 'record-btn '} onClick={() => { handleTabClick(2) }}>
                            <p>My Game Record</p>
                        </button>
                    </div>

                </div>
            </div>

            {activeTab === 1 &&
                <div className='period-heading'>
                    <div className="container heading">
                        <div className="row">
                            <div className="col-8">Period</div>
                            <div className="col-4">Winner</div>
                        </div>
                    </div>
                    <div className="container ">
                        {gameHistoryList && gameHistoryList.data && gameHistoryList.data.data && gameHistoryList.data.data.map((item, index) => (
                            <div
                                key={index}
                                className={` ${index % 2 === 0 ? ' light-blue  list' : ' dark-blue  list'}`}
                            >
                                <div className=" uid">{item.gameUID}</div>
                                <div className=" winGroup">Alfa</div>
                            </div>
                        ))}


                    </div>

                </div>
            }
            {activeTab === 2 &&
                <div>
                    <div className='period-heading'>
                        <div className="container heading">
                            <div className="row">
                                <div className="col-8">Period</div>
                                <div className="col-4">Winner</div>
                            </div>
                        </div>
                        <div className="container ">
                            {userGames && userGames.data && userGames.data.history.map((item, index) => (
                                <div>
                                    <div
                                        key={index}
                                        className={` ${index % 2 === 0 ? ' light-blue  list' : ' dark-blue  list'}`}
                                    >
                                        <div className=" uid">{item.gameUID}</div>
                                        <div className=" winGroup"></div>
                                    </div>
                                    <div className='pagination-buttons-container'>
                                        <div className='pagination-buttons'>
                                            <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                                <img src={left} alt="" />
                                            </button>
                                            <div className='page-count'>
                                                {page}/{item.totalPage}
                                            </div>
                                            <button className='increaseBtn' onClick={() => { setPage(Math.min(page + 1, item.totalPage)); }}>
                                                <img src={right} alt="" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default GameHistory
