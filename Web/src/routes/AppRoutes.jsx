import { Suspense } from "react";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Login, Register, Forgot, OTP, Reset, Success, Home, Growup, ProfileComponent, Promotion, Recharge, UPI, Withdraw, BankCard, Wallet, Gift, BeginnerTutorial, About, Customer, Message, Transection, Launch, Terms, SRegister, Premium, PremiumApply, Security, RiseUp, WidthdrawHistory, RechargeHistory, WalletTransfer, ResetPasswordAdmin } from "./importPages";
import { PrivateRoute } from "./PrivateRoute";
import { AuthState } from "../Atoms/AuthState";
import Loader from '../components/loader/Loader'


export const AppRoutes = () => {
    const authData = useRecoilValue(AuthState);
    return (
        <Routes basename='/api'>
            <Route
                path="/registered"
                element={
                    <Suspense fallback={<Loader />}>
                        <SRegister />
                    </Suspense>
                }
            />
            <Route path="/signIn" element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
            <Route path="/signUp" element={<Suspense fallback={<Loader />}><Register /></Suspense>} />
            <Route path="/forgotPassword" element={<Suspense fallback={<Loader />}><Forgot /></Suspense>} />
            <Route path="/terms&condition" element={<Suspense fallback={<Loader />}><Terms /></Suspense>} />

            {!authData ? (
                <>
                <Route path="/" element={<Navigate to="/signIn" replace />} />
                <Route path="/growUp" element={<Navigate to="/signIn" replace />} />
                <Route path="/riseUp" element={<Navigate to="/signIn" replace />} />
                <Route path="/wallet" element={<Navigate to="/signIn" replace />} />
                <Route path="/profile" element={<Navigate to="/signIn" replace />} />
                <Route path="/promotion" element={<Navigate to="/signIn" replace />} />
                <Route path="/recharge" element={<Navigate to="/signIn" replace />} />
                <Route path="/upi" element={<Navigate to="/signIn" replace />} />
                <Route path="/withdraw" element={<Navigate to="/signIn" replace />} />
                <Route path="/transaction" element={<Navigate to="/signIn" replace />} />
                <Route path="/withdrawRecord" element={<Navigate to="/signIn" replace />} />
                <Route path="/rechargeRecord" element={<Navigate to="/signIn" replace />} />
                <Route path="/walletTransfer" element={<Navigate to="/signIn" replace />} />
                <Route path="/premiumApply" element={<Navigate to="/signIn" replace />} />
                <Route path="/premium" element={<Navigate to="/signIn" replace />} />
                <Route path="/security" element={<Navigate to="/signIn" replace />} />
                <Route path="/gift" element={<Navigate to="/signIn" replace />} />
                </>
            ) : (
                <>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/growUp"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Growup />
                                </PrivateRoute>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/promotion"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                    <Promotion />
                                </PrivateRoute>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/recharge"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Recharge />
                                </PrivateRoute>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/message"
                        element={
                            <Suspense fallback={<Loader />}>
                                 <PrivateRoute>
                                 <Message />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/beginnerTutorial"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <BeginnerTutorial />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/upi"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <UPI />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdraw"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Withdraw />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/customerCare"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Customer />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bankCard"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <BankCard />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/gift"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Gift />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/transaction"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Transection />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/wallet"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Wallet />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <About />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/premium"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Premium />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/premiumApply"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <PremiumApply />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/security"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <Security />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/riseUp"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <RiseUp />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/withdrawRecord"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <WidthdrawHistory />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/rechargeRecord"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <RechargeHistory />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />
                    <Route
                        path="/walletTransfer"
                        element={
                            <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                <WalletTransfer />
                                </PrivateRoute>
                                
                            </Suspense>
                        }
                    />

<Route path="/profile" element={<Suspense fallback={<Loader />}>
<PrivateRoute>
<ProfileComponent />
</PrivateRoute></Suspense>} />
                </>
            )}

            <Route path="/verifyOtp" element={<Suspense fallback={<Loader />}><OTP /></Suspense>} />
            <Route path="/comingSoon" element={<Suspense fallback={<Loader />}><Launch /></Suspense>} />
            <Route path="/resetPassword" element={<Suspense fallback={<Loader />}><Reset /></Suspense>} />
            <Route path="/success" element={<Suspense fallback={<Loader />}><Success /></Suspense>} />
            
        </Routes>
    );
}
