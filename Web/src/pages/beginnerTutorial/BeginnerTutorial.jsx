import React from 'react'
import back from '../../images/back-button 1.svg'
import ear from '../../images/earphone.svg'
import {Link} from  'react-router-dom'
import './BeginnerTutorial.css'
function BeginnerTutorial() {
  return (
    <div >
      <div className='beginnerTutorial'>
        <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                    Beginner Tutorial
                    </div>
                    <div className="col-2">
                        <img src={ear} alt="" className="header_headphone" />
                    </div>
                </div>
            </div>
            <div className='container Beginner-tutorial'>
                Coming Soon
            </div>
    </div>
    </div>
  )
}

export default BeginnerTutorial
