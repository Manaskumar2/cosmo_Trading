import star from '../../images/star.svg'
import User from '../../images/img-profile.svg'
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
            <div className="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td width="20"><img src={User} alt="" /></td>
                      <td style={{paddingLeft:0}}>Rajesh Barik</td>
                      <td><h5><i className="icon-rupee"></i> 300.00</h5></td>
                      <td><h6>09:20 AM</h6></td>
                    </tr>
                    <tr>
                      <td width="20"><img src={User} alt="" /></td>
                      <td style={{paddingLeft:0}}>Bharat Jena</td>
                      <td><h5><i className="icon-rupee"></i> 5000.00</h5></td>
                      <td><h6>06:30 PM</h6></td>
                    </tr>

                    <tr>
                      <td width="20"><img src={User} alt="" /></td>
                      <td style={{paddingLeft:0}}>Rajesh Barik</td>
                      <td><h5><i className="icon-rupee"></i> 300.00</h5></td>
                      <td><h6>09:20 AM</h6></td>
                    </tr>
                    <tr>
                      <td width="20"><img src={User} alt="" /></td>
                      <td style={{paddingLeft:0}}>Bharat Jena</td>
                      <td><h5><i className="icon-rupee"></i> 5000.00</h5></td>
                      <td><h6>06:30 PM</h6></td>
                    </tr>

                    <tr>
                      <td width="20"><img src={User} alt="" /></td>
                      <td style={{paddingLeft:0}}>Rajesh Barik</td>
                      <td><h5><i className="icon-rupee"></i> 300.00</h5></td>
                      <td><h6>09:20 AM</h6></td>
                    </tr>
                    <tr>
                      <td width="20"><img src={User} alt="" /></td>
                      <td style={{paddingLeft:0}}>Bharat Jena</td>
                      <td><h5><i className="icon-rupee"></i> 5000.00</h5></td>
                      <td><h6>06:30 PM</h6></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
)
}

export default WithdrawSection
