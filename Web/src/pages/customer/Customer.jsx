import React from 'react'
import back from '../../images/back-button 1.svg'
import { Link } from 'react-router-dom'
import logo from './Logo.svg'
import row from './Row.svg'
import next from '../../../../SVG/next.svg'
import './Customer.css'
import second from './cus-profile.svg'


function Customer() {
    return (
        <div className='about'>
            <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Customer Support
                    </div>
                </div>
            </div>
            <div className="about-container">
                <img src={logo} alt="" className='logo' />

                <img src={row} alt="" style={{width:'60%',margin:"auto"}} />
                <div className="container chart">
                    <div className='row'>
                        <div className='col-2'><div className='profile-logo-Wrapper'><img src={second} alt="" /></div></div>
                        <div className='col-8 lvlContainer'> Live Chat </div>
                        <div className='col-2 backImg'><img src={next} alt="" /></div>
                    </div>
                </div>
















            </div> </div>
    )
}

export default Customer
