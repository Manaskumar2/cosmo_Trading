import { useRecoilValue, useRecoilState } from 'recoil';
import { OneMinute, TimeNo } from '../../Atoms/GameTime';
import './TimeSection.css';
import { useState, useEffect } from 'react';
import { AuthState } from '../../Atoms/AuthState';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { CountDown } from '../../Atoms/CountDown';
import { DateTime } from 'luxon';



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
    const [coutDown, setCountDown] = useRecoilState(CountDown)

    const [timeData, setTimeData] = useRecoilState(OneMinute);

    const auth = useRecoilValue(AuthState);

    const timeNo = useRecoilValue(TimeNo);

    const [remainingTime, setRemainingTime] = useState(0);

    const startTime = timeData?.data?.currentTime || null;

    const endTime = timeData?.data?.data?.endTime || null;

    const [currentTime, setCurrentTime] = useState(DateTime.now().setZone('Asia/Kolkata'));
    const [countdown, setCountdown] = useState(59);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedTime = DateTime.now().setZone('Asia/Kolkata');
            setCurrentTime(updatedTime);

            const remainingSeconds = 59 - updatedTime.second;
            setCountdown(remainingSeconds);
            if (remainingSeconds === 0) {
                handleGameData();
            }
            else if (remainingSeconds === 59) {
                handleGameData();
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    const handleGameData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getgame/${timeNo}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                console.log(response)
                setTimeData(response);
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
        }
    };

    // useEffect(() => {
    //     if (endTime) {
    //         const startMillis = new Date(startTime).getTime();
    //         const endMillis = new Date(endTime).getTime();
    //         const intervalMillis = endMillis - startMillis;
    //         if (intervalMillis > 0) {
    //             const intervalSeconds = Math.floor(intervalMillis / 1000);
    //             setRemainingTime(intervalSeconds);
    //             const interval = setInterval(() => {
    //                 setRemainingTime(prevTime => {
    //                     if (prevTime > 0) {
    //                         if (Math.floor(prevTime / 60) === 0 && prevTime % 60 === 6) {
    //                             setCountDown(true);
    //                         }
    //                         return prevTime - 1;
    //                     } else {
    //                         clearInterval(interval);
    //                         if (prevTime === 0) {
    //                             handleGameData();
    //                         }
    //                         return 0;
    //                     }
    //                 });
    //             }, 1000);

    //             return () => clearInterval(interval);
    //         }
    //     }
    // }, [endTime, setCountDown]);

    // useEffect(() => {
    //     const intervalId = setInterval(handleGameData, 1200);
    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    // const minutes = Math.floor(remainingTime / 60);
    // const seconds = remainingTime % 60;

    return (
        <div>
            <Toaster />
            <div className="container">
                <div className="row time-play">
                    <div className="col-6 left">
                        {timeData && timeNo ? (
                            <>
                                <div className='selected-mint'>{timeNo} minute</div>
                                <h3>{timeData?.data?.data?.gameUID}</h3>
                            </>
                        ) : null}
                    </div>
                    <div className="col-6 right">
                        <p style={{ color: '#97E2F2', textAlign: 'center', marginBottom: '0' }}>Left time to buy</p>
                        <div className="end-time">
                            <div className="row">
                                <div className="time_minute">00</div> <div className="time_colon">:</div> <div className="time_seconds">{countdown}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSection1;
