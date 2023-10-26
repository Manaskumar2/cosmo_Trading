import {atom} from 'recoil';

const UserDetails = atom({
    key: "UserDetails",
    default: ''
})

const User_Wallet = atom({
    key: "User_Wallet",
    default: 0
})

export {UserDetails, User_Wallet}