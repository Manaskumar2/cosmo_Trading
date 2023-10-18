// import bonusBG from '../../images/bonus.svg'
import './Bonus.css'
import rupee from '../../images/rupee.svg'
import WidthDrawBonus from '../../images/img-withdraw-bonus.svg'
import {useState , useEffect} from 'react'
  import { AuthState } from '../../Atoms/AuthState';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
function BonusCount() {
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
          console.log(response.data)
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
    <div className='bonus'>
        <div className='container'>
            <div className='txt'>
                <img src={WidthDrawBonus} alt="" className="img_bonus" />
                <div className="total_wdraw">
                    <p>Today Total Withdrawal</p>
                    <h3><i className="icon-rupee"></i> {player?player.todayTotalWithdrawal:105800}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BonusCount
