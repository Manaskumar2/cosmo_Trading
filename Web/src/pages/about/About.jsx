import React from 'react'
import back from '../../images/back-button 1.svg'
import { Link } from 'react-router-dom'
import logo from './Logo.svg'
import row from './Row.svg'
import shield from '../../../../SVG/shield 1.svg'
import next from '../../../../SVG/next.svg'
import './About.css'
import second from './second.svg'
function About() {
    return (
        <div className='about'>
            <div className="container ProNav">
                <div className="row">
                    <Link to='/profile' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        About
                    </div>
                </div>
            </div>
            <div className="about-container">
                <img src={logo} alt="" className='logo' />
                <div className="container version">
                    Game : V1.1010.1
                </div>
                <img src={row} alt="" />


                <div className="container chart">
                    <div className='row'>
                        <div className='col-2'><div className='profile-logo-Wrapper'><img src={shield} alt="" /></div></div>
                        <div className='col-8 lvlContainer'>Privacy Policy </div>
                        <div className='col-2 backImg'><img src={next} alt="" /></div>
                    </div>
                    <div className='row'>
                        <div className='col-2'><div className='profile-logo-Wrapper'><img src={second} alt="" /></div></div>
                        <div className='col-8 lvlContainer'>Risk Disclosure Agreement </div>
                        <div className='col-2 backImg'><img src={next} alt="" /></div>
                    </div>
                </div>
















            </div> </div>
    )
}

export default About
