import React, { useState } from 'react'
import '../Styles/shoppingCart.scss';
import { NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleProductCart from './Small_Componets/SingleProductCart';

const ShoppingCart = () => {
 
    // Get All Products Data Present In LocalStorage and store it into state...
    const [data,setData] = useState(JSON.parse(localStorage.getItem("CurrentUser")).Mycart);
    // Calculate Total price   
    let [totalPrice,SetTotalPrice] = useState(data.reduce((a,v) =>  a = a + v.price , 0 ));
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

    // [ When User Click on plus,minus button The price will Change or Product Quantity also ]
    const Change_Product_Quantity = (product_id,whatChange) => {
       const collection = JSON.parse(localStorage.getItem("CurrentUser"));
       const product_arr = collection.Mycart;
       const change_product = product_arr.filter((item) => item.id === product_id);

       if(whatChange === 'decrement')
       {
        if(change_product[0].numOfProducts > 1)
        {
            change_product[0].numOfProducts-=1;
            SetTotalPrice(totalPrice-=change_product[0].price);
        }
            
       }
       else{
        change_product[0].numOfProducts+=1;
        SetTotalPrice(totalPrice+=change_product[0].price);
       }
        
       localStorage.setItem("CurrentUser",JSON.stringify(collection));
       setData(JSON.parse(localStorage.getItem("CurrentUser")).Mycart);
    }

    
  
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
                                 return <SingleProductCart id={item.id} item={item} removeProduct={removeProduct} Change_Product_Quantity={Change_Product_Quantity}/> 
                            })
                        }
                    </div>

                    <div className='cartBottom'>
                        <NavLink to="/products" className="back"><i class="fa-solid fa-chevron-left"></i> CONTINUE SHOPPING</NavLink>
                        <div className='TotalPrice'>
                            <h3>Total :</h3>
                            <h6>{totalPrice}Rs</h6>
                        </div>
                    </div>
                </div>

                <div className='paymentNow'>

                    <div className='paymentDetails'>
                        <h3>Payment Details</h3>
                        <div className='totalCost'>
                            <h3>Total Cost</h3>
                            <h6>{totalPrice}Rs</h6>
                            <h5>Have a Promo Code?</h5>
                            <button>Pay Now</button>
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