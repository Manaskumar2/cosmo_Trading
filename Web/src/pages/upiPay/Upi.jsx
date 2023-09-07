import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import back from '../../images/back-button 1.svg'
import './Upi.css'
import info from './info 1.svg'
import pp1 from './PhonePay 1.jpg'
import pp2 from './PhonePay 2.jpg'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
import { useRecoilValue } from 'recoil'
import { RechargeAmount } from '../../Atoms/RechargeAmount'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
      fontSize: "1rem",
      background: "#fff",
      color: "#333",
    },
  };

function Upi() {
    const auth = useRecoilValue(AuthState)
    const money = useRecoilValue(RechargeAmount)
    const [upiData, setUpiData]=useState(null)
    const [ base64Image, setBase64Image ] = useState('')
    const [  upiId, setUpiId ] = useState('')


    

    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = money;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        document.body.removeChild(textField);};


    const handleUPI = async () => {
        try {
            let token = auth.authToken
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getAllImageURLs`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 200) {
                console.log(response);
                setUpiData(response)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }
    const createPost = async () => {
        try {
            let token = auth.authToken
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/uploadQrcode`,{
                upiId,
                base64Image
            }, {
                
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.status === 201) {
                console.log(response);
                setUpiId("")
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }

    useEffect(()=>{handleUPI()},[])

    function convertImg(file){
        return new Promise((resolve, reject) =>{
            const fileReader= new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload=() => {
                resolve(fileReader.result)
            }
            fileReader.onerror=(error)=>{
                reject(error)
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        createPost(base64Image)
    }

    const handleFileUpload=async(e)=>{
        const file =e.target.files[0]
        const base64= await convertImg(file)
    
        setBase64Image(base64)
    }


    return (
        <div className='upi'>
            <Toaster/>
            <div className="container-fluid PromoNav" >
                <div className="row">
                    <Link to='/recharge' className="col-2">
                        <img src={back} alt="" />
                    </Link>
                    <div className="col-8">
                        Recharge
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
            <div className="body">

                <div className='step-container'>
                    <div className='steps'>Step1</div>
                    <div className='step-data'>Copy UPI Information</div>
                </div>

                <div className='upiId-container container'>
                    <div className="row">
                        <div className="col-9"><h6>Amount</h6><p>{money}</p></div>
                        <div className="col-3"><button onClick={copyToClipboard}>Copy</button></div>
                    </div>


                    <div className="row">
                        <div className="col-9"><h6>UPI Account</h6><p>Bharat@pix</p></div>
                        <div className="col-3"><button>Copy</button></div>
                    </div>
                    {/* <form className='qrCode' onSubmit={handleSubmit}>
                    <input type="file" accept='.png,.jpeg,.jpg' onChange={(e)=>{handleFileUpload(e)}}/>
                    <input type="text" placeholder='enter Upi id' onChange={(e)=>{setUpiId(e.target.value)}}/>
                    <button type='submit'>Submit</button>
                </form> */}
                </div>


                <div className='step-container'>
                <div className='steps'>Step2</div>
                <div className='step-data'>Open online banking or wallet, transfer to the UPI account</div>
            </div>
            <div className='upiId-container'>
                <p>Transfer the money to the UPI account</p>
                <p style={{marginTop:"1rem"}}><img src={info} alt="" style={{marginRight:"1rem"}}/>The UPI account may be changed at any time, please do not save The UPI account.</p>
            </div>
            <div className='step-container'>
                    <div className='steps'>Step3</div>
                    <div className='step-data'>After successful make a transfer Please fill 12 digit of Ref No</div>
                </div>
                <div className='upiId-container'>
                <p>See the Ref No. example at the bottom</p>
                <p style={{marginTop:"1rem"}}><img src={info} alt="" style={{marginRight:"1rem",color:'#FBB040'}}/>Please enter Ref No. To complete the recharge</p>
                <div className='ref-container'>
                    <input type="text" className='ref' placeholder='Enter Transaction ID'/>
                </div>
            </div>

            <div className="container">
                <div className="row upi-btn-row">
                    <button className="col-6" style={{background:"linear-gradient(143deg, #B92E34 0%, #DC4C53 100%)"}}>Cancel</button>
                    <button className="col-6" style={{background: 'linear-gradient(143deg, #118029 0%, #40CA77 100%)'}}>Submit</button>
                </div>
            </div>

            <div className="container">
                <p className='ref-txt'>Ref No. Example</p>
                <div className="row ref-imges">
                    <img src={pp1} className='col-6'/>
                    <img src={pp2} className='col-6'/>
                </div>
            </div>





            </div></div>

    )
}

export default Upi