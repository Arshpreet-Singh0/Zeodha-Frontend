import React from 'react';
import './Awards.css'

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-12 p-5">
                    <img src="media/images/largestBroker.svg" className='responsive-image' alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-12 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    
                        <div className="row">
                        
                            <div className="col-6">
                                <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Futures and Options</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                <li>Stockes & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonda and Govt. Securities</li>
                                    </ul>
                            </div>
                        </div>
                        <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Awards;