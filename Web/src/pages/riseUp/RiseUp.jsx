import back from '../../images/back-button 1.svg'
import logo from '../../images/LogoInner.svg'
import wallet from '../../images/green-wallet.svg'
import clock from '../../images/clock 1.svg'
import ear from '../../images/earphone.svg'
import Audio from '../../images/audio.svg'
import rupee from '../../images/rupee.svg'
import reload from '../../images/reload 1.svg'
import './RiseUp.css'
import { useState, useMemo, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import alfa from '../../images/alfa.svg'
import beta from '../../images/beta.svg'
import bg from '../../images/Section.svg'
import aModal from '../../images/A-modal.svg'
import { TimeSection } from '../../components/ComponentExport'
import { UserDetails } from '../../Atoms/UserDetails'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { TimeNo, OneMinute } from '../../Atoms/GameTime'
import { GameHistory } from '../../components/ComponentExport'
import { useNavigate } from 'react-router-dom'
import { CountDown } from '../../Atoms/CountDown';
import Timer from '../../components/timer/Timer'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};
function RiseUp() {
    const navigate = useNavigate()

    const [userData, setUserData] = useRecoilState(UserDetails)
    const [activeTab, setActiveTab] = useState(1);

    const setTimeNo = useSetRecoilState(TimeNo)
    const setMinute = useSetRecoilState(OneMinute)

    const auth = useRecoilValue(AuthState)
    const [amount, setAmount] = useState(0);
    const [group, setGroup] = useState('');
    const [duration, setDuration] = useState(1);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [smShow1, setSmShow1] = useState(false);
    const [lgShow1, setLgShow1] = useState(false);
    const [smShow2, setSmShow2] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    const [smShow3, setSmShow3] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);

    const [activeMultiplier, setActiveMultiplier] = useState(1);

    const showCountDown = useRecoilValue(CountDown)

    const [money, setMoney] = useState(0)
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const handleMoneyButtonClick = (moneyToken) => {
        setAmount(moneyToken);
    };

    const handlePlusButtonClick = () => {
        setAmount(prevAmount => prevAmount + money);
    };

    const handleMinusButtonClick = () => {
        setAmount(prevAmount => prevAmount - money);
    };

    const handleMultiplierClick = (multiplierValue) => {
        setAmount(prevAmount => prevAmount * multiplierValue);
    };
    




    ///////


    const handleUserMoney = async () => {
        try {
            let token = auth.authToken
            let UID = auth.UID
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID}`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );

            if (response.status === 200) {
                console.log(response);
                setUserData(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const handleSubmit = async () => {
        let token = auth.authToken
        console.log(group);
        console.log(amount);
        console.log(duration);
        console.log(token);


        try {
            let token = auth.authToken
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/bet`, {
                amount,
                group,
                duration
            }, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );

            if (response.status === 201) {
                toast.success("Bet created Successfully!", { ...toastProps });
                setGroup('');
                setAmount(0);

                console.log(response);
                console.log("Bapi")
                toast.success("Bet created", { ...toastProps })
                navigate('/growUp')
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const handleMin = async (duration) => {
        try {
            let token = auth.authToken;
            console.log(duration);
            console.log(token);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getgame/${duration}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                // toast.success('growup', { ...toastProps });
                console.log(response);
                setTimeNo(duration)
                setMinute(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
        }
    };

    useEffect(() => {
        console.log(duration);
        if (auth.authToken && auth.UID) {
            handleMin(duration);
            const timer = setTimeout(async () => {
                await handleUserMoney();
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [auth, duration]);
    

    const [heights, setHeights] = useState([100, 70, 95]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
       
        const newHeights = [...heights];
  
        
        newHeights[activeIndex] += 50;
  
       
        const nextIndex = (activeIndex + 1) % 3;
        newHeights[nextIndex] -= 50;
  
        setHeights(newHeights);
        setActiveIndex(nextIndex);
      }, 1000); 
  
      return () => clearInterval(interval);
    }, [heights, activeIndex]);


    return (
        <div className="win">
            <div className="container winNav">
                <div className="row">
                    <Link to='/' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-2">
                        <img src={ear} alt="" className="header_headphone" />
                        <img src={Audio} alt="" />
                    </div>
                </div>
            </div>
            <Toaster />
            <div className="wallet">
                <div className="container winWallet">
                    <div className="row">
                        <div className="col-8" style={{ marginBottom: "10px" }}>
                            <h4 style={{ marginBottom: 3, color: '#6FC0EE', fontFamily: 'Montserrat', letterSpacing: 0.09, fontWeight: 600, }}>Total</h4>
                            <p style={{ color: '#29CEE4', fontFamily: 'Montserrat' }}>Wallet balance</p>
                        </div>
                        <div className="col-4" style={{ textAlign: 'right' }}><img src={wallet} alt="" /></div>
                        <h2 style={{ color: '#fff', letterSpacing: 0.15, fontSize: 27, fontFamily: 'Montserrat', display: 'flex', fontWeight: 600 }}><img src={rupee} alt="" /> {userData && userData.data.data.userDetails.walletAmount} <img src={reload} alt="" style={{ marginLeft: 10, }} onClick={handleUserMoney} /></h2>
                    </div>

                    <div className="container">
                        <div className="row wr-btns">
                            <div className="col-6 "><button onClick={() => navigate('/withdraw')} className='withdraw'>Withdraw</button></div>
                            <div className="col-6 "><button onClick={() => navigate('/recharge')} className='recharge'>Recharge</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid">
                    <div className='clock-btn-container row'>
                        <button className={activeTab === 1 ? 'activeClock col-3' : 'clock-btn col-3'} onClick={() => { setDuration(1); handleMin(duration); handleTabClick(1); setTimeNo(1) }}>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>1 minute</p>
                        </button>
                        
                    </div>
                </div>




                    <>
                        <TimeSection />
                        <>
                            <div className="big-small-game-wrapper " >

                                {/* ///// */}
                                {showCountDown === true ? <Timer/> :
                                <div className='image-cover'>
                                    <div className="ani-container">
      <div className="animated-div" style={{ height: `${heights[0]}px` }}></div>
      <div className="animated-div" style={{ height: `${heights[1]}px`, backgroundColor:"#FBC70E" }}></div>
      <div className="animated-div" style={{ height: `${heights[2]}px` ,backgroundColor:"#20CD1C"}}></div>
    </div>
                                </div>
                                }
                                {/* ///// */}
                            </div>
                            <Modal
                                size="lg"
                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg modal-title">
                                        1 minute
                                        <div style={{ textAlign: 'center' }}><img src={aModal} alt="" /></div>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <div className=' money-container'>
                                        <div className="money">
                                            <div>
                                                <p>Money</p>
                                            </div>
                                            <div className="x-row-section">
                                                <button
                                                    className={`x-section ${amount === 100 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(100); setMoney(100) }}
                                                >
                                                    100
                                                </button>
                                                <button
                                                    className={`x-section ${amount === 200 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(200); setMoney(200) }}
                                                >
                                                    200
                                                </button>
                                                <button
                                                    className={`x-section ${amount === 500 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(500); setMoney(500) }}
                                                >
                                                    500
                                                </button>
                                                <button
                                                    className={`x-section ${amount === 1000 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(1000); setMoney(1000) }}
                                                >
                                                    1000
                                                </button>
                                            </div>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="multiply">
                                            <div>
                                                <p>Multiply</p>
                                            </div>
                                            <div className='plus-minus'>
                                                <button onClick={handleMinusButtonClick}>-</button>
                                                <div>{amount}</div>
                                                <button onClick={handlePlusButtonClick}>+</button>
                                            </div>
                                        </div>
                                        <div className="multiply">
                                            <div>
                                                <p>Custom Amount</p>
                                            </div>
                                            <div className='plus-minus'>
                                                
                                                <input className='plus-minus-input' type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                                                
                                            </div>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="x-row-section">
                                            <button
                                                className={`x-section ${activeMultiplier === 1 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(1)}
                                            >
                                                x1
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 2 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(2)}
                                            >
                                                x2
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 5 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(5)}
                                            >
                                                x5
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 10 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(10)}
                                            >
                                                x10
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 50 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(50)}
                                            >
                                                x50
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 100 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(100)}
                                            >
                                                x100
                                            </button>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="custom_checkbox">
                                            <input type="checkbox" id="Agree" />
                                            <label for="Agree">I Agree <Link>Privacy Policy</Link></label>
                                        </div>

                                        <div className="hrline"></div>
                                        <button className='total-btn' onClick={handleSubmit}>Total Price: {amount}</button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                            <Modal
                                size="lg"
                                show={lgShow}
                                onHide={() => setLgShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Beta 1 minute
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div style={{ width: '100%' }}>
                                        <div className="money">
                                            <div>
                                                <p>Money</p>
                                            </div>
                                            <div className="x-row-section">
                                                <button
                                                    className={`x-section ${amount === 100 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(100); setMoney(100) }}
                                                >
                                                    100
                                                </button>
                                                <button
                                                    className={`x-section ${amount === 200 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(200); setMoney(200) }}
                                                >
                                                    200
                                                </button>
                                                <button
                                                    className={`x-section ${amount === 500 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(500); setMoney(500) }}
                                                >
                                                    500
                                                </button>
                                                <button
                                                    className={`x-section ${amount === 1000 ? 'active-btn' : ''}`}
                                                    onClick={() => { handleMoneyButtonClick(1000); setMoney(1000) }}
                                                >
                                                    1000
                                                </button>
                                            </div>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="multiply">
                                            <div>
                                                <p>Multiply</p>
                                            </div>
                                            <div className='plus-minus'>
                                                <button onClick={handleMinusButtonClick}>-</button>
                                                <div>{amount}</div>
                                                <button onClick={handlePlusButtonClick}>+</button>
                                            </div>
                                        </div>
                                        <div className="multiply">
                                            <div>
                                                <p>Custom Amount</p>
                                            </div>
                                            <div className='plus-minus'>
                                                
                                                <input className='plus-minus-input' type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                                                
                                            </div>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="x-row-section">
                                            <button
                                                className={`x-section ${activeMultiplier === 1 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(1)}
                                            >
                                                x1
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 2 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(2)}
                                            >
                                                x2
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 5 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(5)}
                                            >
                                                x5
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 10 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(10)}
                                            >
                                                x10
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 50 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(50)}
                                            >
                                                x50
                                            </button>
                                            <button
                                                className={`x-section ${activeMultiplier === 100 ? 'active-btn' : ''}`}
                                                onClick={() => handleMultiplierClick(100)}
                                            >
                                                x100
                                            </button>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="custom_checkbox">
                                            <input type="checkbox" id="Agree2" />
                                            <label for="Agree2">I Agree <Link>Privacy Policy</Link></label>
                                        </div>
                                        <div className="hrline"></div>
                                        <button className='total-btn' onClick={handleSubmit}>Total Price: {amount}</button>
                                    </div>
                                </Modal.Body>
                            </Modal>

                        </>
                        <GameHistory  duration={duration}/>
                    </>


            </div >
        </div >
    )
}

export default RiseUp
