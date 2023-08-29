import { Suspense } from "react";
import { useEffect } from "react";
import { Navigate, Route, Routes , useNavigate} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Login, Register, Forgot, OTP, Reset, Success, Home, Growup ,ProfileComponent, Promotion,Recharge, UPI, Withdraw, BankCard,Wallet,Gift,BeginnerTutorial,About,Customer,Message,Transection} from "./importPages";
import { AuthState } from "../Atoms/AuthState";
// import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
    const navigate =useNavigate()
    const authData = useRecoilValue(AuthState);
    useEffect(() => {
        const authToken = JSON.parse(sessionStorage.getItem('authToken'));
    
        if (authToken) {
          navigate('/');
        }
      }, []);
    return (
        <Routes>

            <Route path="/signIn" element={<Suspense fallback={<div className='loading'>Loading</div>}><Login /></Suspense>} />
            <Route path="/signUp" element={<Suspense fallback={<div className='loading'>Loading</div>}><Register /></Suspense>} />
            <Route path="/forgotPassword" element={<Suspense fallback={<div className='loading'>Loading</div>}><Forgot /></Suspense>} />

            {!authData ? (
                <Route path="/" element={<Navigate to="/signIn" replace />} />
            ) : (
                <>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/growUp"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Growup />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/promotion"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Promotion />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/recharge"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Recharge />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/message"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Message />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/beginnerTutorial"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <BeginnerTutorial />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/upi"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <UPI />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdraw"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Withdraw />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/customerCare"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Customer />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bankCard"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <BankCard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/gift"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Gift />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/transaction"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Transection />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/wallet"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <Wallet />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<div className='loading'>Loading</div>}>
                                    <About/>
                            </Suspense>
                        }
                    />
                </>
            )}

            <Route path="/verifyOtp" element={<Suspense fallback={<div className='loading'>Loading</div>}><OTP /></Suspense>} />
            <Route path="/resetPassword" element={<Suspense fallback={<div className='loading'>Loading</div>}><Reset /></Suspense>} />
            <Route path="/success" element={<Suspense fallback={<div className='loading'>Loading</div>}><Success /></Suspense>} />
            <Route path="/profile" element={<Suspense fallback={<div className='loading'>Loading</div>}><ProfileComponent /></Suspense>} />
        </Routes>
    );
}
