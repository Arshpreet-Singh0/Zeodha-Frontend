import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import axios from "axios";

function HomePage() {
   
    return ( 
        <>
        <Hero/>
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
     );
}

export default HomePage;