import back from '../../images/back-button 1.svg'
import logo from '../../images/LogoInner.svg'
import wallet from '../../images/green-wallet.svg'
import clock from '../../images/clock 1.svg'
import ear from '../../images/earphone.svg'
import Audio from '../../images/audio.svg'
import rupee from '../../images/rupee.svg'
import reload from '../../images/reload 1.svg'
import mute from '../../images/mute.svg'
import './Growup.css'
import { useState, useMemo, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import alfa from '../../images/alfa.svg'
import beta from '../../images/beta.svg'
import bg from '../../images/Section.svg'
import aModal from '../../images/A-modal.svg'
import bModal from '../../../../SVG/betaBtn.svg'
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
// import { CountDown } from '../../Atoms/CountDown';
import { ShowCountDown } from '../../Atoms/ShowCountDown'
import Timer from '../../components/timer/Timer'
import { PlaySound } from '../../Atoms/PlaySound';
// import {  } from '../../Atoms/CountDownRiseup'
import { CountDownGrowup } from '../../Atoms/CountDownGrowup'
import { GameHistoryList } from '../../Atoms/GameHistory'

export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};
function Growup() {
    // const [duration , setDuration]=useState(1)

    const countDownGrowup = useRecoilValue(CountDownGrowup)

    const [playSound, setPlaySound] = useRecoilState(PlaySound)
    const [isChecked, setIsChecked] = useState(true);

    const navigate = useNavigate()

    const [userData, setUserData] = useRecoilState(UserDetails)
    const [activeTab, setActiveTab] = useState(1);

    const setTimeNo = useSetRecoilState(TimeNo)
    const setMinute = useSetRecoilState(OneMinute)

    const auth = useRecoilValue(AuthState)
    const [money, setMoney] = useState(1);
    const [amount, setAmount] = useState(1);
    const [group, setGroup] = useState('');
    const [duration, setDuration] = useState(1);
    const [multiplier, setMultiplier] = useState(1);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [smShow1, setSmShow1] = useState(false);
    const [lgShow1, setLgShow1] = useState(false);
    const [smShow2, setSmShow2] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    const [smShow3, setSmShow3] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);


    const showCountDown = useRecoilValue(ShowCountDown)


    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };


    useEffect(() => {
        handleUserMoney()
        const intervalId = setInterval(handleUserMoney, 4500);
        return () => clearInterval(intervalId);
    }, []);


    ////////
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

    ///////
    useEffect(() => {
        handleUserMoney()
        const intervalId = setInterval(handleUserMoney, 4500);
        return () => clearInterval(intervalId);
    }, []);


    const getCurrentDateNumber = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();
        const dateNumber = year * 10000 + month * 100 + date;
        return dateNumber;
    };
    const [currentDateNumber, setCurrentDateNumber] = useState(getCurrentDateNumber());
    // useEffect(() => {
    //     getCurrentDateNumber()

    // }, [])

    useEffect(() => {
        handleMin()
        setCurrentDateNumber(getCurrentDateNumber());
    }, []);


    // const [uid, setUid] = useState(gameHistoryList.data[0].gameUID);



    // const sendUID = async () => {
    //     let token = auth.authToken;

    //     try {
    //         const response = await axios.post(
    //             `${import.meta.env.VITE_API_URL}/updateGameUID`,
    //             {
    //                 gameUID: currentDateNumber
    //             },
    //             {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             }
    //         );
    //         if (response.status === 200) {
    //             setUid(response.data.newGameUID)
    //             console.log(response);
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
    // useEffect(() => {

    //     if (countDownGrowup === 59) {
    //         handleMin()
    //     }
    // }, [countDownGrowup])



    const handleUserMoney = async () => {
        try {
            let token = auth.authToken;
            let UID = auth.UID;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getUserProfile/${UID}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.status === 200) {
                setUserData(response);
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

    const handleSubmit = async () => {
        let token = auth.authToken
        if (countDownGrowup < 10) {
            toast.error("Wait for the next game", { ...toastProps });
            return null;
        }
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
                setSmShow(false)
                setLgShow(false)
                setMoney(1)
                setGroup('');
                setAmount(1);
                setMultiplier(1)
                handleUserMoney()
                return response;
            }
        } catch (error) {
            setSmShow(false)
                setLgShow(false)
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    const handleMin = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getgame/${duration}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                setTimeNo(duration)
                setMinute(response)
                return response;
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return null
            } else {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage || "Something went wrong", { ...toastProps });
            }
        }
    };

    useEffect(() => {

        const timer = setTimeout(async () => {

            await handleMin();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
        handleMin()
    }, []);



    return (
        <div className="win">
            <div className="container winNav">
                <div className="row">
                    <Link to='/' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        <img src={logo} alt="" onClick={() => { sendUID() }} />
                    </div>
                    <div className="col-2" >
                        <img src={ear} alt="" className="header_headphone" onClick={() => { navigate('/customerCare') }} />
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
                    <div className='clock-btn-container row'>
                        <button className={activeTab === 1 ? 'activeClock col-3' : 'clock-btn col-3'} onClick={() => { setDuration(1); handleMin(duration); handleTabClick(1); setTimeNo(1) }}>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>1 minute</p>
                        </button>
                        <button className='clock-btn col-3' >
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>3 minute</p>
                        </button>
                        <button className='clock-btn col-3'>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>5 minute</p>
                        </button>
                        <button className='clock-btn col-3'>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>10 minute</p>
                        </button>
                        {/* <button className={activeTab === 3 ? 'activeClock col-3' : 'clock-btn col-3'} onClick={() => { setDuration(3); handleMin(duration); handleTabClick(3); setTimeNo(3) }}>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>3 minute</p>
                        </button>
                        <button className={activeTab === 5 ? 'activeClock col-3' : 'clock-btn col-3'} onClick={() => { setDuration(5); handleMin(duration); handleTabClick(5); setTimeNo(5) }}>
                            <div className='clock'><img src={clock} alt="" /></div>
                            <p>5 minute</p>
                        </button>
                        <button className={activeTab === 10 ? 'activeClock col-3' : 'clock-btn col-3'} onClick={() => { setDuration(10); handleMin(duration); handleTabClick(10); setTimeNo(10) }}>
                            <div className='clock'><img src={clock} alt="" /></div>

                            <p>10 minute</p>
                        </button> */}
                    </div>
                </div>



                {activeTab === 1 &&
                    <>
                        <TimeSection />
                        <>
                            <div className="big-small-game-wrapper " >

                                {/* ///// */}
                                {showCountDown === true ? <Timer /> :
                                    <div className='image-cover'>
                                        <div className=" big-small">
                                            <div className="main-btn">
                                                <button className="left" onClick={() => { setSmShow(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                                <button className=" right" onClick={() => { setLgShow(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                            </div>

                                        </div>
                                    </div>}
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
                                        <div style={{ textAlign: 'center' }}><img src={bModal} alt="" /></div>
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
                        <GameHistory duration={duration} />
                    </>
                }
                {
                    activeTab === 3 &&
                    <>
                        <TimeSection />
                        <>
                            <div className="big-small-game-wrapper " >
                                {showCountDown === true ? <Timer /> :
                                    <div className='image-cover'>
                                        <div className=" big-small">
                                            <div className="main-btn">
                                                <button className="left" onClick={() => { setSmShow1(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                                <button className=" right" onClick={() => { setLgShow1(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                            </div>

                                        </div>
                                    </div>}

                            </div>
                            <Modal
                                size="lg"
                                show={smShow1}
                                onHide={() => setSmShow1(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Alfa 3 minute
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
                                show={lgShow1}
                                onHide={() => setLgShow1(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Beta   3 minute
                                        <div style={{ textAlign: 'center' }}><img src={bModal} alt="" /></div>
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
                        <GameHistory duration={duration} />
                    </>
                }
                {
                    activeTab === 5 &&
                    <>
                        <TimeSection />
                        <>
                            <div className="big-small-game-wrapper " >
                                {showCountDown === true ? <Timer /> :
                                    <div className='image-cover'>
                                        <div className=" big-small">
                                            <div className="main-btn">
                                                <button className="left" onClick={() => { setSmShow2(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                                <button className=" right" onClick={() => { setLgShow2(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                            </div>

                                        </div>
                                    </div>}

                            </div>
                            <Modal
                                size="lg"
                                show={smShow2}
                                onHide={() => setSmShow2(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Alfa 5 minute
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
                                show={lgShow2}
                                onHide={() => setLgShow2(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Beta 5 minute
                                        <div style={{ textAlign: 'center' }}><img src={bModal} alt="" /></div>
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
                        <GameHistory duration={duration} />
                    </>
                }
                {
                    activeTab === 10 &&
                    <>
                        <TimeSection />
                        <>
                            <div className="big-small-game-wrapper " >
                                {showCountDown === true ? <Timer /> :
                                    <div className='image-cover'>
                                        <div className=" big-small">
                                            <div className="main-btn">
                                                <button className="left" onClick={() => { setSmShow3(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                                <button className=" right" onClick={() => { setLgShow3(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                            </div>

                                        </div>
                                    </div>}

                            </div>
                            <Modal
                                size="lg"
                                show={smShow3}
                                onHide={() => setSmShow3(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Alfa 10 minute
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
                                show={lgShow3}
                                onHide={() => setLgShow3(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Beta 10 minute
                                        <div style={{ textAlign: 'center' }}><img src={bModal} alt="" /></div>
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
                        <GameHistory duration={duration} />
                    </>
                }
            </div >
        </div >
    )
}

export default Growup
