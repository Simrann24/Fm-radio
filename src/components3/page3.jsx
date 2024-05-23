import React from 'react'
import "./page3.css";


const Page3=(props)=>{
    return(

        <div id='card1' >
            <div className="card2">
            <img src={props.imgsrc} id="imgs"></img>
            <p id="p3t">Lorem ipsum dolor sit amet, consectetur  <br></br>do eiusmod tempor incididunt ut labore <br></br> aliqua. Quis ipsum suspendisse .</p>
            <button id="btn">Read More</button>
            </div>
        </div>
    )
};
export default Page3