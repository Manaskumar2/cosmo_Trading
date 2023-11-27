
import './PromotionHistory.css'
import '../../components/gameHistory/GameHistory.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { AuthState } from '../../Atoms/AuthState'
// import {}
import { useRecoilState, useRecoilValue } from 'recoil'
import left from '../../images/leftArr.svg'
import right from '../../images/RightArr.svg'
import Winner from '../../images/icon-winner.svg'
import Alpha from '../../images/icon-alpha.svg'
import Beta from '../../images/icon-beta.svg'
import { UserGameHistory } from '../../Atoms/UserGameHistory';
import { UserGameHistoryRiseUp } from '../../Atoms/UserGameHistoryRiseUp';
import Gama from '../../images/Gamma.svg'
export const toastProps = {
    position: "top-center",
    duration: 2000,
    style: {
        fontSize: "1rem",
        background: "#fff",
        color: "#333",
    },
};
function PromotionHistory() {
    const [data, setData] = useState(null)
    const iconSources = [Alpha, Beta, Gama]
    const auth = useRecoilValue(AuthState)
    const [page, setPage] = useState(1)
    const [page2, setPage2] = useState(1)

    const gethistoryData = async () => {
        try {
            let token = auth.authToken;
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/dateWiseCommission`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.status === 200) {
                // console.log(response.data.datewiseTotal)
                setData(response.data.datewiseTotal)
                return response;
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            toast.error(errorMessage || "Something went wrong", { ...toastProps });
        }
    }
    useEffect(() => {
        gethistoryData()
    }, [])
    return (
        <div style={{ minHeight: "100vh" }}>
            <div className="gameHistory">
                <Toaster />
                <div>
                    <div className='period-heading' style={{ margin: '2rem 0 5rem 0' }}>
                        <div className="table-responsive game_history_table ">
                            <table class="table table-striped box-shadow">
                                <thead>
                                    <tr>
                                        <th>Pickup Date</th>
                                        {/* <th width="140" style={{ textAlign: 'center' }}>Result</th> */}
                                        <th style={{ textAlign: 'right' }}>Receiving Amount</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {data && Object.keys(data).map((key, index) => (
                                        <React.Fragment key={index}>
                                            <tr>
                                                <td style={{ paddingLeft: '2rem' }}>{key}</td>
                                                <td style={{ textAlign: 'right', paddingRight: '5rem' }}>{data[key].toFixed(2)}</td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PromotionHistory
