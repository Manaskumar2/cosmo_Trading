import React from 'react'
import './AdminNav.css'
function AdminNav() {

  return (
    <div style={{overFlow:'hidden'}}>
       <>
      {/* <Button variant="primary" onClick={handleShow}>
        Dash Board Options
      </Button> */}

      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <p class="navbar-brand"  title="Free Bootstrap 4 Admin Template" style={{marginLeft:"2rem"}}>Admin Dash Board</p>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        
                    </ul>
                    {/* <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="nav-item">
                  <a class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul> */}
                </div>
       </nav>
    </>
    
    </div>
  )
}

export default AdminNav
