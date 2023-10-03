import React from 'react';
import back from '../../images/back-button 1.svg';
import { Link } from 'react-router-dom';
import './Customer.css';


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
                <div>
                
                </div>
            </div>
        </div>
    );
}

export default Customer;
