import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { GameHistoryListRiseUp } from '../../Atoms/GameHistoryListRiseUp';
import { UserGameHistoryRiseUp } from '../../Atoms/UserGameHistoryRiseUp';
import { useRecoilState, useRecoilValue } from 'recoil'
import '../gameHistory/GameHistory.css'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
import Winner from '../../images/icon-winner.svg'
import Alpha from '../../images/icon-alpha.svg'
import Beta from '../../images/icon-beta.svg'
import Gama from './gama.svg'
import {useNavigate} from 'react-router-dom'
import { GrowUpPage } from '../../Atoms/GrowUpPage'; 
import { CountDownRiseup } from '../../Atoms/CountDownRiseup';

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
    const navigate=useNavigate()
    const [page, setPage] = useRecoilState(GrowUpPage)
    const itemsPerPage = 10; 

const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
    const second = useRecoilValue(CountDownRiseup)
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
    const [gameHistoryList, setGameHistoryList] = useRecoilState(GameHistoryListRiseUp)
    const [userGames, setUserGames] = useRecoilState(UserGameHistoryRiseUp)
    const [historyPage, setHistoryPage] = useState(1)

    const getUserGameHistory = async () => {
        try {
            let userId = auth._id;
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/get2ndgameUserHistory/${userId}`, {
                params: { page },
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(response);
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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/gameHistory/${duration}`, {
                params:{page : historyPage},
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
        getUserGameHistory();
    }, [page])
    
    useEffect(() => {
        if(activeTab === 1){
            getGameHistory()
        }
    }, [historyPage, activeTab])


    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    useEffect(() => {
        if (second < 5) {
            setHistoryPage(1);
        }
    }, [second]);

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
                                    <th width="200">Winner & RunnerUp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameHistoryList &&
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
                                                            <span className="icon_rate">
                                                            {item.winnerGroup === 'A' ? (
                                                                <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }}/>
                                                            ) : item.winnerGroup === 'B' ? (
                                                                <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }}/>
                                                            ) : item.winnerGroup === 'C' ? (
                                                                <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }}/>
                                                            ) : item.winnerGroup === null && item.losersGroup === null && item.runnerUpGroup === null ?(
                                                                item.gameUID % 3 === 2 || item.gameUID % 3 === 5 || item.gameUID % 3 === 9 ? (
                                                                    <img src={Gama} alt="Alpha"  style={{ height: "2rem", width: "2rem" }}/>
                                                                ) : item.gameUID % 3 === 1 || item.gameUID % 3 === 4 || item.gameUID % 3 === 7 || item.gameUID % 3 === 8 ? (
                                                                    <img src={Alpha} alt="Beta"  style={{ height: "2rem", width: "2rem" }}/>
                                                                ) : item.gameUID % 3 === 0 || item.gameUID % 3 === 3 || item.gameUID % 3 === 6 ? (
                                                                    <img src={Beta} alt="Gamma"  style={{ height: "2rem", width: "2rem" }}/>
                                                                ) : null
                                                            ) :item.winnerGroup === null && item.losersGroup != null && item.runnerUpGroup === null ? (
                                                                item.losersGroup === 'A' ? (
                                                                    <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.losersGroup === 'B' ? (
                                                                    <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.losersGroup === 'C' ? (
                                                                    <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : null
                                                            )
                                                            : null}
                                                                {/* {item.winnerGroup === 'A' ? (
                                                                    <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.winnerGroup === 'B' ? (
                                                                    <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.winnerGroup === 'C' ? (
                                                                    <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.winnerGroup === null && item.gameUID % 2 === 1 ? (
                                                                    <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.winnerGroup === null && item.gameUID % 2 === 0 ? (
                                                                    <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.winnerGroup === null && item.gameUID % 3 === 0 ? (
                                                                    <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : null} */}

                                                            </span>
                                                            { 
                                                            // <span className="icon_rate">
                                                            // {item.winnerGroup === 'A' ? (
                                                            //     <img src={Alpha} alt="Alpha" />
                                                            // ) : item.winnerGroup === 'B' ? (
                                                            //     <img src={Beta} alt="Beta" />
                                                            // ) : item.winnerGroup === 'C' ? (
                                                            //     <img src={Gama} alt="Gamma" />
                                                            // ) : item.winnerGroup === null ? (
                                                            //     item.gameUID % 3 === 2 || item.gameUID % 3 === 5 || item.gameUID % 3 === 9 ? (
                                                            //         <img src={Gama} alt="Alpha"  style={{ height: "2rem", width: "2rem" }}/>
                                                            //     ) : item.gameUID % 3 === 1 || item.gameUID % 3 === 4 || item.gameUID % 3 === 7 || item.gameUID % 3 === 8 ? (
                                                            //         <img src={Alpha} alt="Beta"  style={{ height: "2rem", width: "2rem" }}/>
                                                            //     ) : item.gameUID % 3 === 0 || item.gameUID % 3 === 3 || item.gameUID % 3 === 6 ? (
                                                            //         <img src={Beta} alt="Gamma"  style={{ height: "2rem", width: "2rem" }}/>
                                                            //     ) : null
                                                            // ) : null}
                                                            //     {/* {item.winnerGroup === 'A' ? (
                                                            //         <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                            //     ) : item.winnerGroup === 'B' ? (
                                                            //         <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                            //     ) : item.winnerGroup === 'C' ? (
                                                            //         <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                            //     ) : item.winnerGroup === null && item.gameUID % 2 === 1 ? (
                                                            //         <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                            //     ) : item.winnerGroup === null && item.gameUID % 2 === 0 ? (
                                                            //         <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                            //     ) : item.winnerGroup === null && item.gameUID % 3 === 0 ? (
                                                            //         <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                            //     ) : null} */}

                                                            // </span> 
                                                            }

                                                            {
                                                            item.runnerUpGroup === 'A' ? (
                                                                <img src={Alpha} alt="Alpha" />
                                                            ) : item.runnerUpGroup === 'B' ? (
                                                                <img src={Beta} alt="Beta" />
                                                            ) : item.runnerUpGroup === 'C' ? (
                                                                <img src={Gama} alt="Gamma" />
                                                            ) :item.winnerGroup === null && item.losersGroup=== null && item.runnerUpGroup === null  ? (
                                                                item.gameUID % 3 === 2 || item.gameUID % 3 === 5 || item.gameUID % 3 === 9 ? (
                                                                    <img src={Alpha} alt="Alpha" />
                                                                ) : item.gameUID % 3 === 1 || item.gameUID % 3 === 4 || item.gameUID % 3 === 7 || item.gameUID % 3 === 8 ? (
                                                                    <img src={Beta} alt="Beta" />
                                                                ) : item.gameUID % 3 === 0 || item.gameUID % 3 === 3 || item.gameUID % 3 === 6 ? (
                                                                    <img src={Gama} alt="Gamma" />
                                                                ) : null
                                                            ):
                                                            item.winnerGroup === null && item.losersGroup != null && item.runnerUpGroup === null ? (
                                                                item.losersGroup === 'A' ? (
                                                                    <img src={Beta} alt="Beta" />
                                                                    
                                                                ) : item.losersGroup === 'B' ? (
                                                                    <img src={Gama} alt="Gamma" />
                                                                    
                                                                ) : item.losersGroup === 'C' ? (
                                                                    <img src={Alpha} alt="Alpha"  />
                                                                ) : null
                                                            ):
                                                            item.winnerGroup !== null && item.losersGroup !== null && item.runnerUpGroup === null ? (
                                                                item.winnerGroup === 'A' && item.losersGroup === 'B' || item.winnerGroup === 'B' && item.losersGroup === 'A' ? (
                                                                    <img src={Gama} alt="Gamma" />
                                                                ) : item.winnerGroup === 'B' && item.losersGroup === 'C' || item.winnerGroup === 'C' && item.losersGroup === 'B' ? (
                                                                    <img src={Alpha} alt="Alpha" />
                                                                ) : item.winnerGroup === 'A' && item.losersGroup === 'C'|| item.winnerGroup === 'C' && item.losersGroup === 'A' ? (
                                                                    <img src={Beta} alt="Beta" />
                                                                ) : null
                                                            ) : null
                                                            
                                                            }

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
                                        <th style={{ textAlign: 'center' }}>Price</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                {userGames.history.slice(startIndex, endIndex).map((item, index) => (
                                            <React.Fragment key={index}>
                                                <tr onClick={() => toggleRow(index)}>
                                                    <td><div style={{ display: 'flex',gap:'1.2rem' }}>
                                                            <div className="icon_rate">
                                                            {item.group === 'A' ? (
                                                                    <img src={Alpha} alt="Alpha" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.group === 'B' ? (
                                                                    <img src={Beta} alt="Beta" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : item.group === 'C' ? (
                                                                    <img src={Gama} alt="Gamma" style={{ height: "2rem", width: "2rem" }} />
                                                                ) : (
                                                                    <img src={iconSources[Math.floor(Math.random() * iconSources.length)]} alt="Random Icon" />
                                                                )}
                                                            </div>
                                                            <div><div style={{fontWeight:'600',fontSize:'.85rem'}}>{item.gameUID}</div><div style={{fontSize:'.62rem',  letterSpacing:'1px'}}>{new Date(item.orderTime).toLocaleString()}</div> </div>
                                                        </div></td>
                                                    <td style={{ textAlign: 'center' }}>
                                                    
                                                    <div className='game-result-div' style={{
                                                            background: `${
                                                                item.isCompleted
                                                                    ? item.group === item.winnerGroup
                                                                        ? '#05ac34'
                                                                        : item.group === item.losersGroup
                                                                            ? '#E8221f'
                                                                            : item.group === item.runnerUpGroup
                                                                                ? '#DEAF06'
                                                                                : '#B2983C'
                                                                    : '#B2983C'}`}}>
                                                        {
                                                        item.isCompleted
                                                            ? item.group === item.winnerGroup
                                                                ? 'Win'
                                                                : item.group === item.losersGroup
                                                                    ? 'Lose'
                                                                    : item.group === item.runnerUpGroup
                                                                        ? 'Runner Up'
                                                                        : 'Pending'
                                                            : 'Pending'
                                                    }
                                                        </div>
                                                    </td>
                                                    <td>
                                                    <div style={{color: `${
                                                                item.isCompleted
                                                                    ? item.group === item.winnerGroup
                                                                        ? '#279775'
                                                                        : item.group === item.losersGroup
                                                                            ? '#F24C54'
                                                                            : item.group === item.runnerUpGroup
                                                                                ? '#279775'
                                                                                : '#B2983C'
                                                                    : '#B2983C'}`,fontWeight:'bold',fontSize:'1.1rem',textAlign:'right'
                                                                }}> {item.isCompleted ? item.winningAmount ? '+' : '-' : ''} {item.isCompleted ? item.winningAmount ? item.winningAmount.toFixed(2) :item.amount : 'Pending'}</div>
                                                    </td>
                                                </tr>
                                                {expandedRowIndex === index && (
                                                    <tr>
                                                        <td colSpan="3">
                                                            <div className="expanded-content">
                                                                <div className='flex-div-space-Betn'><p>Period :</p><p>  {item.gameUID}</p></div>
                                                                <div className='flex-div-space-Betn'><p>Amount :</p><p>  {item.amount}</p></div>
                                                                <div className='flex-div-space-Betn'><p >Winning Amount :</p><p style={{
                                                            color: `${
                                                                item.isCompleted
                                                                    ? item.group === item.winnerGroup
                                                                        ? '#279775'
                                                                        : item.group === item.losersGroup
                                                                            ? '#F24C54'
                                                                            : item.group === item.runnerUpGroup
                                                                                ? '#279775'
                                                                                : '#B2983C'
                                                                    : '#B2983C'}`}}>  {item.isCompleted ? item.winningAmount ? item.winningAmount.toFixed(2) : 0 : 'Pending'}</p></div>
                                                                <div className='flex-div-space-Betn'><p>Betting Placed :</p><p> {item.group === 'A' ? 'Alpha' : item.group === 'B' ? 'Beta' : item.group === 'C' ? 'Gama' : 'Unknown'}</p></div>
                                                                <div className='flex-div-space-Betn'>
                                                                    <p>Betting Status :</p>
                                                                    <p style={{
                                                        color: `${
                                                                item.isCompleted
                                                                    ? item.group === item.winnerGroup
                                                                        ? '#279775'
                                                                        : item.group === item.losersGroup
                                                                            ? '#F24C54'
                                                                            : item.group === item.runnerUpGroup
                                                                                ? '#279775'
                                                                                : '#B2983C'
                                                                    : '#B2983C'}`}}>
                                                                        {
                                                                            item.isCompleted
                                                                                ? item.group === item.winnerGroup
                                                                                    ? 'Win'
                                                                                    : item.group === item.losersGroup
                                                                                        ? 'Lose'
                                                                                        : item.group === item.runnerUpGroup
                                                                                            ? 'Runner Up'
                                                                                            : 'Pending'
                                                                                : 'Pending'
                                                                        }
                                                                    </p>
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
