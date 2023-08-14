import {atom} from 'recoil';

const UserDataState = atom({
    key: "UserDataState",
    default: authData
})
export {UserDataState}