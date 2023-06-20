import React from "react";
import GridBox from "./GridBox";
import homeImg from '../pngegg.png';
import '../Styles/home.scss';
import PayBox from "./PayBox";
import Feactures from "./Features";
import ProductCard from "../Componets/ProductCard";
import Discount from '../Componets/Discount';
import Testimonial from "../Componets/Testimonial";
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