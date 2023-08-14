// import bCircle from '../../images/belips.png'
import logo from '../../images/Cosmo Logo.svg'
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
function Home() {
  return (
    <div className='main-background'>
    <div className='home'> 
        <div className='container'>
            <div className='row'>
            <div className='col-9'><img src={logo} alt="" /></div>
            <div className='col-3 download'><img src={telegram} alt="" /></div>
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
