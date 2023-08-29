import React from 'react'
import back from '../../images/back-button 1.svg'
import front from './wallet-2.svg'
import front1 from './wallet-3.svg'
import {Link} from  'react-router-dom'
import './TransectionRecord.css'
function TransectionRecord() {
  return (
    <div className='message'>
      <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Transaction History
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row message-row">
                    <div className="col-2"><div className='profile-logo-Wrapper'><img src={front} alt="" /></div></div>
                    <div className="col-7">
                    <h6>Bet Contribution</h6>
                    <p>2023-08-04 21:39:48</p>
                    </div>
                    <div className="col-3"><button className='delete-btn'>Delete</button></div>
                </div>
                <div className="row message-row">
                    <div className="col-2"><div className='profile-logo-Wrapper'><img src={front1} alt="" /></div></div>
                    <div className="col-7">
                    <h6>Bet Decrease</h6>
                    <p>2023-08-04 21:39:48</p>
                    </div>
                    <div className="col-3"><button className='delete-btn'>Delete</button></div>
                </div>
            </div>

    </div>
  )
}

export default TransectionRecord
