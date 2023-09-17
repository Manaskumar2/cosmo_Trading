import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { GameHistoryList } from '../../Atoms/GameHistory';
import { useRecoilState, useRecoilValue } from 'recoil'
import './GameHistory.css'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
import Winner from '../../images/icon-winner.svg'
import Alpha from '../../images/icon-alpha.svg'
import Beta from '../../images/icon-beta.svg'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function GameHistory({ duration }) {
    const randomWinnerGroup = Math.random() < 0.5 ? 'SMALL' : 'BIG';
    const [activeTab, setActiveTab] = useState(1);
    const auth = useRecoilValue(AuthState)
    const [gameHistoryList, setGameHistoryList] = useRecoilState(GameHistoryList)
    const [userGames, setUserGames] = useState(null)
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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSuccessFullGameHistory/${duration}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                console.log(response);
                setGameHistoryList(response.data)
                console.log(gameHistoryList);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    useEffect(() => {
        getGameHistory();
        const interval = setInterval(() => {
            getGameHistory();
        }, 10000);
        return () => clearInterval(interval);
    }, [duration]);

    useEffect(() => {
        getUserGameHistory()
        const interval = setInterval(() => {
            getUserGameHistory()
        }, 10000);
        return () => clearInterval(interval);
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

                    <div className="table-responsive game_history_table">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th width="140">Winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameHistoryList &&
                                    gameHistoryList.data
                                        .filter((item) => item.isCompleted)
                                        .map((item, index) => {
                                            // Generate a random winnerGroup value for each item
                                            const winnerGroup =
                                                item.bets && item.bets.length > 0
                                                    ? item.winnerGroup // Use the actual winnerGroup if bets exist
                                                    : Math.random() < 0.5
                                                        ? 'SMALL'
                                                        : 'BIG'; // Use a random value if bets are empty

                                            return (
                                                <tr key={index}>
                                                    <td>{item.gameUID}</td>
                                                    <td width="140">
                                                        <div className="winners_col_row">
                                                            <span className="icon_win">
                                                                <img src={Winner} alt="Winner" />
                                                            </span>
                                                            <p>{winnerGroup === 'SMALL' ? 'Alpha' : 'Beta'}</p>
                                                            <span className="icon_rate">
                                                                <img src={winnerGroup === 'SMALL' ? Alpha : Beta} alt="Alpha or Beta" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}



                            </tbody>
                        </table>
                    </div>

                </div>
            }
            {activeTab === 2 &&
                <div>
                    <div className='period-heading'>
                        <div className="table-responsive game_history_table">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Period</th>
                                        <th width="140">Result</th>
                                        <th>Group</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {userGames && userGames.data && userGames.data.history.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.gameId}</td>
                                            <td>{item.result}</td>
                                            <td width="140">
                                                <div className="winners_col_row">
                                                    <span className="icon_win"><img src={Winner} /></span>
                                                    <p style={{ textAlign: "left" }}>{item.group === 'small' ? 'Alpha' : 'Beta'}</p>
                                                    <span className="icon_rate"><img src={item.group === 'small' ? Alpha : Beta} /></span>
                                                </div>
                                            </td>
                                        </tr>))}

                                </tbody>
                            </table>
                        </div>

                        <div className='pagination-buttons-container'>
                            <div className='pagination-buttons'>
                                <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                    <img src={right} alt="" />
                                </button>

                                {userGames && <div className='page-count'>  {page}/{userGames.data.totalPages} </div>}
                                {/* {page}/{item.totalPage} */}

                                <button className='increaseBtn' onClick={() => { setPage(Math.min(page + 1, userGames.data.totalPages)); }}>
                                    <img src={left} alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default GameHistory
