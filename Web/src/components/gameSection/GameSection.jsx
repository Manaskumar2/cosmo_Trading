import { Link } from 'react-router-dom';
import './Game.css';
import game1 from '../../images/Big & Small Game.svg';
import game2 from '../../images/RiseUp.svg';
import Profile from '../../images/img-profile.svg';
import Winner from '../../images/icon-winner.svg';
import React, { useState, useEffect } from 'react';
import { AuthState } from '../../Atoms/AuthState';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

function GameSection() {
    const auth = useRecoilValue(AuthState);
    const[index,setIndex]=useState(0)
    const[secondIndex,setSecondIndex]=useState(9)

    const [currentWinner, setCurrentWinner] = useState(null);

    const getData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getWinningDocuments`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setCurrentWinner(response.data.documents);
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            console.error(errorMessage);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 10);
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondIndex((prevSecondIndex) => (prevSecondIndex - 1 + 10) % 10);
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="game">
            <div className="container">
                <div className="col-12 game">
                    <Link to="/growUp">
                        <div className="game-banner">
                            <img src={game1} alt="" />
                            {currentWinner && currentWinner.length!=0 && (
                                <div className="game_user_row1">
                                    <div className="game_user_col">
                                        <div className="game_user_img">
                                            <img src={Profile} alt="" />
                                        </div>
                                        <div className="game_user_name">{currentWinner[index].name}</div>
                                    </div>

                                    <div className="game_win_col">
                                        <div className="game_user_img">
                                            <img src={Winner} alt="" />
                                        </div>
                                        <div className="game_user_name">Win {currentWinner[index].winningAmount}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Link>
                    <Link to="/riseUp">
                        <div className="game-banner trx">
                            <img src={game2} alt="" className="game-banner-image" />
                            {currentWinner && currentWinner.length!=0 && (
                                <div className="game_user_row">
                                    <div className="game_user_col">
                                        <div className="game_user_img">
                                            <img src={Profile} alt="" />
                                        </div>
                                        <div className="game_user_name">{currentWinner[secondIndex].name}</div>
                                    </div>

                                    <div className="game_win_col">
                                        <div className="game_user_img">
                                            <img src={Winner} alt="" />
                                        </div>
                                        <div className="game_user_name">Win {currentWinner[secondIndex].winningAmount}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GameSection;
