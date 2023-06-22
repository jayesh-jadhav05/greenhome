import React from "react";

const SingleProductCart = ({ item,removeProduct,Change_Product_Quantity }) => {
    return (
        <div className='singleProduct'>
            <img src={item.img} alt='apple' />
            <div>
                <p>{item.catagory}</p>
                <h4>{item.name}</h4>
            </div>
            <div className='add_remove_btns'>
                <button className="change-price" onClick={() => Change_Product_Quantity(item.id,'decrement')}>-</button>
                <span className='TotalProduct'>{item.numOfProducts}</span>
                <button className='change-price' onClick={() => Change_Product_Quantity(item.id,'increment')}>+</button>
            </div>
            <h5>{item.price}Rs</h5>
            <button className='remove' onClick={() => {removeProduct(item.id)}}><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
};

export default SingleProductCart;