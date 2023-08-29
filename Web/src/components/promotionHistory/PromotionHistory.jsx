import React from 'react'

function PromotionHistory() {
  return (
    <div style={{minHeight:"100vh"}}>
                  <div className="table-responsive" style={{marginTop:"1.5rem"}}>
                        <table className="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>Pick Up Time </th>
                                    <th>Receive Ammount</th>
                                    <th>Operate </th>

                                </tr>
                            </thead>
                            <tbody className='tableBodyRow'>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td>500</td>
                            
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td>500 </td>
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td> 500</td>
                                   
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td>500</td>
                                 
                                    
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td>500</td>
                                    
                                    
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td>500</td>
                                    
                                    
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                                <tr>
                                    <td>2023-08-07</td>
                                    <td> 500</td>
                                    
                                    
                                    <td style={{display:'flex' , justifyContent:'center', alignItems:'center'}}><button className='details-btn'>Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    </div>
  )
}

export default PromotionHistory
