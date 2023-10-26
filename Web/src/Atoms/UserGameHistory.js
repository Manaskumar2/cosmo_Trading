import {atom} from 'recoil';

const UserGameHistory = atom({
    key: "UserGameHistory",
    default:''
});

const GrowUpUserGameHistory = atom({
    key: "GrowUpUserGameHistory",
    default: {}
})

export {UserGameHistory, GrowUpUserGameHistory}