import React, { useState, useEffect } from 'react';
import audio from './count.mp3'; // Adjust the path based on your project structure
import { useRecoilState } from 'recoil';
// import { CountDown } from '../../Atoms/CountDown';
import { ShowCountDown } from '../../Atoms/ShowCountDown';
import './Timer.css'
import { useRecoilValue } from 'recoil';
import { PlaySound } from '../../Atoms/PlaySound';
import { Second } from '../../Atoms/Second';
const Timer = () => {
    const second=useRecoilValue(Second)
    const playTimerSound=useRecoilValue(PlaySound)
    const [countState, setCountState] = useRecoilState(ShowCountDown);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if(second ===5){
            setCountState(true)
        }
        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    if(playTimerSound===true){playSound();}
                    
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
    }, [countState, setCountState, second]);
    

    const playSound = () => {
        const sound = new Audio(audio);
        sound.play();
    };

    return (
        <div className='coutDown-container'>
                <div id="timer" className="timer">
                    <div className='digit'>{`00:0${Math.max(countdown, 0)}`}</div>
                </div>
        </div>
    );
};

export default Timer;
