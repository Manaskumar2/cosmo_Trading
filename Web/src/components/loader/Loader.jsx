import React from 'react'
import './Loader.css'
import logo from './Logo.svg'
function Loader() {
    return (
        <div className='loaderBody'>
            <div className='logo-container-loader'><img src={logo} alt="" /></div>
            <div class="loader">Loading
                <span></span>
            </div>
        </div>
    )
}

export default Loader
