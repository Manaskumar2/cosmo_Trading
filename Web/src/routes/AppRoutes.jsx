import { Suspense } from "react";
import { useEffect } from "react";
import { Navigate, Route, Routes , useNavigate} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Login, Register, Forgot, OTP, Reset, Success, Home, Growup ,ProfileComponent, Promotion,Recharge, UPI, Withdraw, BankCard,Wallet,Gift,BeginnerTutorial,About,Customer,Message,Transection,Launch,Terms,SRegister,Premium,PremiumApply,Security,RiseUp,WidthdrawHistory,RechargeHistory} from "./importPages";
import { AuthState } from "../Atoms/AuthState";
// import Loader from '../components/loader/Loader'
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
                            <Suspense >
                                    <SRegister />
                            </Suspense>
                        }
                    />

            <Route path="/signIn" element={<Suspense ><Login /></Suspense>} />
            <Route path="/signUp" element={<Suspense ><Register /></Suspense>} />
            <Route path="/forgotPassword" element={<Suspense ><Forgot /></Suspense>} />
            <Route path="/terms&condition" element={<Suspense ><Terms /></Suspense>} />

            {!authData ? (
                <Route path="/" element={<Navigate to="/signIn" replace />} />
            ) : (
                <>
                    <Route
                        path="/"
                        element={
                            <Suspense >
                                    <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/growUp"
                        element={
                            <Suspense>
                                    <Growup />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/promotion"
                        element={
                            <Suspense >
                                    <Promotion />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/recharge"
                        element={
                            <Suspense >
                                    <Recharge />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/message"
                        element={
                            <Suspense >
                                    <Message />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/beginnerTutorial"
                        element={
                            <Suspense >
                                    <BeginnerTutorial />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/upi"
                        element={
                            <Suspense >
                                    <UPI />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdraw"
                        element={
                            <Suspense >
                                    <Withdraw />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/customerCare"
                        element={
                            <Suspense >
                                    <Customer />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bankCard"
                        element={
                            <Suspense >
                                    <BankCard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/gift"
                        element={
                            <Suspense >
                                    <Gift />
                            </Suspense>
                        }
                    />
                    
                    <Route
                        path="/transaction"
                        element={
                            <Suspense >
                                    <Transection />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/wallet"
                        element={
                            <Suspense >
                                    <Wallet />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense >
                                    <About/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/premium"
                        element={
                            <Suspense >
                                    <Premium/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/premiumApply"
                        element={
                            <Suspense >
                                    <PremiumApply/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/security"
                        element={
                            <Suspense>
                                    <Security/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/riseUp"
                        element={
                            <Suspense >
                                    <RiseUp/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdrawRecord"
                        element={
                            <Suspense >
                                    <WidthdrawHistory/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/rechargeRecord"
                        element={
                            <Suspense >
                                    <RechargeHistory/>
                            </Suspense>
                        }
                    />
                    
                </>
            )}

            <Route path="/verifyOtp" element={<Suspense ><OTP /></Suspense>} />
            <Route path="/comingSoon" element={<Suspense ><Launch/></Suspense>} />
            <Route path="/resetPassword" element={<Suspense ><Reset /></Suspense>} />
            <Route path="/success" element={<Suspense ><Success /></Suspense>} />
            <Route path="/profile" element={<Suspense ><ProfileComponent /></Suspense>} />
        </Routes>
    );
}
