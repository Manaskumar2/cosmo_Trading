
import './PromotionHistory.css'
import '../../components/gameHistory/GameHistory.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
// import {}
import { useRecoilState, useRecoilValue } from 'recoil'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
import Winner from '../../images/icon-winner.svg'
import Alpha from '../../images/icon-alpha.svg'
import Beta from '../../images/icon-beta.svg'
import { UserGameHistory } from '../../Atoms/UserGameHistory';
import { UserGameHistoryRiseUp } from '../../Atoms/UserGameHistoryRiseUp';
import Gama from '../../images/Gamma.svg'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};
function PromotionHistory() {
    const [expandedRowIndex, setExpandedRowIndex] = useState(null);

    const toggleRow = (index) => {
        if (expandedRowIndex === index) {
            setExpandedRowIndex(null);
        } else {
            setExpandedRowIndex(index);
        }
    };
    const iconSources = [Alpha, Beta, Gama]
    const [activeTab, setActiveTab] = useState(1);
    const auth = useRecoilValue(AuthState)
    const [userGames, setUserGames] = useRecoilState(UserGameHistory)
    const [userSecondGames, setUserSecondGames] = useRecoilState(UserGameHistoryRiseUp)
    const [page, setPage] = useState(1)
    const [page2, setPage2] = useState(1)
    const getSecondUserGameHistory = async () => {
        try {
            let userId = auth._id;
            let token = auth.authToken;
            console.log(token);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/get2ndgameUserHistory/${userId}`, {
                params: { page: page2 },
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                console.log(response);
                setUserSecondGames(response)
                console.log(userGames)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }
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
    useEffect(() => {
        getUserGameHistory()
        getSecondUserGameHistory()
    }, [page, page2])
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div style={{ minHeight: "100vh" }}>
            <div className="gameHistory">
                <Toaster />
                <div className="container record-btn-container">
                    <div className='row'>
                        <div className='col-6'><button className={activeTab === 1 ? 'activeTab record-btn' : ' record-btn'} onClick={() => { handleTabClick(1) }}>
                            <p>Grow Up</p>
                        </button></div>
                        <div className='col-6'>
                            <button className={activeTab === 2 ? 'activeTab record-btn' : 'record-btn '} onClick={() => { handleTabClick(2) }}>
                                <p>Rise Up</p>
                            </button>
                        </div>
                    </div>
                </div>
                {activeTab === 1 &&
                    <div>
                        <div className='period-heading'>
                            <div className="table-responsive game_history_table">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Period</th>
                                            <th width="140" style={{ textAlign: 'center' }}>Result</th>
                                            <th style={{ textAlign: 'center' }}>Group</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {userGames &&
                                            userGames.data &&
                                            userGames.data.history.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <tr onClick={() => toggleRow(index)}>
                                                        <td>{item.gameUID}</td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            {item.isCompleted
                                                                ? item.winnerGroup === item.group.toUpperCase()
                                                                    ? 'Win'
                                                                    : 'Lose'
                                                                : 'Pending'}
                                                        </td>
                                                        <td>
                                                            <div className="winners_col_row">
                                                                <span className="icon_win">
                                                                    <img src={Winner} alt="Winner" />
                                                                </span>
                                                                <p style={{ textAlign: 'left' }}>
                                                                    {item.group === 'small' ? 'Alpha' : 'Beta'}
                                                                </p>
                                                                <span className="icon_rate">
                                                                    <img
                                                                        src={item.group === 'small' ? Alpha : Beta}
                                                                        alt="Alpha or Beta"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {expandedRowIndex === index && (
                                                        <tr>
                                                            <td colSpan="3">

                                                                <div className="expanded-content">
                                                                    <div className='flex-div-space-Betn'><p>Period :</p><p>  {item.gameUID}</p></div>

                                                                    <div className='flex-div-space-Betn'><p>Amount :</p><p>  {item.amount}</p></div>

                                                                    <div className='flex-div-space-Betn'><p>Betting Placed :</p><p> {item.group === 'small' ? 'Alpha' : 'Beta'}</p></div>
                                                                    <div className='flex-div-space-Betn'>
                                                                        <p>Betting Status :</p>
                                                                        <p >{item.isCompleted
                                                                            ? item.winnerGroup === item.group.toUpperCase()
                                                                                ? 'Win'
                                                                                : 'Lose'
                                                                            : 'Pending'}</p>
                                                                    </div>
                                                                    <div className='flex-div-space-Betn' ><p>Order Time:</p><p>{new Date(item.startTime).toLocaleString()}</p></div>



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
                {activeTab === 2 &&
                    <div>
                        <div className='period-heading'>
                            <div className="table-responsive game_history_table">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Period</th>
                                            <th width="140" style={{ textAlign: 'center' }}>Result</th>
                                            <th style={{ textAlign: 'center' }}>Group</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userSecondGames &&
                                            userSecondGames.data &&
                                            userSecondGames.data.history.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <tr onClick={() => toggleRow(index)}>
                                                        <td>{item.gameUID}</td>
                                                        <td style={{ textAlign: 'center' }}> {
                                                            item.isCompleted
                                                                ? item.group === item.winnerGroup
                                                                    ? 'Win'
                                                                    : item.group === item.loserGroup
                                                                        ? 'Lose'
                                                                        : item.group === item.runnerUpGroup
                                                                            ? 'Runner Up'
                                                                            : 'Pending'
                                                                : 'Pending'
                                                        }</td>
                                                        <td>
                                                            <div className="winners_col_row">
                                                                <span className="icon_win">
                                                                    <img src={Winner} alt="Winner" />
                                                                </span>
                                                                <span className="icon_rate">
                                                                    {item.group === 'A' ? (
                                                                        <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                                    ) : item.group === 'B' ? (
                                                                        <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                                    ) : item.group === 'C' ? (
                                                                        <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                                    ) : (
                                                                        <img src={iconSources[Math.floor(Math.random() * iconSources.length)]} alt="Random Icon" />
                                                                    )}
                                                                </span>
                                                                {/* {item.runnerUpGroup && <span className="icon_rate">
                                                                    {item.runnerUpGroup === 'A' ? (
                                                                        <img src={Alpha} alt="Alpha" />
                                                                    ) : item.runnerUpGroup === 'B' ? (
                                                                        <img src={Beta} alt="Beta" />
                                                                    ) : item.runnerUpGroup === 'C' ? (
                                                                        <img src={Gama} alt="Gamma" />
                                                                    ) : (
                                                                        <img src={iconSources[Math.floor(Math.random() * iconSources.length)]} alt="Random Icon" />
                                                                    )}
                                                                </span>} */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {expandedRowIndex === index && (
                                                        <tr>
                                                            <td colSpan="3">
                                                                <div className="expanded-content">
                                                                    <div className='flex-div-space-Betn'><p>Period :</p><p>  {item.gameUID}</p></div>
                                                                    <div className='flex-div-space-Betn'><p>Amount :</p><p>  {item.amount}</p></div>
                                                                    <div className='flex-div-space-Betn'><p>Betting Placed :</p><p> {item.group === 'A' ? 'Alpha' : item.group === 'B' ? 'Beta' : item.group === 'C' ? 'Gama' : 'Unknown'}</p></div>

                                                                    <div className='flex-div-space-Betn'>
                                                                        <p>Betting Status :</p>
                                                                        <p style={{ textAlign: 'left' }}>
                                                                            {
                                                                                item.isCompleted
                                                                                    ? item.group === item.winnerGroup
                                                                                        ? 'Win'
                                                                                        : item.group === item.loserGroup
                                                                                            ? 'Lose'
                                                                                            : item.group === item.runnerUpGroup
                                                                                                ? 'Runner Up'
                                                                                                : 'Pending'
                                                                                    : 'Pending'
                                                                            }

                                                                        </p>
                                                                    </div>
                                                                    <div className='flex-div-space-Betn' ><p>Order Time:</p><p>{new Date(item.startTime).toLocaleString()}</p></div>
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

                                    {userSecondGames && <div className='page-count'>  {page}/{userSecondGames.data.totalPages} </div>}
                                    {/* {page}/{item.totalPage} */}
                                    <button className='increaseBtn' onClick={() => { setPage(Math.min(page + 1, userSecondGames.data.totalPages)); }}>
                                        <img src={left} alt="" />
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default PromotionHistory
