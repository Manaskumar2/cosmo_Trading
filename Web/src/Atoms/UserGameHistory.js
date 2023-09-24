import {atom} from 'recoil';

const UserGameHistory = atom({
    key: "UserGameHistory",
    default:''
});
export {UserGameHistory}