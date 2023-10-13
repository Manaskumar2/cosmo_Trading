import star from '../../images/star.svg'
import User from '../../images/img-profile.svg'
import './Withdraw.css'
import {data} from './WithdrawData'
import { useState , useEffect} from 'react'

import 'swiper/css';
function WithdrawSection() {
  const [displayedData, setDisplayedData] = useState(data.slice(0, 5));
  const [startIndex, setStartIndex] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); 
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let newData = [];
    for (let i = 0; i < 5; i++) {
      const dataIndex = (startIndex + i) % data.length;
      newData.push(data[dataIndex]);
    }
    setDisplayedData(newData);
  }, [startIndex]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className='withdraw'>
      <div className="container">
        <div className="container ">
          <div className="row golden-bg">
            <div className="col-2"><img src={star} alt="" /></div>
            <div className="col-8 text-center">Today Withdrawal</div>
            <div className="col-2"><img src={star} alt="" /></div>
          </div>
        </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <tbody>
                {displayedData.map((item, i) => (
        <tr key={i}>
          <td    width="35"><img src={User} alt="" /></td>
                    <td style={{ paddingLeft: 0,textAlign:'left' }}>{item.name}</td>
                    <td><h5 style={{textAlign:'center'}}><i className="icon-rupee"></i> {item.amount}</h5></td>
                    <td ><h6 style={{textAlign:'right'}}>{formattedTime}</h6></td>
        </tr>
      ))}
                </tbody>
              </table>
            </div>
      </div>
    </div>
  )
}

export default WithdrawSection