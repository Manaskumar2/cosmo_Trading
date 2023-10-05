import { useEffect, useState } from 'react'
import logo from './Cosmo Logo.svg'
import './Home.css'
import telegram from '../../images/telegram.svg'
import  Nav  from '../../components/Nav/Nav'
import  Banner  from '../../components/banner/Banner'
import GameSection from '../../components/gameSection/GameSection'
import OnlineCount from '../../components/onlineCount/OnlineCount'
import BonusCount from '../../components/bonusCount/BonusCount'
import RunningTime from '../../components/runningTime/RunningTime'
import WithdrawSection from '../../components/withdrawSection/WithdrawSection'
import Accordian from '../../components/accordian/Accordian'
import { GameHistoryList } from '../../Atoms/GameHistory';
import { useRecoilValue ,useRecoilState } from 'recoil'
import { AuthState } from '../../Atoms/AuthState'
import wp from './wp.svg'
import axios from 'axios'
function Home() {
   
  const auth = useRecoilValue(AuthState)
  const [duration ,setDuration]=useState(1)
  const [gameHistoryList, setGameHistoryList] = useRecoilState(GameHistoryList)
  const getGameHistory = async () => {

    try {
        let token = auth.authToken;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSuccessFullGameHistory/${duration}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
            console.log(response.data)
            setGameHistoryList(response.data)
            return response;
        }
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.log(errorMessage);
        // toast.error(errorMessage || "Something went wrong", { ...toastProps });
    }
}

useEffect(() => {
    getGameHistory();;
}, []);

  return (
    <div className='main-background'>
    <div className='home'> 
    <div className='container'>
    <div className='row home-row'>
    <div className='col-2 download'>
            <a href="https://whatsapp.com/channel/0029VaAOCUm2Jl8C4oYY1u0M" target="_blank"  rel="noopener noreferrer">
                <img src={wp} alt="" style={{width:'2.5rem'}}/>
            </a>
        </div>
        <div className='col-8'><img src={logo} alt="" /></div>
        <div className='col-2 download'>
            <a href="https://t.me/cosmotradeofficial" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="" />
            </a>
        </div>
    </div>
</div>

    </div>

    <Banner/>
    <GameSection/>
    <OnlineCount/>
    <BonusCount/>
    <RunningTime/>
    <WithdrawSection/>
    <Accordian/>
    <Nav/>
    
    </div>
  )
}

export default Home
