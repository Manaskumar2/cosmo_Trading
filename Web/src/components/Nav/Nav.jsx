
import './Nav.css'
import { Link } from 'react-router-dom'
import home from '../../images/home.svg'
import diamond from '../../images/diamond.svg'
import wallet from '../../images/wallet 1.svg'
import user from '../../images/user.svg'

function Nav() {
    return (
        <div className='navBar container'>
                <div className='link-container row'>
                    <div className='link col-3'> <Link> <img src={home} alt="" /> <p> HOME</p></Link>  </div>
                    <div className='link col-3'> <Link> <img src={diamond} alt="" /><p> PROMOTION</p> </Link>  </div>
                    <div className='link col-3'> <Link> <img src={wallet} alt="" /> <p> WALLET</p></Link>  </div>
                    <div className='link col-3'> <Link> <img src={user} alt="" /><p>PROFILE</p> </Link> </div>
                </div>
        </div>
    )
}

export default Nav
