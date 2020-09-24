import React from "react"
import './Hero.css'
import hardwear from '../../assets/images/hardwear.jpg'


const Hero = () => {
    return ( 

        <div className="hero">
            <div className="leftHero">
                <h1>LETS BUILD</h1>
                <h2>sometning together</h2>
            </div>

            <div className="rightHero">
                <img src={hardwear} alt="computer motherboard" className="heroImage"></img>
            </div>
        </div>
     );
}
 
export default Hero;