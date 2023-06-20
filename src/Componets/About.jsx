import React from "react";
import GridBox from '../Componets/GridBox';
import aboutImg from '../Images/aboutusimg1.png';
import '../Componets/about.scss';
import OrganicDetails from "./My-Componets/OrganicDetails";
const About = () => {

    return(
        <React.Fragment>
        <GridBox imgSrc={aboutImg} firstTitle="We Will Find More" mainTitle="Join a Organic Movement" discription="Hii How how are you all i This all are good.i found the organic farming skills were i teach you how you can do organiv farming in a best way..join with me i will be teaching you all ,lets do" />
         <OrganicDetails />
         </React.Fragment>
        )
}

export default About;