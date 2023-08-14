// import bonusBG from '../../images/bonus.svg'
import './Bonus.css'
import rupee from '../../images/rupee.svg'
function BonusCount() {
  return (
    <div className='bonus'>
        <div className='container'>
            <div className='txt'>
            <p>Today Total Withdrawal</p>
                <h3><img src={rupee} alt="" />1,876362.00</h3>
                </div>
            
                
            
        </div>
    </div>
  )
}

export default BonusCount
