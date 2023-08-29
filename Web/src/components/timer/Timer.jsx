import React, { useState, useEffect } from 'react';
import audio from './count.mp3'; // Adjust the path based on your project structure
import { useRecoilState } from 'recoil';
import { CountDown } from '../../Atoms/CountDown';
import './Timer.css'
const Timer = () => {
    const [countState, setCountState] = useRecoilState(CountDown);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    playSound();
                    return prevCountdown - 1;
                } else {
                    clearInterval(interval);
                    setCountState(false);
                    console.log(countState);
                    return prevCountdown; 
                }
            });
        }, 1000);
    
        return () => {
            clearInterval(interval);
            setCountState(false);
        };
    }, [countState, setCountState]);
    

    const playSound = () => {
        const sound = new Audio(audio);
        sound.play();
    };

    return (
        <div className='coutDown-container'>
                <div id="timer" className="timer">
                    <div className='digit'>{`0 : ${Math.max(countdown, 0)}`}</div>
                     
                </div>
        </div>
    );
};

export default Timer;
