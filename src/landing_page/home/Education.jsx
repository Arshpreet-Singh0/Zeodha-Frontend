import React from 'react';

function Education() {
    return (  
        <div className="container mt-5 p-5">
            <div className="row">
                <div className=" col-lg-6 col-12 mb-5">
                   <img src="media/images/education.svg" style={{width:"95%"}} alt="" />
                </div>

                <div className="col-lg-6 col-12 mt-5">
                    <h1 className='fs-2 mb-5 '>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration:"none"}}>varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>Trading Q&A<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;