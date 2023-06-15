import React from "react";


const Box = (props) => {
    return(
        <div className="payment">
               <i className={props.FontAws}></i>
               <div className="info">
                  <h6>{props.title}</h6>
                  <p>{props.dis}</p>
               </div>
        </div>
    )
}

const PayBox = () => {

    return(
        <div className="flex-container">
             <Box FontAws="fa-regular fa-credit-card" title="Secure Payment" dis="Now!.You Can Payment Here" />
             <Box FontAws="fa-regular fa-credit-card" title="Original Products" dis="Now!.You Can The Products" />
             <Box FontAws="fa-regular fa-credit-card" title="Curated Products" dis="here You See The Proof" />
        </div>
    )
}

export default PayBox;