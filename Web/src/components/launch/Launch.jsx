import React, { useState, useEffect } from 'react';
import './Launch.css'
function Launch() {
  const targetDate = new Date('2023-09-10T12:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [targetDate]);

  function getTimeLeft(target) {
    const now = new Date();
    const totalMilliseconds = target - now;

    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

    return {
      total: totalMilliseconds,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className='launchBody'>
      {timeLeft.total > 0 ? (
        <div className='launch-box'>
          <p>Time left:</p>
          <p>{timeLeft.days} days</p>
          <p>{timeLeft.hours} hours</p>
          <p>{timeLeft.minutes} minutes</p>
          <p>{timeLeft.seconds} seconds</p>
        </div>
      ) : (
        <p>Launched!!!</p>
      )}
    </div>
  );
}

export default Launch;
