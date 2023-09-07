import back from '../../images/back-button 1.svg'
import logo from '../../images/LogoInner.svg'
import wallet from '../../images/green-wallet.svg'
import clock from '../../images/clock 1.svg'
import ear from '../../images/earphone.svg'
import Audio from '../../images/audio.svg'
import rupee from '../../images/rupee.svg'
import reload from '../../images/reload 1.svg'
import './Growup.css'
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
function Growup() {
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
                        <button className={activeTab === 3 ? 'activeClock col-3' : 'clock-btn col-3'} onClick={() => { setDuration(3); handleMin(duration); handleTabClick(3); setTimeNo(3) }}>
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
                        </button>
                    </div>
                </div>



                {activeTab === 1 &&
                    <>
                        <TimeSection />
                        <>
                            <div className="big-small-game-wrapper " >

                                {/* ///// */}
                                {showCountDown === true ? <Timer/> :
                                <div className='image-cover'>
                                    <div className=" big-small">
                                        <div className="main-btn">
                                            <button className="left" onClick={() => { setSmShow(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                            <button className=" right" onClick={() => { setLgShow(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                        </div>
                                        <div className=" x-row-section">
                                            <button className="x-section active">x1</button>
                                            <button className="x-section">x2</button>
                                            <button className="x-section">x5</button>
                                            <button className="x-section">x10</button>
                                            <button className="x-section">x50</button>
                                            <button className="x-section">x100</button>
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
                        <GameHistory />
                    </>
                }
                {
                    activeTab === 3 &&
                    <>
                        <TimeSection />
                        <>
                        <div className="big-small-game-wrapper " >
                        {showCountDown === true ? <Timer/> :
                                <div className='image-cover'>
                                    <div className=" big-small">
                                        <div className="main-btn">
                                            <button className="left" onClick={() => { setSmShow1(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                            <button className=" right" onClick={() => { setLgShow1(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                        </div>
                                        <div className=" x-row-section">
                                            <button className="x-section active">x1</button>
                                            <button className="x-section">x2</button>
                                            <button className="x-section">x5</button>
                                            <button className="x-section">x10</button>
                                            <button className="x-section">x50</button>
                                            <button className="x-section">x100</button>
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
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
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
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
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
                                        <button className='total-btn' onClick={handleSubmit}>Total Price: {amount}</button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </>
                        <GameHistory />
                    </>
                }
                {
                    activeTab === 5 &&
                    <>
                        <TimeSection />
                        <>
                        <div className="big-small-game-wrapper " >
                        {showCountDown === true ? <Timer/> :
                                <div className='image-cover'>
                                    <div className=" big-small">
                                        <div className="main-btn">
                                            <button className="left" onClick={() => { setSmShow2(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                            <button className=" right" onClick={() => { setLgShow2(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                        </div>
                                        <div className=" x-row-section">
                                            <button className="x-section active">x1</button>
                                            <button className="x-section">x2</button>
                                            <button className="x-section">x5</button>
                                            <button className="x-section">x10</button>
                                            <button className="x-section">x50</button>
                                            <button className="x-section">x100</button>
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
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
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
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
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
                                        <button className='total-btn'>Total Price:{amount}</button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </>
                        <GameHistory />
                    </>
                }
                {
                    activeTab === 10 &&
                    <>
                        <TimeSection />
                        <>
                        <div className="big-small-game-wrapper " >
                        {showCountDown === true ? <Timer/> :
                                <div className='image-cover'>
                                    <div className=" big-small">
                                        <div className="main-btn">
                                            <button className="left" onClick={() => { setSmShow3(true); setGroup('small') }}><img src={alfa} alt="" /></button>
                                            <button className=" right" onClick={() => { setLgShow3(true); setGroup('big') }}><img src={beta} alt="" /></button>
                                        </div>
                                        <div className=" x-row-section">
                                            <button className="x-section active">x1</button>
                                            <button className="x-section">x2</button>
                                            <button className="x-section">x5</button>
                                            <button className="x-section">x10</button>
                                            <button className="x-section">x50</button>
                                            <button className="x-section">x100</button>
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
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
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
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
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
                                        <button className='total-btn' onClick={handleSubmit}>Total Price: {amount}</button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </>
                        <GameHistory />
                    </>
                }
            </div >
        </div >
    )
}

export default Growup
