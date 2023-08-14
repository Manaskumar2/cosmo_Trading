import {atom} from 'recoil';

const authData = JSON.parse(sessionStorage.getItem("authToken")) || null;



const AuthState = atom({
    key: "AuthState",
    default: authData
})
export {AuthState}