import React from "react";
import GridBox from "./Small_Componets/GridBox";
import homeImg from '../Images/homeimg.png';
import '../Styles/home.scss';
import PayBox from "./Small_Componets/PayBox";
import Feactures from "./Small_Componets/Features";
import ProductCard from "./Small_Componets/ProductCard";
import Discount from './Small_Componets/Discount';
import Testimonial from "./Small_Componets/Testimonial";
import CropsDetails from "./My-Componets/CropsDetails";
import SeasonalHarvestCalender from "./My-Componets/SeasonalHarvestCalender";
const Home = () => {

    return (
        <React.Fragment>
            <GridBox imgSrc={homeImg} firstTitle="Best Quality Products" mainTitle="Join The Organic Movement" discription="The goal of organic farming is to minimize environmental impact, preserve biodiversity, and promote the health and well-being of both humans and animals. It encourages the use of renewable resources, conservation of water and energy, and the protection of natural habitats." />
            <PayBox />
            <Feactures />
            <ProductCard />
            <Discount />
            <CropsDetails />
            <SeasonalHarvestCalender />
            <Testimonial />

        </React.Fragment>
    )
}
export default Home;