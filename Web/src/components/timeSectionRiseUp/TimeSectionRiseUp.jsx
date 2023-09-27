import { useRecoilValue, useRecoilState } from 'recoil';
import {  TimeNo } from '../../Atoms/GameTime';
import {RiseUpTime} from '../../Atoms/GameTimeRiseup';
import '../timeSection/TimeSection.css';
import { useState, useEffect } from 'react';
import { AuthState } from '../../Atoms/AuthState';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { CountDown } from '../../Atoms/CountDown';
import { DateTime } from 'luxon';
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

function TimeSection1({uid}) {
    
    const [coutDown, setCountDown] = useRecoilState(CountDown)

    const [timeData, setTimeData] = useRecoilState(RiseUpTime);

    const auth = useRecoilValue(AuthState);

    const timeNo = useRecoilValue(TimeNo);

    const [currentTime, setCurrentTime] = useState(DateTime.now().setZone('Asia/Kolkata'));
    const [countdown, setCountdown] = useRecoilState(CountDownRiseup);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedTime = DateTime.now().setZone('Asia/Kolkata');
            setCurrentTime(updatedTime);

            const remainingSeconds = 59 - updatedTime.second;
            setCountdown(remainingSeconds);
             if (remainingSeconds === 5) {
                setCountDown(true)
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);




    // useEffect(() => {
    //     console.log(timeData)
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
    

    
    // const minutes = Math.floor(remainingTime / 60);
    // const seconds = remainingTime % 60;

    return (
        <div>
            <Toaster />
            <div className="container">
                <div className="row time-play">
                    <div className="col-6 left">

                            <>
                                <div className='selected-mint'>{timeNo} minute</div>
                                {timeData &&
                                <h3>{timeData.data.data.gameUID}</h3> }
                            </>

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
