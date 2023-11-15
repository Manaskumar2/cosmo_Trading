import React, { useState, useEffect } from 'react';
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
import { GrowUpUserGameHistory, UserGameHistory } from '../../Atoms/UserGameHistory';
import { useNavigate } from 'react-router-dom'
// import { useRecoilValue } from 'recoil';
import { CountDownGrowup } from '../../Atoms/CountDownGrowup';
import { GrowUpPage } from '../../Atoms/GrowUpPage';
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
    const navigate = useNavigate()
    const [historyPage, setHistoryPage] = useState(1)

    const countDownGrowup = useRecoilValue(CountDownGrowup)

    const [expandedRowIndex, setExpandedRowIndex] = useState(null);

    const toggleRow = (index) => {
        if (expandedRowIndex === index) {
            setExpandedRowIndex(null);
        } else {
            setExpandedRowIndex(index);
        }
    };
    const [activeTab, setActiveTab] = useState(1);
    const auth = useRecoilValue(AuthState)
    const [gameHistoryList, setGameHistoryList] = useRecoilState(GameHistoryList)
    const [userGames, setUserGames] = useRecoilState(GrowUpUserGameHistory);
    const [page, setPage] = useRecoilState(GrowUpPage)
    const itemsPerPage = 10;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const getUserGameHistory = async () => {

        try {
            let userId = auth._id;
            let token = auth.authToken;

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/bettingHistory/${userId}`, {
                params: { page },
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setUserGames(response.data)
                return response;
            }
        } catch (error) {
            if (error.response.status === 403) {
                navigate('/signIn')
                return response;
            }
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }

    const getGameHistory = async () => {

        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSuccessFullGameHistory/${duration}`, {
                params: { page: historyPage },
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setGameHistoryList(response.data.data)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }

    // useEffect(() => {
    //     const fetchData = setInterval(getGameHistory, 3500)
    //     return () => { clearInterval(fetchData) }
    // }, [historyPage])
    // useEffect(() => {
    //     const fetchData = setInterval(getUserGameHistory, 3500)
    //     return () => { clearInterval(fetchData) }
    // }, [page])

    useEffect(() => {
        getUserGameHistory()
    }, [page])

    useEffect(() => {
        getGameHistory()
    }, [historyPage])

    useEffect(() => {
        if (countDownGrowup < 5) {
            setHistoryPage(1);
        }
    }, [countDownGrowup]);

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
                                    Array.isArray(gameHistoryList.gamesWithSuccessfulBets) &&
                                    gameHistoryList.gamesWithSuccessfulBets
                                        .filter((item) => item.isCompleted)
                                        .map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.gameUID}</td>
                                                    <td width="140">
                                                        <div className="winners_col_row">
                                                            <span className="icon_win">
                                                                <img src={Winner} alt="Winner" />
                                                            </span>
                                                            <p>
                                                                {item.winnerGroup === 'SMALL'
                                                                    ? 'Alpha'
                                                                    : item.winnerGroup === 'BIG'
                                                                        ? 'Beta'
                                                                        : item.winnerGroup === null && ((item.gameUID % 3 === 0 || item.gameUID % 5 === 0 || item.gameUID % 7 === 0))
                                                                            ? 'Alpha'
                                                                            : 'Beta'}
                                                            </p>
                                                            <span className="icon_rate">
                                                                <img
                                                                    src={
                                                                        item.winnerGroup === 'SMALL'
                                                                            ? Alpha
                                                                            : item.winnerGroup === 'BIG'
                                                                                ? Beta
                                                                                : item.winnerGroup === null && ((item.gameUID % 3 === 0 || item.gameUID % 5 === 0 || item.gameUID % 7 === 0))
                                                                                    ? Alpha
                                                                                    : Beta
                                                                    }
                                                                />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                            </tbody>
                        </table>
                        <div className='pagination-buttons-container'>
                            <div className='pagination-buttons'>
                                <button className='decreaseBtn' onClick={() => { setHistoryPage(Math.max(historyPage - 1, 1)); }}>
                                    <img src={right} alt="" />
                                </button>

                                {gameHistoryList && <div className='page-count'>  {historyPage}/{gameHistoryList.totalPages} </div>}
                                {/* {page}/{item.totalPage} */}
                                <button className='increaseBtn' onClick={() => { setHistoryPage(Math.min(historyPage + 1, gameHistoryList.totalPages)); }}>
                                    <img src={left} alt="" />
                                </button>

                            </div>
                        </div>
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
                                        <th>Game Period</th>
                                        <th width="140" style={{ textAlign: 'center' }}>Result</th>
                                        <th style={{ textAlign: 'right' }}>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userGames &&
                                        userGames &&
                                        userGames.history.slice(startIndex, endIndex).map((item, index) => (
                                            <React.Fragment key={index}>
                                                <tr onClick={() => toggleRow(index)}>
                                                    <td >
                                                        <div style={{ display: 'flex',gap:'1.2rem' }}>
                                                            <div className="icon_rate">
                                                                <img
                                                                    src={item.group === 'small' ? Alpha : Beta}
                                                                    alt="Alpha or Beta"
                                                                    className='game-result-icon' />
                                                            </div>
                                                            <div><div style={{fontWeight:'600',fontSize:'.85rem'}}>{item.gameUID}</div><div style={{fontSize:'.62rem',  letterSpacing:'1px'}}>{new Date(item.orderTime).toLocaleString()}</div> </div>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <div className='game-result-div' style={{
                                                            background: `${item.isCompleted
                                                                ? item.winnerGroup === item.group.toUpperCase()
                                                                    ?  '#05ac34'
                                                                    : '#E8221f'
                                                                : '#B2983C'}`
                                                        }}>
                                                            {item.isCompleted
                                                                ? item.winnerGroup === item.group.toUpperCase()
                                                                    ? 'Win'
                                                                    : 'Lose'
                                                                : 'Pending'}
                                                        </div>

                                                    </td>
                                                    <td>
<div style={{color: `${item.isCompleted ? item.winnerGroup === item.group.toUpperCase()
                                                                        ? '#1BD09A'
                                                                        : '#FF565E'
                                                                        : '#F0C52C'}`,fontWeight:'bold',fontSize:'1.1rem',textAlign:'right'
                                                                }}> {item.isCompleted ? item.winningAmount ? '+' : '-' : ''} {item.isCompleted ? item.winningAmount ? item.winningAmount.toFixed(2) :item.amount : 'Pending'}</div>
                                                    </td>
                                                </tr>
                                                {expandedRowIndex === index && (
                                                    <tr>
                                                        <td colSpan="3">

                                                            <div className="expanded-content">
                                                                <div className='flex-div-space-Betn'><p>Period :</p><p>  {item.gameUID}</p></div>

                                                                <div className='flex-div-space-Betn'><p>Amount :</p><p>  {item.amount}</p></div>
                                                                <div className='flex-div-space-Betn'><p>Winning Amount :</p><p style={{
                                                                    color: `${item.isCompleted ? item.winnerGroup === item.group.toUpperCase()
                                                                        ? '#1BD09A'
                                                                        : '#FF565E'
                                                                        : '#F0C52C'}`
                                                                }}>  {item.isCompleted ? item.winningAmount ? item.winningAmount.toFixed(2) : 0 : 'Pending'}</p></div>

                                                                <div className='flex-div-space-Betn'><p>Betting Placed :</p><p> {item.group === 'small' ? 'Alpha' : 'Beta'}</p></div>
                                                                <div className='flex-div-space-Betn'>
                                                                    <p>Betting Status :</p>
                                                                    <p style={{
                                                                        color: `${item.isCompleted ? item.winnerGroup === item.group.toUpperCase()
                                                                            ? '#1BD09A'
                                                                            : '#FF565E'
                                                                            : '#F0C52C'}`
                                                                    }}>{item.isCompleted ? item.winnerGroup === item.group.toUpperCase() ? 'Win' : 'Lose' : 'Pending'}</p>
                                                                </div>
                                                                <div className='flex-div-space-Betn' ><p>Result Time:</p><p>{item.isCompleted == true ? new Date(item.endTime).toLocaleString() : ' Pending'}</p></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}

                                </tbody>
                            </table>
                        </div>

                        <div className='pagination-buttons-container'>
                            <div className='pagination-buttons'>
                                <button className='decreaseBtn' onClick={() => { setPage(Math.max(page - 1, 1)); }}>
                                    <img src={right} alt="" />
                                </button>

                                {userGames && <div className='page-count'>  {page}/4 </div>}
                                {/* {page}/{item.totalPage} */}

                                <button className='increaseBtn' onClick={() => { setPage(Math.min(page + 1, 4)); }}>
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
