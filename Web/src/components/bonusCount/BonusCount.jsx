// import bonusBG from '../../images/bonus.svg'
import './Bonus.css'
import rupee from '../../images/rupee.svg'
import WidthDrawBonus from '../../images/img-withdraw-bonus.svg'

function BonusCount() {
  return (
    <div className='bonus'>
        <div className='container'>
            <div className='txt'>
                <img src={WidthDrawBonus} alt="" className="img_bonus" />
                <div className="total_wdraw">
                    <p>Today Total Withdrawal</p>
                    <h3><i className="icon-rupee"></i> 68,520.00</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BonusCount
