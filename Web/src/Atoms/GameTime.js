import {atom} from 'recoil';


const OneMinute = atom({
    key: "OneMinute",
    default:'' 
})
const TimeNo = atom({
    key: "TimeNo",
    default:1 
})
export {OneMinute, TimeNo}