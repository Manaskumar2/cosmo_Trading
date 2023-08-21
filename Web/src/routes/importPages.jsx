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

export {Login,Register,Forgot,OTP,Reset,Success,Home,Growup,ProfileComponent}