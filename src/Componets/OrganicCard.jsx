import React from "react";


const OrganicCard = (props) => {
    return (

        
        <div className="Container">
            <div className="product_info">
                <h3>{props.product_title}</h3>
                <p>{props.product_details}</p>
                <button className="btn">SHOP NOW <span><i class="fa-solid fa-arrow-right"></i></span></button>
            </div>
            <div className="product_img">
                <img src={props.product_img} alt="Product" />
            </div>
        </div>
    )
}

export default OrganicCard;