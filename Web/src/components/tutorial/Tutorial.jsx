import React from 'react'
import line from '../../pages/promotionPage/Line 28.svg'
function Tutorial() {
  return (
    <div>
                    <div className='table-heading' style={{marginTop:"1.5rem"}}>
                        <h5 className='text-center heading-amount'>Rebate Amount Corresponding Table</h5>
                        <img src={line} alt="line" className='line' />
                    </div>
                    <div className="table-responsive">
                        <table class="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>Agent Level</th>
                                    <th>Total Referral</th>
                                    <th>Total Bet</th>
                                    <th>Recharge</th>
                                </tr>
                            </thead>
                            <tbody className='tableBodyRow'>
                                <tr>
                                    <td>0LV</td>
                                    <td style={{ paddingLeft: 0 }}>0</td>
                                    <td><h5><i className="icon-rupee"></i> 0</h5></td>
                                    <td><h6>0</h6></td>
                                </tr>
                                <tr>
                                    <td >1LV</td>
                                    <td style={{ paddingLeft: 0 }}>5</td>
                                    <td><h5><i className="icon-rupee"></i>50000</h5></td>
                                    <td><h6>10000</h6></td>
                                </tr>

                                <tr>
                                    <td >2LV</td>
                                    <td style={{ paddingLeft: 0 }}>10</td>
                                    <td><h5><i className="icon-rupee"></i> 2500000</h5></td>
                                    <td><h6>50000</h6></td>
                                </tr>
                                <tr>
                                    <td >3LV</td>
                                    <td style={{ paddingLeft: 0 }}>15</td>
                                    <td><h5><i className="icon-rupee"></i>3500000</h5></td>
                                    <td><h6>700000</h6></td>
                                </tr>
                                <tr>
                                    <td >4LV</td>
                                    <td style={{ paddingLeft: 0 }}>20</td>
                                    <td><h5><i className="icon-rupee"></i>5000000</h5></td>
                                    <td><h6>1000000</h6></td>
                                </tr>
                                <tr>
                                    <td >5LV</td>
                                    <td style={{ paddingLeft: 0 }}>25</td>
                                    <td><h5><i className="icon-rupee"></i>1000000</h5></td>
                                    <td><h6>1200000</h6></td>
                                </tr>
                                <tr>
                                    <td >6LV</td>
                                    <td style={{ paddingLeft: 0 }}>30</td>
                                    <td><h5><i className="icon-rupee"></i>1500000</h5></td>
                                    <td><h6>15000000</h6></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div className='table-heading'>
                        <h5 className='text-center heading-amount'>Commission Calculation Method (Lottery)</h5>
                        <img src={line} alt="line" className='line' />
                    </div>
                    <div className="table-responsive" style={{paddingBottom:"8rem"}}>
                        <table class="table table-striped">
                            <thead >
                                <tr className='greenBg' >
                                    <th>Hierarchy <p className='table-subHeading'>Rebate Ratio</p></th>
                                    <th>Tire 1 <p className='table-subHeading'>commission</p></th>
                                    <th>Tire 2 <p className='table-subHeading'>commission</p></th>
                                    <th>Tire 3 <p className='table-subHeading'>commission</p></th>

                                </tr>
                            </thead>
                            <tbody className='tableBodyRow' style={{marginBottom:'8rem'}}>
                                <tr>
                                    <td>0LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>1LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>2LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>3LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>4LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>5LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>
                                <tr>
                                    <td>6LV</td>
                                    <td style={{ paddingLeft: 0 }}>0.6</td>
                                    <td> 0.18%</td>
                                    <td><h6>0.54%</h6></td>
                                </tr>



                            </tbody>
                        </table>
                    </div>
    </div>
  )
}

export default Tutorial
