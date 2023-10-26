import {atom} from 'recoil';

const RiseUpTime = atom({
    key: "RiseUpTime",
    default:null
})

const RiseUpGame = atom({
    key: "RiseUpGame",
    default: {}
})

export {RiseUpTime, RiseUpGame}