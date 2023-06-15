import React from "react";
import GridBox from "./GridBox";
import homeImg from '../pngegg.png';
import './home.scss';
import PayBox from "./PayBox";
import Feactures from "./Features";
import ProductCard from "../Componets/ProductCard";
import Discount from '../Componets/Discount';
import Testimonial from "../Componets/Testimonial";
const Home = () => {

    return (
        <React.Fragment>
               <GridBox imgSrc={homeImg} firstTitle="Best Quality Products" mainTitle="Join The Organic Movement" discription="Hii How how are you all i This all are good.i found the organic farming skills were i teach you how you can do organiv farming in a best way..join with me i will be teaching you all ,lets do" />
               <PayBox />
               <Feactures />
               <ProductCard />
               <Discount />
            <Testimonial />
             
        </React.Fragment>
    )
}
export default Home;