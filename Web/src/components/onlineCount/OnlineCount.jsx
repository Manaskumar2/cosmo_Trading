import React, { useState, useEffect } from 'react';
import count1 from '../../images/count1.svg';
import count2 from '../../images/count2.svg';
import count3 from '../../images/count3.svg';
import './Count.css';

function OnlineCount() {
  const [number, setNumber] = useState(543);

  useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    // Define the number to increment by every day
    const incrementBy = 13;

    // Check if today is the 1st day of the month
    if (currentDay === 1) {
      setNumber((prevNumber) => prevNumber + incrementBy);
    }
  }, []);
    const playersNumbersArray = [5012, 5101, 5063, 5121, 5151, 5085, 5099, 5106, 5128, 5109, 5060, 5023];
  const [playersCount, setPlayersCount] = useState(playersNumbersArray[0]);
  const onlineNumbersArray = [403, 484, 495, 516, 477, 418, 439, 420, 421, 422, 523, 464, 413, 414, 495, 516, 477, 418, 439, 420, 431, 422, 523, 464, 513, 514, 495, 516, 477, 428, 439, 420, 421, 422, 523, 564, 413, 514, 495, 516, 4077, 403, 526, 495, 316, 407, 421, 433, 420, 431, 402, 523, 564, 403, 414, 495, 516, 477, 421, 439, 420, 432, 422, 523, 464, 421, 439, 420, 421, 422, 523, 464];

  const [onlineCount, setOnlineCount] = useState(onlineNumbersArray[0]);
  
  useEffect(() => {
    const updateOnlineCount = () => {
      const date = new Date();
      const minutes = date.getMinutes();
      const index = minutes % onlineNumbersArray.length;
      setOnlineCount(onlineNumbersArray[index]);
    };
  
    updateOnlineCount();
  
    const intervalId = setInterval(updateOnlineCount, 60000); 
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  useEffect(() => {
    const updatePlayersCount = () => {
      const date = new Date();
      const hour = date.getHours();
      if (hour >= 12) {
        const index = (hour - 12) % 12;
        setPlayersCount(playersNumbersArray[index]);
      } else {
        const index = hour % 12;
        setPlayersCount(playersNumbersArray[index]);
      }
    };

    updatePlayersCount();

    const intervalId = setInterval(updatePlayersCount, 3600000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);



  const totalBettingNumbersArray = [277550,250510, 275130, 198000, 222100, 199800, 301200, 469900, 195106, 368128, 265109, 368060, 270023,277550,250510, 275130, 198000, 222100, 199800, 301200, 469900, 195106, 368128, 265109, 368060, 270023, 222100, 199800, 301200, 469900, 195106, 368128, 265109, 368060, 270023,];
  const [totalBettingCount, setTotalBettingCount] = useState(totalBettingNumbersArray[0]);

  useEffect(() => {
    const updateTotalBettingCount = () => {
      const date = new Date();
      const day = date.getDate();
      setTotalBettingCount(totalBettingNumbersArray[day - 1]);
    };

    updateTotalBettingCount();

    const intervalId = setInterval(updateTotalBettingCount, 3600000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='count'>
      <div className="container">
        <div className="online_count_row">
          <div className="online_count_col">
            <div className='count-logo'><img src={count3} alt="" /></div>
            <div className='num'>5017</div>
            <p>Players</p>
          </div>
          <div className="online_count_col">
            <div className='count-logo'><img src={count2} alt="" /></div>
            <div className='num'>{totalBettingCount}</div>
            <p>Total betting</p>
          </div>
          <div className="online_count_col">
            <div className='count-logo'><img src={count1} alt="" /></div>
            <div className='num'>4181</div>
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCount;
