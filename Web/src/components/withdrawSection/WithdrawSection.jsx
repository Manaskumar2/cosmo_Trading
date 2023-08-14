import star from '../../images/star.svg'
import './Withdraw.css'
function WithdrawSection() {
return (
    <div className='withdraw'>
        <div className="container">
            <div className="container ">
                <div className="row golden-bg">
                    <div className="col-2"><img src={star} alt="" /></div>
                    <div className="col-8 text-center">Today Withdrawal</div>
                    <div className="col-2"><img src={star} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
)
}

export default WithdrawSection
