import { useRecoilValue, useRecoilState } from 'recoil';
import { TimeNo } from '../../Atoms/GameTime';
import { RiseUpGame, RiseUpTime } from '../../Atoms/GameTimeRiseup';
import '../timeSection/TimeSection.css';
import { useState, useEffect } from 'react';
import { AuthState } from '../../Atoms/AuthState';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
// import { CountDown } from '../../Atoms/CountDown';
import { ShowCountDown } from '../../Atoms/ShowCountDown';
import { CountDownRiseup } from '../../Atoms/CountDownRiseup';
import { Second } from '../../Atoms/Second';

import momentTz from 'moment-timezone';

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};

function TimeSection1({ uid }) {

    // const [time , setTime]=useRecoilState(Second)
    const [remainingTime, setRemainingTime] = useState(0);
    const [showCountDown, setShowCountDown] = useRecoilState(ShowCountDown )

    const [timeData, setTimeData] = useRecoilState(RiseUpTime);
    const [riseUpGame,setRiseUpGame] = useRecoilState(RiseUpGame);

    const auth = useRecoilValue(AuthState);

    const timeNo = useRecoilValue(TimeNo);

    // const [currentTime, setCurrentTime] = useState(DateTime.now().setZone('Asia/Kolkata'));
    const [second, setSecond] = useRecoilState(CountDownRiseup);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const asiaKolkataTime = new Date().toLocaleTimeString('en-US', {
    //             timeZone: 'Asia/Kolkata',
    //             hour12: false,
    //         });
    //         const [hours, minutes, seconds] = asiaKolkataTime.split(':').map(Number);
    //         const secondsRemaining = 59 - seconds;
    //         const adjustedTime = (minutes * 60 + secondsRemaining ) % 60;
    //         setCountdown(adjustedTime);
    //         if (adjustedTime === 5) {
    //             setCountDown(true);
    //         }
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         const updatedTime = DateTime.now().setZone('Asia/Kolkata');
    //         setCurrentTime(updatedTime);

    //         const remainingSeconds = 59 - updatedTime.second;
    //         setCountdown(remainingSeconds);
    //          if (remainingSeconds === 5) {
    //             setCountDown(true)
    //         }
    //     }, 1000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);


    const handleGameData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSecondGame/${timeNo}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setTimeData(response);
                setRiseUpGame(response.data.data);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
        }
    };

    useEffect(() => {
        const endTime = riseUpGame.endTime || null;
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
    }, [riseUpGame.endTime]); 

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <div>
            <Toaster />
            <div className="container">
                <div className="row time-play">
                    <div className="col-6 left">

                        <>
                            <div className='selected-mint'>{timeNo} minute</div>
                            {riseUpGame &&
                                <h3>{riseUpGame.gameUID}</h3>}
                        </>

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
