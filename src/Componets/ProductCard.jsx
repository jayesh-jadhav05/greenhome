import React from "react";
import OrganicCard from "./OrganicCard";
import '../Componets/OrganicCard.scss';
import Product1Image from '../Images/pro1.png';
import Product2Image from '../Images/pro2.png';
import Product3Image from '../Images/pro3.png';
const ProductCard = () => {

    return(
        <>
          <div className="Product_Container">
               <h2>Popular Products :- 😱</h2>
              <OrganicCard product_title="Farm Fresh Fruits" product_details="hii i will Provide you a Organic fruits.." product_img={Product1Image}/>
              <OrganicCard product_title="Farm Fresh Vegitables" product_details="hii i will Provide you a Organic and fresh Vegitables.." product_img={Product2Image}/>
              <OrganicCard product_title="Organic Legume" product_details="hii Thats all about Organic farming.." product_img={Product3Image}/>
          </div>
        </>
    )
}

export default ProductCard;