import back from '../../images/back-button 1.svg'
import { useNavigate } from 'react-router-dom'
import './Success.css'
import head from '../../images/headset.svg'
// import logo from '../../images/Cosmo Logo.svg'
import blueLine from '../../images/blueLine.svg'
import tick from '../../images/success.json'
import Lottie from "lottie-react";
import {Link} from 'react-router-dom'
function Success() {
    const navigate = useNavigate()
    return (
        
        <div className="desktop">
            <div className='forgotPage' >
            <div className='wrapper'>
                <div className='top'>
                <div className="row">
                            <div className="col-2 "><button className='back-btn back' onClick={() => { navigate('/') }}><img src={back} alt="" /></button></div>
                            <div className="col-8">Forgot Password</div>
                            <div className="col-2"><img src={head} alt="" className='head' /></div>

                        </div>
                </div>
                <div className='container-fluid'>
                <Lottie animationData={tick} alt="Spaceship" className="tickicon"
                style={{
                    height: "200px",
                }} />
                <div className='success-container'>
                    <h4 className='title' style={{textAlign:"center"}}>Successfully<br />password Changed!</h4>
                    <div className='successBlue'><img src={blueLine} alt=""/></div>
                </div>
                <div className='login_here'>Your password has been successfully <br />reset, please <Link>Login Here</Link>  </div>
                <div className='passwordChange-btn' style={{marginTop:'3rem'}}>
            <button className='top-btn' onClick={()=>{navigate('/signIn')}}>Login</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Success
