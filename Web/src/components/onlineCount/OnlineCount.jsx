import React, { useState, useEffect } from 'react';
import count1 from '../../images/count1.svg';
import count2 from '../../images/count2.svg';
import count3 from '../../images/count3.svg';
import BonusCount from '../bonusCount/BonusCount';
import './Count.css';
import { AuthState } from '../../Atoms/AuthState';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
function OnlineCount() {
  const [player,setplayer]=useState()
  const auth = useRecoilValue(AuthState);
  const handleFakedata = async () => {
    try {
        let token = auth.authToken;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/getPlayers`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status === 200) {
          setplayer(response.data)
            return response;
        }
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
    }
};

  useEffect(() => {
    handleFakedata()
  }, []);
  return (
    <>
    <div className='count'>
      <div className="container">
        <div className="online_count_row">
          <div className="online_count_col">
            <div className='count-logo'><img src={count3} alt="" /></div>
            <div className='num'>{player? player.totalPlayers:5659}</div>
            <p>Players</p>
          </div>
          <div className="online_count_col">
            <div className='count-logo'><img src={count2} alt="" /></div>
            <div className='num'>{player? player.TotalBetting:19900}</div>
            <p>Total betting</p>
          </div>
          <div className="online_count_col">
            <div className='count-logo'><img src={count1} alt="" /></div>
            <div className='num'>{player? player.onlinePlayers:4959}</div>
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    
    <BonusCount />
    </>
  );
}

export default OnlineCount;
