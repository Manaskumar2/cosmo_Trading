import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { GameHistoryListRiseUp } from '../../Atoms/GameHistoryListRiseUp';
import { useRecoilState, useRecoilValue } from 'recoil'
import '../gameHistory/GameHistory.css'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
import Winner from '../../images/icon-winner.svg'
import Alpha from '../../images/icon-alpha.svg'
import Beta from '../../images/icon-beta.svg'
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

function GameHistory({ duration }) {
    const [expandedRowIndex, setExpandedRowIndex] = useState(null);

    const toggleRow = (index) => {
        if (expandedRowIndex === index) {
            setExpandedRowIndex(null);
        } else {
            setExpandedRowIndex(index);
        }
    };
    const iconSources = [Alpha, Beta, Gama]
    const randomWinnerGroup = Math.random() < 0.5 ? 'SMALL' : 'BIG';
    const [activeTab, setActiveTab] = useState(1);
    const auth = useRecoilValue(AuthState)
    const [gameHistoryList, setGameHistoryList] = useRecoilState(GameHistoryListRiseUp)
    const [userGames, setUserGames] = useState(null)
    const [page, setPage] = useState(1)

    const getUserGameHistory = async () => {

        try {
            let userId = auth._id;
            let token = auth.authToken;
            console.log(token);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/get2ndgameUserHistory/${userId}`, {
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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/gameHistory/${duration}`, {
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
                                            const winnerGroup =
                                                item.bets && item.bets.length > 0
                                                    ? item.winnerGroup
                                                    : Math.random() < 0.5
                                                        ? 'SMALL'
                                                        : 'BIG';

                                            return (
                                                <tr key={index}>
                                                    <td>{item.gameUID}</td>
                                                    <td width="140">
                                                        <div className="winners_col_row">
                                                            <span className="icon_win">
                                                                <img src={Winner} alt="Winner" />
                                                            </span>
                                                            {/* <p>{item.winnerGroup === 'SMALL' ? 'Alpha' : 'Beta'}</p>
                                                            <p>{item.duration}</p> */}
                                                            <span className="icon_rate">
                                                                {item.winnerGroup === 'A' ? (
                                                                    <img src={Alpha} alt="Alpha" />
                                                                ) : item.winnerGroup === 'B' ? (
                                                                    <img src={Beta} alt="Beta" />
                                                                ) : item.winnerGroup === 'C' ? (
                                                                    <img src={Gama} alt="Gamma" />
                                                                ) :  (
                                                                    <img src={iconSources[Math.floor(Math.random() * iconSources.length)]} alt="Random Icon" />
                                                                )}
                                                            </span>
                                                            {item.runnerUpGroup && <span className="icon_rate">
                                                                {item.runnerUpGroup === 'A' ? (
                                                                    <img src={Alpha} alt="Alpha" />
                                                                ) : item.runnerUpGroup === 'B' ? (
                                                                    <img src={Beta} alt="Beta" />
                                                                ) : item.runnerUpGroup === 'C' ? (
                                                                    <img src={Gama} alt="Gamma" />
                                                                ) :  (
                                                                    <img src={iconSources[Math.floor(Math.random() * iconSources.length)]} alt="Random Icon" />
                                                                )}
                                                            </span>}

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
                                {userGames &&
                                        userGames.data &&
                                        userGames.data.history.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <tr onClick={() => toggleRow(index)}>
                                                    <td>{item.gameId}</td>
                                                    <td>{item.result}</td>
                                                    <td>
                                                        <div className="winners_col_row">
                                                            <span className="icon_win">
                                                                <img src={Winner} alt="Winner" />
                                                            </span>
                                                            {/* <p style={{ textAlign: 'left' }}>
                                                                {item.group === 'A' ? 'Alpha' : 'Beta'}
                                                            </p> */}
                                                            <span className="icon_rate">
                                                                {item.group === 'A' ? (
                                                                    <img src={Alpha} alt="Alpha" />
                                                                ) : item.group === 'B' ? (
                                                                    <img src={Beta} alt="Beta" />
                                                                ) : item.group === 'C' ? (
                                                                    <img src={Gama} alt="Gamma" />
                                                                ) :  (
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
                                                                ) :  (
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
                                                                <div className='flex-div-space-Betn'><p>Period :</p><p>  {item.gameId}</p></div>
                                                                
                                                                <div className='flex-div-space-Betn'><p>Amount :</p><p>  {item.amount}</p></div>
                                                                
                                                                <div className='flex-div-space-Betn'><p>Betting Placed :</p><p> {item.group === 'small' ? 'Alpha' : 'Beta'}</p></div>
                                                                <div className='flex-div-space-Betn'>
  <p>Betting Status :</p>
  <p style={{ color: item.result === 'win' ? '#00B612' : 'red' }}>{item.result}</p>
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
        </div>
    )
}

export default GameHistory
