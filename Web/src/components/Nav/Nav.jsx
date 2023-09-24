import React from 'react'; 
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    
    return (
        <div className='navBar container'>
            <div className='link-container rowX'>
                <div className='link'>
                    <NavLink  to='/'  exact="true" className='nav-Link'>
                        <i className="icon-home"></i> <p>Home</p>
                    </NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/promotion'  exact="true" className='nav-Link'>
                        <i className="icon-promotion"></i> <p>Promotion</p>
                    </NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/wallet'  exact="true" className='nav-Link'>
                        <i className="icon-walet"></i> <p>Wallet</p>
                    </NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/profile'  exact="true" className='nav-Link'>
                        <i className="icon-profile"></i> <p>Profile</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Nav;
