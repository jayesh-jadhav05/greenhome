import React, { useState } from 'react'
import '../Componets/shopping.scss';
import { NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Single Cart Component
const SingleProduct = ({ item,removeProduct}) => {
    return (
        <div className='singleProduct'>
            <img src={item.img} alt='apple' />
            <div>
                <p>Fruits</p>
                <h4>{item.name}</h4>
            </div>
            <div className='add_remove_btns'>
                <button className="change-price">-</button>
                <span className='TotalProduct'>1</span>
                <button className='change-price'>+</button>
            </div>
            <h5>{item.price}Rs</h5>
            <button className='remove' onClick={() => {removeProduct(item.id)}}><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
};

const ShoppingCart = () => {
 
    // Get All Products Data Present In LocalStorage and store it into state...
    const [data,setData] = useState(JSON.parse(localStorage.getItem("CurrentUser")).Mycart);
    // const [price,setPrice] = useState(1);
   

    // Remove product From Cart Page.
    const removeProduct = (Removeid) => {
 
        let storedData = localStorage.getItem("CurrentUser");
        let SignUpUsersData = JSON.parse(localStorage.getItem("WelComeUsers"));  //Sign-Up-Users
        console.log(SignUpUsersData)
        let Logdata = JSON.parse(storedData);
        const CurrentUser = SignUpUsersData.filter((user) => Logdata.email === user.email);  //Current-user find
        console.log(CurrentUser)
        let myCartArray = Logdata.Mycart;
        const newArr = myCartArray.filter((item) => item.id !== Removeid);
        Logdata.Mycart = newArr;
        CurrentUser[0].Mycart = newArr;
        setData(Logdata.Mycart);
        localStorage.setItem("CurrentUser",JSON.stringify(Logdata));
        localStorage.setItem("WelComeUsers",JSON.stringify(SignUpUsersData));
        toast('Product Remove Successfully 👍',{position : 'top-center',autoClose: 2000})
    };

     
      //this Will Give The Total Price of Cart Added Products.
    let TotalPrice = data.reduce((a,v) =>  a = a + v.price , 0 ); 

    return (
        <React.Fragment>
        <div className='cartContainer'>
            <div className='shopNow'>

                <div className='cartProducts'>
                    <div className='Title'>
                        <h2>Shopping Cart🛒</h2>
                    </div>
                    <div className='products'>
                        {
                            data.map((item) => {
                                 return <SingleProduct id={item.id} item={item} removeProduct={removeProduct}/> 
                            })
                        }
                    </div>

                    <div className='cartBottom'>
                        <NavLink to="/products" className="back"><i class="fa-solid fa-chevron-left"></i> CONTINUE SHOPPING</NavLink>
                        <div className='TotalPrice'>
                            <h3>Total :</h3>
                            <h6>{TotalPrice}Rs</h6>
                        </div>
                    </div>
                </div>

                <div className='paymentNow'>

                    <div className='paymentDetails'>
                        <h3>Payment Details</h3>
                        <div className='totalCost'>
                            <h3>Total Cost</h3>
                            <h6>{TotalPrice}Rs</h6>
                            <h5>Have a Promo Code?</h5>
                            <button>CONTINUE TO CHECK OUT</button>
                        </div>
                    </div>
                    <div className='atmImg'>
                        <img src='All_Images/Atm.png' alt='cartATm' />
                    </div>
                </div>

            </div>
        </div>
        <ToastContainer />
        </React.Fragment>
    );
};

export default ShoppingCart;