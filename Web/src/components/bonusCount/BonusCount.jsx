// import bonusBG from '../../images/bonus.svg'
import './Bonus.css'
import rupee from '../../images/rupee.svg'
import WidthDrawBonus from '../../images/img-withdraw-bonus.svg'
import {useState , useEffect} from 'react'

function BonusCount() {

  const totalBettingNumbersArray = [97500,90500, 85130, 98000, 122100, 109800, 101200, 160900, 95100, 88100, 95500, 86800, 70000,77500,90500, 9800,92000, 11800, 101200, 99500, 95100, 125000, 88900, 20100, 21300, 222100, 199800, 301200, 99900, 95000,12800, 12300, 12500, 10700,];
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
    <div className='bonus'>
        <div className='container'>
            <div className='txt'>
                <img src={WidthDrawBonus} alt="" className="img_bonus" />
                <div className="total_wdraw">
                    <p>Today Total Withdrawal</p>
                    <h3><i className="icon-rupee"></i> {totalBettingCount}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BonusCount
