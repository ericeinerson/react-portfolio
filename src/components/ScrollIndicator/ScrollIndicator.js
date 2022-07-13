import React, {useState} from 'react'
import "./ScrollIndicator.css"

function ScrollIndicator({scroll}) {

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

 