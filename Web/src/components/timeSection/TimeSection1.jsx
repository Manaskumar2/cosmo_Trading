import momentTz from 'moment-timezone';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { GrowUpGameState, OneMinute, TimeNo } from '../../Atoms/GameTime';
import './TimeSection.css';
import { useState, useEffect } from 'react';
import { AuthState } from '../../Atoms/AuthState';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { CountDown } from '../../Atoms/CountDown';
import { CountDownGrowup } from '../../Atoms/CountDownGrowup';
import { ShowCountDown } from '../../Atoms/ShowCountDown';
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function TimeSection1() {

    const [showCountDown,setShowCountDown] = useRecoilState(ShowCountDown);
    const [growUpGame, setGrowUpGame] = useRecoilState(GrowUpGameState);
    const auth = useRecoilValue(AuthState);
    const timeNo = useRecoilValue(TimeNo);
    const setSecond = useSetRecoilState(CountDownGrowup);


    const [remainingTime, setRemainingTime] = useState(0);

    const handleGameData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getgame/${timeNo}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setGrowUpGame(response.data.data);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    useEffect(() => {
        const endTime = growUpGame.endTime || null;
        if (endTime) {
            let interval
            const startMillis = new Date(momentTz(new Date()).tz("Asia/Kolkata").toISOString()).getTime();
            const endMillis = new Date(endTime).getTime();
            const intervalMillis = endMillis - startMillis;
    
            if (intervalMillis > 0) {
                const intervalSeconds = Math.floor(intervalMillis / 1000);
                setRemainingTime(intervalSeconds);
                setSecond(intervalSeconds);
                interval = setInterval(() => {
                    setRemainingTime(prevTime => {
                        if (prevTime > 0) {
                            if (prevTime === 6) {
                                setShowCountDown(true);
                            }
                            setSecond(prevTime - 1);
                            return prevTime - 1;
                        } else {
                            setSecond(0);
                            handleGameData();
                            return 0;
                        }
                    });
                }, 1000);
            }
            return () => clearInterval(interval);
        }
    }, [growUpGame.endTime]);
    
    if (remainingTime === 5 && !showCountDown) {
        setShowCountDown(true);
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <div>
            <Toaster />
            <div className="container">
                <div className="row time-play">
                    <div className="col-6 left">
                        {growUpGame && timeNo ? (
                            <>
                                <div className='selected-mint'>{timeNo} minute</div>
                                <h3>{growUpGame?.gameUID}</h3>
                            </>
                        ) : null}
                    </div>
                    <div className="col-6 right">
                        <p style={{ color: '#97E2F2', textAlign: 'center', marginBottom: '0' }}>Left time to buy</p>
                        <div className="end-time">
                            <div className="row">
                                <div className="time_minute">{minutes}</div> <div className="time_colon">:</div> <div className="time_seconds">{seconds < 10 ? `0${seconds}` : seconds}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSection1;