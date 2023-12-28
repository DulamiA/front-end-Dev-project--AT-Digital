import React from "react";
import '../App.css';
import Image1 from '../Images/mobileAppDevelopment.png'
import Image2 from '../Images/digitalStrategyConsulting.png'

function Home(){
    return(
        <div>
            <div className="backgroundImage">
                <div className="intro">
                    <span className="intro-text">We crush your competitors, goals, and sales records - without the B.S.</span>
                    <button className="button">GET FREE CONSULTATION</button>
                </div>
            </div>
            <div className="content-margin">
                <div className="home-content">
                    <div className="home-content-image">
                        <img
                            className="image"
                            alt ="mobileAppDevelopment"
                            src={Image1}
                        />
                    </div>
                    <div className="home-content-text">
                        <span className="heading">Web & Mobile App Development</span>
                        <span className="paragraph">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</span>
                        <button className="button">LEARN MORE</button>
                    </div>
                </div>
            </div>
            <div className="content-margin">
                <div className="home-content">
                    <div className="home-content-text">
                        <span className="heading">Digital Strategy Consulting</span>
                        <span className="paragraph">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</span>
                        <button className="button">LEARN MORE</button>
                    </div>
                    <div className="home-content-image">
                        <img
                            className="image"
                            alt ="mobileAppDevelopment"
                            src={Image2}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home