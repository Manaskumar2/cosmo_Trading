import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndRedirect = () => {
      const authData = JSON.parse(localStorage.getItem('authUserToken')) || null;
      if (authData===null) {
        navigate('/signIn');
      }
    };

    // Initial check when the component mounts
    checkAuthAndRedirect();

    // Listen for changes in localStorage and recheck as needed
    window.addEventListener('storage', checkAuthAndRedirect);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('storage', checkAuthAndRedirect);
    };
  }, [navigate]);

  return (
    <div>
    
    </div>
  );
}

export default Auth;
