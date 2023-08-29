import React from 'react'
import back from '../../images/back-button 1.svg'
import notification from './notification.svg'
import {Link} from  'react-router-dom'
import './Message.css'
function Message() {
  return (
    <div className='message'>
      <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Message Center
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row message-row">
                    <div className="col-2"><div className='profile-logo-Wrapper'><img src={notification} alt="" /></div></div>
                    <div className="col-7">
                    <h6>Login Notification</h6>
                    <p>2023-08-04 21:39:48</p>
                    </div>
                    <div className="col-3"><button className='delete-btn'>Delete</button></div>
                </div>
            </div>

    </div>
  )
}

export default Message
