import React from "react";
import GridBox from './Small_Componets/GridBox';
import aboutImg from './Images/aboutusimg1.png';
import '../Styles/about.scss';
import OrganicDetails from "./My-Componets/OrganicDetails";
const About = () => {

    return(
        <React.Fragment>
        <GridBox imgSrc={aboutImg} firstTitle="We Will Find More" mainTitle="Welcome To Green World" discription="Organic farming is more than just a method of agriculture; it is a philosophy, a way of life that embraces the fundamental principles of sustainability and respect for nature. It is a practice that encourages farmers to work in harmony with the environment, nurturing the soil, preserving biodiversity, and prioritizing the health and well-being of both consumers and the planet. With each seed sown, organic farmers embark on a profound journey, committed to the idea that the Earth's resources should be protected and replenished, rather than depleted." />
         <OrganicDetails />
         </React.Fragment>
        )
}

export default About;