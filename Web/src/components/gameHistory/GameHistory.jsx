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
import { UserGameHistory } from '../../Atoms/UserGameHistory';
// import { useRecoilValue } from 'recoil';
import { CountDownGrowup } from '../../Atoms/CountDownGrowup';
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function GameHistory({ duration  }) {

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
    const [userGames, setUserGames] = useRecoilState(UserGameHistory)
    const [page, setPage] = useState(1)

    const getUserGameHistory = async () => {

        try {
            let userId = auth._id;
            let token = auth.authToken;

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/bettingHistory/${userId}`, {
                params: { page },
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                
                setUserGames(response)
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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSuccessFullGameHistory/${duration}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                console.log(response.data)
                setGameHistoryList(response.data)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    useEffect(()=>{const fetchData=setInterval(getGameHistory,3500)
        return ()=>{clearInterval(fetchData)}},[])
    // useEffect(() => {
    //     if (countDownGrowup===59){
    //         getGameHistory();
    //     }
        
    // }, [countDownGrowup]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getUserGameHistory();
        }, 3000); 

        return () => {
            clearInterval(intervalId);
        };
    }, [page]);
    


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

                                            return (
                                                //                                             <tr key={index}>
                                                //                                                 <td>{item.gameUID}</td>
                                                //                                                 <td width="140">
                                                //                                                     <div className="winners_col_row">
                                                //                                                         <span className="icon_win">
                                                //                                                             <img src={Winner} alt="Winner" />
                                                //                                                         </span>
                                                //                                                         <p>
                                                //                                                             {item.winnerGroup === 'SMALL' ? 'Alpha' : (item.winnerGroup === 'BIG' ? 'Beta' : '')}
                                                //                                                             {item.winnerGroup === null ? (item.gameUID % 2 === 1 ? 'Beta' : 'Alpha') : ''}
                                                //                                                         </p>
                                                //                                                         <span className="icon_rate">
                                                //     <img src={item.winnerGroup === 'SMALL' ? Alpha : (item.winnerGroup === 'BIG' ? Beta : (item.gameUID % 2 === 1 ? Beta : Alpha))} alt="Alpha or Beta" />
                                                //   </span>
                                                //                                                     </div>
                                                //                                                 </td>
                                                //                                             </tr>
                                                <tr key={index}>
                                                    <td>{item.gameUID}</td>
                                                    <td width="140">
                                                        <div className="winners_col_row">
                                                            <span className="icon_win">
                                                                <img src={Winner} alt="Winner" />
                                                            </span>
                                                            <p>
                                                                {item.winnerGroup === 'SMALL' ? 'Alpha' : (item.winnerGroup === 'BIG' ? 'Beta' :
                                                                    (item.winnerGroup === null ? (item.gameUID % 2 === 1 ? 'Alpha' : 'Beta') : ''))}
                                                            </p>
                                                            <span className="icon_rate">
                                                                <img src={item.winnerGroup === 'SMALL' ? Alpha : (item.winnerGroup === 'BIG' ? Beta :
                                                                    (item.winnerGroup === null ? (item.gameUID % 2 === 1 ? Alpha : Beta) : ''))} />
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
                                        <th width="140" style={{textAlign:'center'}}>Result</th>
                                        <th style={{textAlign:'center'}}>Group</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {userGames &&
                                        userGames.data &&
                                        userGames.data.history.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <tr onClick={() => toggleRow(index)}>
                                                    <td>{item.gameUID}</td>
                                                    <td style={{textAlign:'center'}}>
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
        </div>
    )
}

export default GameHistory
