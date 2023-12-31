import React, { useEffect, useState } from 'react';
import popupImg from './popup.jpg';
import logo from './Cosmo Logo.svg';
import './Home.css';
import telegram from '../../images/telegram.svg';
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/banner/Banner';
import GameSection from '../../components/gameSection/GameSection';
import OnlineCount from '../../components/onlineCount/OnlineCount';
// import BonusCount from '../../components/bonusCount/BonusCount';
import RunningTime from '../../components/runningTime/RunningTime';
import WithdrawSection from '../../components/withdrawSection/WithdrawSection';
import Accordian from '../../components/accordian/Accordian';
import { GameHistoryList } from '../../Atoms/GameHistory';
import { useRecoilValue, useRecoilState } from 'recoil';
import { AuthState } from '../../Atoms/AuthState';
import wp from './wp.svg';
import axios from 'axios';
import { CgCloseO } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { TotalTeam } from '../../Atoms/TotalTeam';
function Home() {
    const navigate = useNavigate()
    const auth = useRecoilValue(AuthState);
    const [showPopup, setShowPopup] = useState(false);
    const [popUpImage, setImage] = useState('');
    const [news, setNews] = useState('');
    const[commission,setCommission]=useRecoilState(TotalTeam)




    const handleClosePopup = () => {
        setShowPopup(false);
        localStorage.removeItem('showPopUp');
        document.body.style.overflow = 'auto';
    };
    const handleCommission = async () => {
        try {
            let token = auth.authToken
            let userId = auth._id
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/commissionAmount/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                localStorage.setItem('commission', JSON.stringify(response.data));
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    }

    const getPopUpImage = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/images`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setImage(response.data.data.imageUrl);
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    const getGameHistory = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {

                setNews(response.data);
                return response;
            }
        } catch (error) {
            if (error.response.status || error.status === 403) {
                localStorage.removeItem('authUserToken');
                navigate('/signIn')
                return response;
            }
            const errorMessage = error.response ? error.response.data.message : error.message;

        }
    };

    useEffect(() => {
        handleCommission()
        getGameHistory();
        getPopUpImage()
    }, []);
    useEffect(() => {
        const popupShown = localStorage.getItem('showPopUp') || null;
        if (popupShown) {
            setShowPopup(true);
            if (popUpImage) { document.body.style.overflow = 'hidden'; }
            else { document.body.style.overflow = 'auto' }

        }
    }, []);
    return (
        <div className="main-background main-background-Home">
            {showPopup && popUpImage &&
                <div className="popup-Home popup">
                    <div className="popup-body-home">
                        <button className="popup-close" onClick={handleClosePopup}>
                            <CgCloseO />
                        </button>

                        <img src={popUpImage} alt="Popup" />
                    </div>


                </div>}
            <> <div className="home">
                <div className="container">
                    <div className="row home-row">
                        <div className="col-2 download">

                            <img src={wp} alt="" style={{ width: '2.5rem' }} />
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
                <Banner news={news} />
                <GameSection />
                <OnlineCount />
                {/* <BonusCount /> */}
                <RunningTime />
                <WithdrawSection />
                <Accordian />
                <Nav /></>
        </div>
    );
}

export default Home;
