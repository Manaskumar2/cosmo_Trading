import count1 from '../../images/count1.svg'
import count2 from '../../images/count2.svg'
import count3 from '../../images/count3.svg'
import './Count.css'
function OnlineCount() {
    return (
        <div className='count'>
            <div className="container">
                <div className="online_count_row">
                    <div className="online_count_col">
                        <div className='count-logo'><img src={count3} alt="" /></div>
                        <div className='num'>203383</div>
                        <p>Players</p>
                    </div>
                    <div className="online_count_col">
                        <div className='count-logo'><img src={count2} alt="" /></div>
                        <div className='num'>9874593483848</div>
                        <p>Total of betting</p>
                    </div>
                    <div className="online_count_col">
                        <div className='count-logo'><img src={count1} alt="" /></div>
                        <div className='num'>203383</div>
                        <p>Online</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OnlineCount
