import {lazy } from 'react';

const Login= lazy(()=>
import('../pages/login/Login'))
const Register= lazy(()=>
import('../pages/register/Register'))
const Forgot= lazy(()=>
import('../pages/forgotPassword/ForgotPassword'))
const OTP= lazy(()=>
import('../pages/OTP/OTP'))
const Reset= lazy(()=>
import('../pages/resetPassword/Reset'))
const Success= lazy(()=>
import('../pages/successfullyChange/Success'))
const Home= lazy(()=>
import('../pages/homePage/Home'))
const Growup= lazy(()=>
import('../pages/growup/Growup'))
const ProfileComponent= lazy(()=>
import('../pages/profile/ProfileComponent'))
const Promotion= lazy(()=>
import('../pages/promotionPage/Promotion'))
const Recharge= lazy(()=>
import('../pages/recharge/Recharge'))
const UPI= lazy(()=>
import('../pages/upiPay/Upi'))
const Withdraw= lazy(()=>
import('../pages/withdrawl/Withdraw'))
const BankCard= lazy(()=>
import('../pages/bankCard/BankCard'))
const Wallet= lazy(()=>
import('../pages/wallet/Wallet'))
const Gift= lazy(()=>
import('../pages/gift/Gift'))
const BeginnerTutorial= lazy(()=>
import('../pages/beginnerTutorial/BeginnerTutorial'))
const About= lazy(()=>
import('../pages/about/About'))
const Customer= lazy(()=>
import('../pages/customer/Customer'))
const Message= lazy(()=>
import('../pages/messageCenter/Message'))
const Transection= lazy(()=>
import('../pages/transactionRecord/TransectionRecord'))

export {Login,Register,Forgot,OTP,Reset,Success,Home,Growup,ProfileComponent,Promotion,Recharge,UPI,Withdraw,BankCard,Wallet,Gift,BeginnerTutorial,About,Customer,Message,Transection}