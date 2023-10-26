import {atom} from 'recoil';


const OneMinute = atom({
    key: "OneMinute",
    default:'' 
})
const TimeNo = atom({
    key: "TimeNo",
    default:1 
})

const GrowUpGameState = atom({
    key: 'GrowUpGameState',
    default: {}
})

export {OneMinute, TimeNo, GrowUpGameState}