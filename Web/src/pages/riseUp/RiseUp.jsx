import back from '../../images/back-button 1.svg'
import logo from '../../images/LogoInner.svg'
import wallet from '../../images/green-wallet.svg'
import clock from '../../images/clock 1.svg'
import ear from '../../images/earphone.svg'
import Audio from '../../images/audio.svg'
import rupee from '../../images/rupee.svg'
import reload from '../../images/reload 1.svg'
import './RiseUp.css'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import alfa from '../../images/alfaBtn.svg'
import beta from '../../images/betaBtn.svg'
import gama from '../../images/gama.svg'
import { TimeSectionRiseUp } from '../../components/ComponentExport'
import { UserDetails } from '../../Atoms/UserDetails'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { TimeNo } from '../../Atoms/GameTime'
import { RiseUpTime } from '../../Atoms/GameTimeRiseup'
import { GameHistoryRiseUp } from '../../components/ComponentExport'
import { useNavigate } from 'react-router-dom'
import { CountDown } from '../../Atoms/CountDown';
import Timer from '../../components/timer/Timer'
import { PlaySound } from '../../Atoms/PlaySound';
import mute from '../../images/mute.svg'
import { CountDownRiseup } from '../../Atoms/CountDownRiseup'
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
    const countDownRiseup = useRecoilValue(CountDownRiseup)
    const [playSound, setPlaySound] = useRecoilState(PlaySound)
    const [isChecked, setIsChecked] = useState(true);

    const navigate = useNavigate()

    const [userData, setUserData] = useRecoilState(UserDetails)
    const [activeTab, setActiveTab] = useState(1);

    const setTimeNo = useSetRecoilState(TimeNo)
    const setMinute = useSetRecoilState(RiseUpTime)

    const auth = useRecoilValue(AuthState)
    const [amount, setAmount] = useState(1);
    const [group, setGroup] = useState('');
    const [duration, setDuration] = useState(1);
    const [multiplier, setMultiplier] = useState(1);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [gmShow, setGmShow] = useState(false);



    const showCountDown = useRecoilValue(CountDown)

    const [money, setMoney] = useState(0)
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const [currentDateNumber, setCurrentDateNumber] = useState(null);


    const getCurrentDateNumber = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      const dateNumber = year * 10000 + month * 100 + date;
      return dateNumber;
    };
  

    useEffect(() => {
        handleUserMoney()
    }, []);


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
                setUserData(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const handleSubmit = async () => {
        let token = auth.authToken;

        if (countDownRiseup < 5) {
            toast.error("Wait for the next game", { ...toastProps });
            return null;
        }
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/betSecondGame`,
                {
                    amount,
                    group,
                    duration
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            if (response.status === 201) {
                toast.success("Bet created Successfully!", { ...toastProps });
                setGroup('');
                setAmount(1);
                setSmShow(false);
                setLgShow(false);
                setGmShow(false);
                console.log(response);
                handleUserMoney();
                return response;
            } else if (response.status === 404) {
                return null;
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return null;
            }
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }
    // const [uid,setUid]=useState(0)
    // const sendUID = async () => {
    //     let token = auth.authToken;

    //     try {
    //         const response = await axios.post(
    //             `${import.meta.env.VITE_API_URL}/update2ndGameUID`,
    //             {
    //                 gameUID:currentDateNumber
    //             },
    //             {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }
    //         );
    //         if (response.status === 200) {
    //             setUid(response.data.newGameUID)
    //             return response;
    //         } else if (response.status === 404) {
    //             return null;
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.status === 404) {
    //             return null;
    //         }
    //         const errorMessage = error.response ? error.response.data.message : error.message;
    //         toast.error(errorMessage || 'Something went wrong', { ...toastProps });
    //     }
    // }




    

    useEffect(() => {
        setAmount(money * multiplier);
    }, [money, multiplier]);

    const handleMoneyClick = (value) => {
        setMoney(value);
    };

    const handleMultiplierChange = (operation) => {
        if (operation === '+') {
            setMultiplier((prevMultiplier) => prevMultiplier + 1);
        } else if (operation === '-') {
            setMultiplier((prevMultiplier) => Math.max(prevMultiplier - 1, 1));
        } else {
            setMultiplier(parseInt(operation));
        }
    };

    const handleMin = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getSecondGame/${duration}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
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
        if (countDownRiseup === 59) {
            handleMin();
        }
    }, [countDownRiseup])



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
                    <div className="col-2" >
                        <img src={ear} alt="" className="header_headphone" onClick={()=>{navigate('/customerCare')}}/>
                        {playSound ? (
                            <img src={Audio} alt="" onClick={() => { setPlaySound(false) }} />
                        ) : (
                            <img src={mute} alt="" onClick={() => { setPlaySound(true) }} />
                        )}
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
                        <h2 style={{ color: '#fff', letterSpacing: 0.15, fontSize: 27, fontFamily: 'Montserrat', display: 'flex', fontWeight: 600 }}><img src={rupee} alt="" /> {userData && userData.data.data.userDetails.walletAmount.toFixed(2)} <img src={reload} alt="" style={{ marginLeft: 10, }} onClick={handleUserMoney} /></h2>
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
                    <div className='clock-btn-containerRaiseUp row'>
                        <button className={activeTab === 1 ? 'activeClockRaiseUp col-3' : 'clock-btn col-3'} onClick={() => { setDuration(1); handleMin(duration); handleTabClick(1); setTimeNo(1) }}>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>1 minute</p>
                        </button>

                    </div>
                </div>




                <>
                    <TimeSectionRiseUp />
                    <>
                        <div className="big-small-game-wrapper " >

                            {/* // animation // */}
                            {showCountDown === true ? <Timer /> :
                                <div className='second-image-cover'>
                                    <div className="ani-container">
                                        <div className="animated-div animated-alphaBar "></div>
                                        <div className="animated-div animated-betaBar"></div>
                                        <div className="animated-div animated-gammaBar"></div>
                                    </div>
                                    <div className=' alfa-beta-gama-button-container'>
                                        <button className='alfa-beta-gama-button' onClick={() => {setSmShow(true);setGroup("A")}} style={{ background: "radial-gradient(50% 50% at 50% 50%, #FF7562 0%, #E51616 100%)" }}>
                                            <img src={alfa} alt="" />
                                            <p>ALPHA</p>
                                        </button>
                                        <button className='alfa-beta-gama-button' onClick={() => {setLgShow(true);setGroup("B")}} style={{ background: "radial-gradient(50% 50% at 50% 50%, #8DFF8A 0%, #09BD05 100%)" }}>
                                            <img src={beta} alt="" />
                                            <p>BETA</p>
                                        </button>
                                        <button className='alfa-beta-gama-button' onClick={() => {setGmShow(true),setGroup("C")}} style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFF3C9 0%, #DEAF06 100%)" }}>
                                            <img src={gama} alt="" />
                                            <p>GAMA</p>
                                        </button>
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
                                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='alfa-beta-gama-button' style={{ background: "radial-gradient(50% 50% at 50% 50%, #FF7562 0%, #E51616 100%)" }}>
                                        <img src={alfa} alt="" />
                                        <p>ALPHA</p>
                                    </button></div>
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
                                                className={`x-section ${money === 1 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(1)}
                                            >
                                                1
                                            </button>
                                            <button
                                                className={`x-section ${money === 10 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(10)}
                                            >
                                                10
                                            </button>
                                            <button
                                                className={`x-section ${money === 100 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(100)}
                                            >
                                                100
                                            </button>
                                            <button
                                                className={`x-section ${money === 1000 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(1000)}
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
                                            <button onClick={() => handleMultiplierChange('-')}>-</button>
                                            <div>{multiplier}</div>
                                            <button onClick={() => handleMultiplierChange('+')}>+</button>
                                        </div>
                                    </div>
                                    <div className="multiply">
                                        <div>
                                            <p>Custom Amount</p>
                                        </div>
                                        <div className='plus-minus'>

                                            <input className='plus-minus-input' type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />

                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                    <div className="x-row-section">
                                        <button
                                            className={`x-section ${multiplier == 1 ? 'active-btn' : ''}`}

                                            onClick={() => handleMultiplierChange('1')}
                                        >
                                            x1
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 2 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('2')}
                                        >
                                            x2
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 5 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('5')}
                                        >
                                            x5
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 10 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('10')}
                                        >
                                            x10
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 50 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('50')}
                                        >
                                            x50
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 100 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('100')}
                                        >
                                            x100
                                        </button>
                                    </div>
                                    <div className="hrline"></div>
                                    <div className="custom_checkbox">
                                        <input
                                            type="checkbox"
                                            id="Agree"
                                            checked={isChecked}

                                        />
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
                                    1 minute
                                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='alfa-beta-gama-button' style={{ background: "radial-gradient(50% 50% at 50% 50%, #8DFF8A 0%, #09BD05 100%)" }}>
                                        <img src={beta} alt="" />
                                        <p>Beta</p>
                                    </button></div>
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
                                                className={`x-section ${money === 1 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(1)}
                                            >
                                                1
                                            </button>
                                            <button
                                                className={`x-section ${money === 10 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(10)}
                                            >
                                                10
                                            </button>
                                            <button
                                                className={`x-section ${money === 100 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(100)}
                                            >
                                                100
                                            </button>
                                            <button
                                                className={`x-section ${money === 1000 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(1000)}
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
                                            <button onClick={() => handleMultiplierChange('-')}>-</button>
                                            <div>{multiplier}</div>
                                            <button onClick={() => handleMultiplierChange('+')}>+</button>
                                        </div>
                                    </div>
                                    <div className="multiply">
                                        <div>
                                            <p>Custom Amount</p>
                                        </div>
                                        <div className='plus-minus'>

                                            <input className='plus-minus-input' type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />

                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                    <div className="x-row-section">
                                        <button
                                            className={`x-section ${multiplier == 1 ? 'active-btn' : ''}`}

                                            onClick={() => handleMultiplierChange('1')}
                                        >
                                            x1
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 2 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('2')}
                                        >
                                            x2
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 5 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('5')}
                                        >
                                            x5
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 10 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('10')}
                                        >
                                            x10
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 50 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('50')}
                                        >
                                            x50
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 100 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('100')}
                                        >
                                            x100
                                        </button>
                                    </div>
                                    <div className="hrline"></div>
                                    <div className="custom_checkbox">
                                        <input
                                            type="checkbox"
                                            id="Agree"
                                            checked={isChecked}

                                        />
                                        <label for="Agree">I Agree <Link>Privacy Policy</Link></label>
                                    </div>

                                    <div className="hrline"></div>
                                    <button className='total-btn' onClick={handleSubmit}>Total Price: {amount}</button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            size="lg"
                            show={gmShow}
                            onHide={() => setGmShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    1 minute
                                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='alfa-beta-gama-button' style={{ background: "radial-gradient(50% 50% at 50% 50%, #FFF3C9 0%, #DEAF06 100%)" }}>
                                        <img src={gama} alt="" />
                                        <p>Gama</p>
                                    </button></div>
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
                                                className={`x-section ${money === 1 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(1)}
                                            >
                                                1
                                            </button>
                                            <button
                                                className={`x-section ${money === 10 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(10)}
                                            >
                                                10
                                            </button>
                                            <button
                                                className={`x-section ${money === 100 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(100)}
                                            >
                                                100
                                            </button>
                                            <button
                                                className={`x-section ${money === 1000 ? 'active-btn' : ''}`}
                                                onClick={() => handleMoneyClick(1000)}
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
                                            <button onClick={() => handleMultiplierChange('-')}>-</button>
                                            <div>{multiplier}</div>
                                            <button onClick={() => handleMultiplierChange('+')}>+</button>
                                        </div>
                                    </div>
                                    <div className="multiply">
                                        <div>
                                            <p>Custom Amount</p>
                                        </div>
                                        <div className='plus-minus'>

                                            <input className='plus-minus-input' type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />

                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                    <div className="x-row-section">
                                        <button
                                            className={`x-section ${multiplier == 1 ? 'active-btn' : ''}`}

                                            onClick={() => handleMultiplierChange('1')}
                                        >
                                            x1
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 2 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('2')}
                                        >
                                            x2
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 5 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('5')}
                                        >
                                            x5
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 10 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('10')}
                                        >
                                            x10
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 50 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('50')}
                                        >
                                            x50
                                        </button>
                                        <button
                                            className={`x-section ${multiplier == 100 ? 'active-btn' : ''}`}
                                            onClick={() => handleMultiplierChange('100')}
                                        >
                                            x100
                                        </button>
                                    </div>
                                    <div className="hrline"></div>
                                    <div className="custom_checkbox">
                                        <input
                                            type="checkbox"
                                            id="Agree"
                                            checked={isChecked}

                                        />
                                        <label for="Agree">I Agree <Link>Privacy Policy</Link></label>
                                    </div>

                                    <div className="hrline"></div>
                                    <button className='total-btn' onClick={handleSubmit}>Total Price: {amount}</button>
                                </div>
                            </Modal.Body>
                        </Modal>

                    </>
                    <GameHistoryRiseUp duration={duration} />
                </>


            </div >
        </div >
    )
}

export default RiseUp
