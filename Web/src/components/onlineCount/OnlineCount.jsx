import count1 from '../../images/count1.svg'
import count2 from '../../images/count2.svg'
import count3 from '../../images/count3.svg'
import './Count.css'
function OnlineCount() {
    return (
        <div className='count'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className='count-logo'><img src={count1} alt="" /></div>
                        <div className='num'>6451245</div>
                        <p>Online</p>
                    </div>
                    <div className="col-4">
                        <div className='count-logo'><img src={count2} alt="" /></div>
                        <div className='num'>121954</div>
                        <p>Total Betting Amount</p>
                    </div>
                    <div className="col-4">
                        <div className='count-logo'><img src={count3} alt="" /></div>
                        <div className='num'>544585</div>
                        <p>Online</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OnlineCount
