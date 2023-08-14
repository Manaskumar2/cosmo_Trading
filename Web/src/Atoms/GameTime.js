import {atom} from 'recoil';


const OneMinute = atom({
    key: "OneMinute",
    default:'' 
})
// const TwoMinute = atom({
//     key: "TwoMinute",
//     default:{}
// })
// const ThreeMinute = atom({
//     key: "ThreeMinute",
//     default:{}
// })
// const FourMinute = atom({
//     key: "FourMinute",
//     default:{}
// })
const TimeNo = atom({
    key: "TimeNo",
    default:1 
})
export {OneMinute, TimeNo}