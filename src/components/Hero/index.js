import BigCircle from "../BigCircle";
import React from "react";

const Hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex text-center justify-content-center">
                    <h1>Visual design and Web development</h1>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex text-center justify-content-center">
                    <h2>From park city utah</h2>
                </div>
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-center">
                <BigCircle text="Design" color="#E6563B"/>
                <BigCircle text="Develop" color="#EB9D3A"/>
                <BigCircle text="Support" color="#7CB06C"/>
                <BigCircle text="Host" color="#00ABA9"/>
            </div>
        </div>
    )
}

export default Hero;