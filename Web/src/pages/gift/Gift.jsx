import React from 'react'
import './gift.css'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import {Link} from  'react-router-dom'
import gft from './Frame.png'
function Gift() {
  return (
    <div className='giftPage'>
        <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Gift
                    </div>
                    <div className="col-2">
                        <img src={ear} alt="" className="header_headphone" />
                    </div>
                </div>
            </div>
            <div className='gift-body'>
                <div className="container  box">
                    <img src={gft} alt="" />
                    <h6>Hello Everyone</h6>
                    <p>We have a Gift for You</p>
                    <input type="text" />
                </div>
                <div className="container">
                    <div className="row gift-btn">
                        <button className="col-12">SUBMIT</button>
                    </div>
                </div>

                
            </div>
    </div>
)
}

export default Gift
