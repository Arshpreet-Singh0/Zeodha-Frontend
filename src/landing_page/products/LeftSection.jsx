import React from 'react';

function LeftSection({imageURL, productName, Description, tryDemo, learnMore, googlePaly, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 ">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{Description}</p>
                    <div>
                    <a href={tryDemo}>try demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn more</a>
                    </div>
                    <div className='mt-5'>
                    <a href={googlePaly}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                    <a href={appStore}> <img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;