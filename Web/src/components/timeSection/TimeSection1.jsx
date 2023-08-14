import { useRecoilValue } from 'recoil';
import { OneMinute, TimeNo } from '../../Atoms/GameTime';
import './TimeSection.css';
import { useState, useEffect } from 'react';

function TimeSection1() {
    const timeNo = useRecoilValue(TimeNo);
    const timeData = useRecoilValue(OneMinute);

    const [remainingTime, setRemainingTime] = useState(0);

    const startTime = timeData?.data?.data?.startTime || null;
    const endTime = timeData?.data?.data?.endTime || null;

    useEffect(() => {
        if (startTime && endTime) {
            const startMillis = new Date(startTime).getTime();
            const endMillis = new Date(endTime).getTime();
            const intervalMillis = endMillis - startMillis;

            if (intervalMillis > 0) {
                const intervalSeconds = Math.floor(intervalMillis / 1000);
                setRemainingTime(intervalSeconds);

                const interval = setInterval(() => {
                    setRemainingTime(prevTime => {
                        if (prevTime > 0) {
                            return prevTime - 1;
                        } else {
                            clearInterval(interval);
                            return 0;
                        }
                    });
                }, 1000);

                return () => clearInterval(interval);
            }
        }
    }, [startTime, endTime]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <div>
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
                        <p style={{ color: '#97E2F2', marginBottom: '0' }}>Left time to buy</p>
                        <div className="end-time">
                            <div className="row">
                                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSection1;
