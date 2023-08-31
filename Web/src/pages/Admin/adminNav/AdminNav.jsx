import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function AdminNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <>
      <Button variant="primary" onClick={handleShow}>
        Dash Board Options
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Nav</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul>
              <li><Link to='/admin/home'>Home</Link></li>
              <li><Link to='/admin/user'>User Data</Link></li>
              <li><Link to='/admin/recharge'>Recharge</Link></li>
              <li><Link to='/admin/withdraw'>Withdraw</Link></li>
            </ul>
          
          
          
          
          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </div>
  )
}

export default AdminNav
