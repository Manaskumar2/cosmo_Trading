import { useEffect, useRef } from 'react';
import './Running.css'
const RunningTime = () => {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);

    useEffect(() => {
        const randomHour = Math.floor(Math.random() * (696545 - 651235 + 1) + 651235);
        if (hourRef.current) {
            hourRef.current.textContent = randomHour;
        }

        const updateTimer = () => {
            const currentTime = new Date();
            const minutes = currentTime.getMinutes();
            const seconds = currentTime.getSeconds();

            if (minuteRef.current) {
                minuteRef.current.textContent = String(minutes).padStart(2, '0');
            }
            if (secondRef.current) {
                secondRef.current.textContent = String(seconds).padStart(2, '0');
            }
        };

        const intervalId = setInterval(updateTimer, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='time'>
            <div className="container">
                <h4 className='title text-center'>WEBSITE RUNNING TIME</h4>
                <div className='row'>
                    <div className="col-4">
                        <div ref={hourRef} className='top'></div>
                        <div className='bot'>Hours</div>
                    </div>
                    <div className="col-4">
                        <div ref={minuteRef} className='top'></div>
                        <div className='bot'>Minutes</div>
                    </div>
                    <div className="col-4">
                        <div ref={secondRef} className='top'></div>
                        <div className='bot'>Second</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RunningTime;

