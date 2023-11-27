import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../../images/back-button 1.svg';
import './Upi.css';
import info from './info 1.svg';
import pp1 from './PhonePay 1.jpg';
import pp2 from './PhonePay 2.jpg';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { AuthState } from '../../Atoms/AuthState';
import {useRecoilValue , useRecoilState} from 'recoil';
import { RechargeAmount } from '../../Atoms/RechargeAmount';
import {useNavigate} from 'react-router-dom'
import { RechargeAtom } from '../../Atoms/RechargeAtom';
export const toastProps = {
    position: 'top-center',
    duration: 2000,
    style: {
        fontSize: '1rem',
        background: '#fff',
        color: '#333',
    },
};

function Upi() {
    const navigate=useNavigate()
    const option = useRecoilValue(RechargeAtom);
    const auth = useRecoilValue(AuthState);
    const [money, setMoney] = useRecoilState(RechargeAmount);
    const [upiData, setUpiData] = useState(null);
    const [upiReferenceNo, setUpiReferenceNo] = useState('');
    const [currentUpiDataIndex, setCurrentUpiDataIndex] = useState(0);

    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = money;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        document.body.removeChild(textField);
        alert('Amount copied to clipboard!');
    };
    const depositeRequest = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/submit-payment`,{ upiId:upiData[currentUpiDataIndex].upiId, upiReferenceNo, amount:money, qrCode:upiData[currentUpiDataIndex].qrCode }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 201) {
                toast.success("Recharge request successfully Sent!", { ...toastProps });
                setUpiReferenceNo("")
                setMoney(null)
                setTimeout(() => {
                    navigate('/recharge');
                }, 2000);
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || 'Something went wrong', { ...toastProps });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = auth.authToken;
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/getAllImageURLs`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (response.status === 200) {
                    const newUpiData = response.data;
                    const matchingIndex = newUpiData.reverse().findIndex(item => item.options === option);
                    if (matchingIndex !== -1) {
                        setCurrentUpiDataIndex(matchingIndex);
                        setUpiData(newUpiData);
                    } else {
                    }
                }
            } catch (error) {
                if (error.response.status === 403) {
                    navigate('/signIn')
                    return response;
                }
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage || 'Something went wrong', { ...toastProps });
            }
        };
        fetchData()
    }, []);
    const handleCopyupiIdClick = () => {
        if (upiData && upiData[currentUpiDataIndex] && upiData[currentUpiDataIndex].upiId) {
            const upiIdToCopy = upiData[currentUpiDataIndex].upiId;
            const textarea = document.createElement('textarea');
            textarea.value = upiIdToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('UPI ID copied to clipboard!');
        }}

    return (
        <div className='upi'>
            <Toaster />
            <div className='container-fluid PromoNav'>
                <div className='row'>
                    <Link to='/recharge' className='col-2'>
                        <img src={back} alt='' />
                    </Link>
                    <div className='col-8'>Recharge</div>
                    <div className='col-2'></div>
                </div>
            </div>
            <div className='body'>
                <div className='step-container'>
                    <div className='steps'>Step1</div>
                    <div className='step-data'>Copy UPI Information</div>
                </div>

                <div className='upiId-container container'>
                    {upiData && <img src={upiData[currentUpiDataIndex].qrCode} alt="" className='qr-img'/>}
                
                    <div className='row'>
                    
                        <div className='col-9'>
                            
                            <h6>Amount</h6>
                            <p>{money}</p>
                        </div>
                        <div className='col-3'>
                            <button onClick={copyToClipboard}>Copy</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-9'>
                            <h6>UPI Account</h6>
                            {upiData && <p>{upiData[currentUpiDataIndex].upiId} </p>}
                        </div>
                        <div className='col-3'>
                            <button onClick={handleCopyupiIdClick}>Copy</button>
                        </div>
                    </div>
                </div>


                <div className='step-container'>
                    <div className='steps'>Step2</div>
                    <div className='step-data'>Open online banking or wallet, transfer to the UPI account</div>
                </div>
                <div className='upiId-container'>
                    <p>Transfer the money to the UPI account</p>
                    <p style={{ marginTop: "1rem" }}><img src={info} alt="" style={{ marginRight: "1rem" }} />The UPI account may be changed at any time, please do not save The UPI account.</p>
                </div>
                <div className='step-container'>
                    <div className='steps'>Step3</div>
                    <div className='step-data'>After successful make a transfer Please fill 12 digit of Ref No</div>
                </div>
                <div className='upiId-container'>
                    <p>See the Ref No. example at the bottom</p>
                    <p style={{ marginTop: "1rem" }}><img src={info} alt="" style={{ marginRight: "1rem", color: '#FBB040' }} />Please enter Ref No. To complete the recharge</p>
                    <div className='ref-container'>
                        <input type="text" className='ref' placeholder='Enter Transaction ID' value={upiReferenceNo} onChange={(e)=>{setUpiReferenceNo(e.target.value)}} />
                    </div>
                </div>

                <div className="container">
                    <div className="row upi-btn-row">
                        <button className="col-6" style={{ background: "linear-gradient(143deg, #B92E34 0%, #DC4C53 100%)" }}>Cancel</button>
                        <button className="col-6" style={{ background: 'linear-gradient(143deg, #118029 0%, #40CA77 100%)' }} onClick={depositeRequest}>Submit</button>
                    </div>
                </div>

                <div className="container">
                    <p className='ref-txt'>Ref No. Example</p>
                    <div className="row ref-imges">
                        <img src={pp1} className='col-6' />
                        <img src={pp2} className='col-6' />
                    </div>
                </div>





            </div></div>

    )
}

export default Upi
