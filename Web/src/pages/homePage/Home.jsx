import React, { useEffect, useState } from 'react';
import popupImg from './popup.jpg';
import logo from './Cosmo Logo.svg';
import './Home.css';
import telegram from '../../images/telegram.svg';
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/banner/Banner';
import GameSection from '../../components/gameSection/GameSection';
import OnlineCount from '../../components/onlineCount/OnlineCount';
import BonusCount from '../../components/bonusCount/BonusCount';
import RunningTime from '../../components/runningTime/RunningTime';
import WithdrawSection from '../../components/withdrawSection/WithdrawSection';
import Accordian from '../../components/accordian/Accordian';
import { GameHistoryList } from '../../Atoms/GameHistory';
import { useRecoilValue, useRecoilState } from 'recoil';
import { AuthState } from '../../Atoms/AuthState';
import wp from './wp.svg';
import axios from 'axios';
import { CgCloseO } from 'react-icons/cg';

function Home() {
    const auth = useRecoilValue(AuthState);
    const [showPopup, setShowPopup] = useState(false);
    const [delay, setDelay] = useState(2000);
    const [news, setNews] = useState('');

    const handleClosePopup = () => {
        console.log("Closing popup");
        setShowPopup(false);
        localStorage.setItem('showPopUp','false');
    };
    

    const getGameHistory = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                console.log(response.data);
                setNews(response.data);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            console.log(errorMessage);
        }
    };

    useEffect(() => {
        getGameHistory();
    }, []);
    useEffect(() => {
        const timerId = setTimeout(() => {
            const popupShown = localStorage.getItem('showPopUp');
            console.log(showPopup)
            console.log(popupShown)
            if (popupShown === 'true') {
                setShowPopup(true);
                console.log(showPopup)
            } 
        }, 1000);
    
        return () => clearTimeout(timerId);
    }, []);
    

    return (
        <div className="main-background">
            <div className="home">
                <div className="container">
                <div className="row home-row">
                        <div className="col-2 download">
                            <a href="https://whatsapp.com/channel/0029VaAOCUm2Jl8C4oYY1u0M" target="_blank" rel="noopener noreferrer">
                                <img src={wp} alt="" style={{ width: '2.5rem' }} />
                            </a>
                        </div>
                        <div className="col-8">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-2 download">
                            <a href="https://t.me/cosmotradeofficial" target="_blank" rel="noopener noreferrer">
                                <img src={telegram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Banner news= {news}/>
            <GameSection />
            <OnlineCount />
            <BonusCount />
            <RunningTime />
            <WithdrawSection />
            <Accordian />
            <Nav />


            {showPopup && (
                <div className="popup-Home popup">
                    <button className="popup-close" onClick={handleClosePopup}>
                        <CgCloseO />
                    </button>
                    <img src={popupImg} alt="Popup" />
                </div>
            )}
        </div>
    );
}

export default Home;
