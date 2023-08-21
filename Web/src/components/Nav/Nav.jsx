
import './Nav.css'
import { Link } from 'react-router-dom'
import home from '../../images/home.svg'
import diamond from '../../images/diamond.svg'
import wallet from '../../images/wallet 1.svg'
import user from '../../images/user.svg'

function Nav() {
    return (
        <div className='navBar container'>
                <div className='link-container rowX'>
                    <div className='link'> <Link to='/'><i className="icon-home"></i> <p>Home</p></Link>  </div>
                    <div className='link'> <Link><i className="icon-promotion"></i> <p>Promotion</p> </Link>  </div>
                    <div className='link'> <Link><i className="icon-walet"></i> <p>Wallet</p></Link>  </div>
                    <div className='link'> <Link to='/profile'><i className="icon-profile"></i> <p>Profile</p> </Link> </div>
                </div>
        </div>
    )
}

export default Nav
