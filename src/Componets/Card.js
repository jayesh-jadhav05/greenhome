import React from "react";
import '../Componets/card.scss';
import { NavLink } from "react-router-dom";
const Card = (props) => {

    return (
        <div className="card">
            <div className="HoverMeImg">
                <img src={props.imgSrc} alt="" />
            </div>
            <div className="CardInfo">
                <div className="ProductInfo">
                    <h4>{props.title}</h4>
                    <p>{props.des}</p>
                </div>
                <span>{props.price}&nbsp;<i className="fa-sharp fa-solid fa-indian-rupee-sign"></i></span>
            </div>
            <NavLink to="/products" className="btn"><span><i class="fa-solid fa-bag-shopping"></i></span>Add to Cart</NavLink>
        </div>
    )
}

export default Card;