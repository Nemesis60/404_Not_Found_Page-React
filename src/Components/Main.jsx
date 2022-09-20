import React from "react";
import Image from "../Images/Scarecrow.png";
import '../Styles/Main.css';

function Main () {


    return(
        <div className="main-container">
            <div className="image">
                <img src={Image} alt="represent image" />
            </div>
            <div className="text">
                <h1>I have bad news for you</h1>
                <p>The page you are looking for might be removed or is temporarily unavailable</p>
                <button>Back to homepage</button>
            </div>
        </div>
    )
}

export default Main;