import {atom} from 'recoil';

const authData = JSON.parse(sessionStorage.getItem("authToken")) || null;



const AdminAuthState = atom({
    key: "AdminAuthState",
    default: authData
})
export {AdminAuthState}