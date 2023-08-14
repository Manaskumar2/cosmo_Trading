
import './TimeSection.css'
function TimeSection3() {
  return (
    <div >
      <div className="container">
                <div className="row time-play">
                    <div className="col-6 left">
                        <div className='selected-mint'>5 minute</div>
                        <h3>24534545</h3>
                    </div>
                    <div className="col-6 right">
                        <p style={{ color: '#97E2F2', marginBottom: "0" }}>Left time to buy</p>
                        <div className="container end-time">
                            <div className="row">
                                <div className="col-3">00</div>
                                <div className="col-1">:</div>
                                <div className="col-3">25</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)
}

export default TimeSection3
