import { useState } from 'react';
import './Modal.css'
import Modal from 'react-bootstrap/Modal';
import alfa from '../../images/alfa.svg'
import beta from '../../images/beta.svg'
import bg from '../../images/Section.svg'
function ModalComp() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
        <div className=" big-small-game-wrapper " >
                <div><img src={bg} alt="" className='bg'/></div>
                <div className=" big-small">
                    <div className="main-btn">
                    <button className="left" onClick={() => setSmShow(true)}><img src={alfa} alt="" /></button>
                    <button className=" right" onClick={() => setLgShow(true)}><img src={beta} alt="" /></button>
                    </div>
                    <div className=" x-row-section">
                        <button className="x-section">x1</button>
                        <button className="x-section">x2</button>
                        <button className="x-section">x5</button>
                        <button className="x-section">x10</button>
                        <button className="x-section">x50</button>
                        <button className="x-section">x100</button>
                </div>
                    
                </div>
                
            </div>
            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton className='modal-head'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        small
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

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
                        Big
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalComp;
