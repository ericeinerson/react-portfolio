import React, {useState} from 'react'
import "./ScrollIndicator.css"

function ScrollIndicator() {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        let scrolled = document.documentElement.scrollTop;
        let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercent = (scrolled / maxHeight) * 100;
        setScroll(scrollPercent);
    }
    
    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div className="scroll__indicator">
                <div className="progress-container">
                    <div className="progress-bar" id="myBar" style={ {width: `${scroll}%`} }></div>
                </div> 
            </div>
        </>
    )
}
        
export default ScrollIndicator;

 