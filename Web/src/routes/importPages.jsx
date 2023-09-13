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
const Launch= lazy(()=>
import('../../src/components/launch/Launch'))
const AdminHome= lazy(()=>
import('../../src/pages/Admin/adminHome/AdminHome'))
const AdminUser= lazy(()=>
import('../../src/pages/Admin/adminUserData/AdminUserData'))
const AdminRecharge= lazy(()=>
import('../../src/pages/Admin/adminRecharge/AdminRecharge'))
const AdminWithdraw= lazy(()=>
import('../../src/pages/Admin/adminWithdraw/AdminWithdraw'))
const AdminLogin= lazy(()=>
import('../../src/pages/Admin/adminLogin/Adminlogin'))
const Terms= lazy(()=>
import('../../src/pages/termsAndCondition/Terms'))
const SRegister= lazy(()=>
import('../../src/components/successfulRegistration/SuccessfulRegistration'))
const AdminPrime= lazy(()=>
import('../../src/pages/Admin/AdminPrime/AdminPrime'))
const Premium= lazy(()=>
import('../../src/pages/premium/Premium'))
const PremiumApply= lazy(()=>
import('../../src/pages/premiumApply/PremiumApply'))

export {Login,Register,Forgot,OTP,Reset,Success,Home,Growup,ProfileComponent,Promotion,Recharge,UPI,Withdraw,BankCard,Wallet,Gift,BeginnerTutorial,About,Customer,Message,Transection,Launch,AdminHome,AdminUser,AdminRecharge,AdminWithdraw,AdminLogin,Terms,SRegister,AdminPrime,Premium,PremiumApply}