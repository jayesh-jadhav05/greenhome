import React, { useState } from "react";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Data from './ProductsAPI';
import MainShopCart from './Small_Componets/MainShopCart'
import FilterSideBar from "./Small_Componets/FilterSideBar";
import '../Styles/product.scss';
const Products = () => {
  const [productData,filterProductS] = useState(Data.products);

  
 // Filters All Products  
  const filterMe = (btnclicked) => {
   
    const a1 = Data.products.filter((item) => item.price <= btnclicked)
    const a2 = Data.products.filter((item) => item.others === btnclicked)
    const a3 = Data.products.filter((item) => item.catagory === btnclicked)
    const a4 = Data.products.filter((item) => item.rating === btnclicked)

    if(btnclicked === "famous" || btnclicked === "popular"||btnclicked === "trending"){
      filterProductS(a2);
    }else if(btnclicked === 1 || btnclicked === 2 || btnclicked === 3 || btnclicked === 4){
      filterProductS(a4)
    }else if(btnclicked === 25 || btnclicked === 50 || btnclicked === 75 || btnclicked === 100){
      filterProductS(a1)
    }else if(btnclicked === "fruit" || btnclicked === "vegitable" || btnclicked === "legume" || btnclicked === "foreign"){
      filterProductS(a3)
    }else{
      filterProductS(Data.products)
    }
  };

  // This function use To Add data in Cart Page (Add To Cart)..
  const addData = (item) => {
    // get all signup users data from localStorage.
    let SignupUserDatas = JSON.parse(localStorage.getItem("WelComeUsers"));

    // get CurrentUser Data and Convert String data into array Format..
    let data = JSON.parse(localStorage.getItem("CurrentUser")); 
    // Check Which User is Matching to Current Logged User to all Signup Users..
    const aftersignup = SignupUserDatas.filter((item) => item.email === data.email);
    let myCartArray = data.Mycart;
    let signupUserMyCart = aftersignup[0].Mycart;
    var user = myCartArray.find(function (user) {
      return user.id === item.id;
    });

    // Authentication Part
    if (!user) {
      myCartArray.push(item);
      signupUserMyCart.push(item);
      data.Mycart = myCartArray;
      
      aftersignup.Mycart = signupUserMyCart;
      localStorage.setItem("CurrentUser", JSON.stringify(data));
      localStorage.setItem("WelComeUsers",JSON.stringify(SignupUserDatas));
      // Add toast For Product Added..
      toast.success('Product Added Successfully 👍', {position: "top-center",autoClose: 3000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
    } else {
      // Add toast For Product Already Added..
      toast.warn('Product is already Added', {position: "top-center",autoClose: 2000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
    } 
  };



  return (
    <React.Fragment>
    <main className="mainShow">
    <FilterSideBar filterMe={filterMe}/>

      <section className="rightBar">
      <div className="searchBar">
        <div className="find">
          <input type="search" placeholder="Search Products" onChange={(e) => filterProductS(productData.filter((item) => item.searchname.includes(e.target.value)))}/>
        </div>
      </div>

      <div className="ProductContainer">
        <div className="grid container">
          {
           productData.map((curElem) => {
              return <MainShopCart key={curElem.id} item={curElem} addData={addData} />
            })
          }
        </div>
      </div>
      </section>
      </main>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Products;