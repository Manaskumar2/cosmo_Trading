import {atom} from 'recoil';

const authData = JSON.parse(localStorage.getItem("authUserToken")) || null;



const AuthState = atom({
    key: "AuthState",
    default: authData
})
export {AuthState}