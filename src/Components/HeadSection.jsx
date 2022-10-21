import React from "react";
import Logo from "../images/BreakingBadLogo.png";
import './HeadSection.css';


function HeadSection(props){

    return(
        <div className="HeaderMain">
            <div>
                <img src={Logo} alt="BreakingBadLogo"></img>
            </div>
            <div className="searchFormMain">
                <form onSubmit={(e)=>props.searchFunc(e)} role="search">
                    <input id="search" type="search" placeholder="Search..." autoFocus required onInput={(e)=>props.searchFunc(e)} />
                    <button className="searchBtn" type="submit">Go</button>    
                </form>
            </div>
            
        </div>
    );
}

export default HeadSection;