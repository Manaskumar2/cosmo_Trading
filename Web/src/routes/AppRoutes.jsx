import { Suspense } from "react";
import { useEffect } from "react";
import { Navigate, Route, Routes , useNavigate} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Login, Register, Forgot, OTP, Reset, Success, Home, Growup ,ProfileComponent, Promotion,Recharge, UPI, Withdraw, BankCard,Wallet,Gift,BeginnerTutorial,About,Customer,Message,Transection,Launch,Terms,SRegister,Premium,PremiumApply,Security,RiseUp,WidthdrawHistory,RechargeHistory,WalletTransfer,ResetPasswordAdmin} from "./importPages";
import { AuthState } from "../Atoms/AuthState";
import Loader from '../components/loader/Loader'
// import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
    const navigate =useNavigate()
    const authData = useRecoilValue(AuthState);
    useEffect(() => {
        const authToken = JSON.parse(sessionStorage.getItem('authToken'));
    
        // if (authToken) {
        //   navigate('/');
        // }
      }, []);
    return (
        <Routes basename='/api'>
            <Route
                        path="/registered"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <SRegister />
                            </Suspense>
                        }
                    />

            <Route path="/signIn" element={<Suspense fallback={<Loader/>}><Login /></Suspense>} />
            <Route path="/signUp" element={<Suspense fallback={<Loader/>}><Register /></Suspense>} />
            <Route path="/forgotPassword" element={<Suspense fallback={<Loader/>}><Forgot /></Suspense>} />
            <Route path="/terms&condition" element={<Suspense fallback={<Loader/>}><Terms /></Suspense>} />

            {!authData ? (
                <Route path="/" element={<Navigate to="/signIn" replace />} />
            ) : (
                <>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/growUp"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Growup />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/promotion"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Promotion />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/recharge"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Recharge />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/message"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Message />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/beginnerTutorial"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <BeginnerTutorial />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/upi"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <UPI />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdraw"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Withdraw />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/customerCare"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Customer />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bankCard"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <BankCard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/gift"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Gift />
                            </Suspense>
                        }
                    />
                    
                    <Route
                        path="/transaction"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Transection />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/wallet"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Wallet />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <About/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/premium"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Premium/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/premiumApply"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <PremiumApply/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/security"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <Security/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/riseUp"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <RiseUp/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdrawRecord"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <WidthdrawHistory/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/rechargeRecord"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <RechargeHistory/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/walletTransfer"
                        element={
                            <Suspense fallback={<Loader/>}>
                                    <WalletTransfer/>
                            </Suspense>
                        }
                    />
                    
                    
                </>
            )}

            <Route path="/verifyOtp" element={<Suspense fallback={<Loader/>}><OTP /></Suspense>} />
            <Route path="/comingSoon" element={<Suspense fallback={<Loader/>}><Launch/></Suspense>} />
            <Route path="/resetPassword" element={<Suspense fallback={<Loader/>}><Reset /></Suspense>} />
            <Route path="/success" element={<Suspense fallback={<Loader/>}><Success /></Suspense>} />
            <Route path="/profile" element={<Suspense fallback={<Loader/>}><ProfileComponent /></Suspense>} />
        </Routes>
    );
}
