import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection  imageURL="media/images/kite.png" productName="Kite" Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePaly="" appStore=""/>

        <RightSection imageURL="media/images/console.png" productName="Console" Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>

        <LeftSection  imageURL="media/images/coin.png" productName="Coin" Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePaly="" appStore=""/>

        <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>

        <LeftSection  imageURL="media/images/varsity.png" productName="Varsity mobile" Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePaly="" appStore=""/>

        <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.
        </p>

        <Universe />
        
        </>
     );
}

export default ProductPage;