import React, { useEffect } from 'react';
import back from '../../images/back-button 1.svg';
import { Link } from 'react-router-dom';
import './Customer.css';
// import { useLocation } from 'react-router-dom';

function Customer() {
//   const location = useLocation();
//   const showChatWidget = location.pathname === '/customerCare';
//   useEffect(() => {
//     if (showChatWidget) {
//       const tidioScript = document.createElement('script');
//       tidioScript.src = "//code.tidio.co/pxykbxzsgraq7ew052ngur6jcljxcf68.js";
//       tidioScript.async = true;
//       document.body.appendChild(tidioScript);
  
//       return () => {
//         tidioScript.async = false;
//         document.body.removeChild(tidioScript);
//       };
//     }
//   }, []);
  



  return (
    <div className='about'>
      <div className="container ProNav">
        <div className="row">
          <Link to='/profile' className="col-2">
            <img src={back} alt="" />
          </Link>
          <div className="col-8">
            Customer Support
          </div>
        </div>
      </div>
      <div className="about-container">
        <div>
        <iframe src="https://tawk.to/chat/650fede6b1aaa13b7a78972f/1hb33ijko" width="100%" height="600" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Customer;
