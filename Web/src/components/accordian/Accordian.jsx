import CasinoWheel from '../../images/CasinoWheel.svg'
import './Accordian.css'
import Accordion from 'react-bootstrap/Accordion';
function Accordian() {
    return (
        <div className='how-it-works'>
            <h3 className="title">How It Works?</h3>
            <Accordion className='gradient-btn'>
                <Accordion.Item eventKey="0" className='Accordian-home-item'>
                    <Accordion.Header className='acordian-home-head'> <div className='acc-title '> Choose a Game</div>
                    <div className='acc-step' style={{color:'#00406F',fontWeight:'650'}}>Step 01</div></Accordion.Header>
                    <Accordion.Body>
                        <div className="accordion_content_row">
                            <div className="accordion_text">
                                You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games.
                            </div>
                            <div className="accordion_image">
                                <img src={CasinoWheel} />
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='Accordian-home-item'>
                    <Accordion.Header className='acordian-home-head'> <div className='acc-title'> Pick a Number</div>
                    <div className='acc-step' style={{color:'#00406F',fontWeight:'650'}}>Step 02</div></Accordion.Header>
                    <Accordion.Body>
                        <div className="accordion_content_row">
                            <div className="accordion_text">
                                You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games.
                            </div>
                            <div className="accordion_image">
                                <img src={CasinoWheel} />
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='Accordian-home-item'>
                    <Accordion.Header className='acordian-home-head'> <div className='acc-title'> Bet Ammount</div>
                    <div className='acc-step' style={{color:'#00406F',fontWeight:'650'}}>Step 03</div></Accordion.Header>
                    <Accordion.Body>
                        <div className="accordion_content_row">
                            <div className="accordion_text">
                                You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games.
                            </div>
                            <div className="accordion_image">
                                <img src={CasinoWheel} />
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='Accordian-home-item'>
                    <Accordion.Header className='acordian-home-head'> <div className='acc-title'> Get Bonus</div>
                    <div className='acc-step' style={{color:'#00406F',fontWeight:'650'}}>Step 04</div></Accordion.Header>
                    <Accordion.Body className='acordian-home-body'>
                        <div className="accordion_content_row">
                            <div className="accordion_text">
                                You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games.
                            </div>
                            <div className="accordion_image">
                                <img src={CasinoWheel} />
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Accordian
