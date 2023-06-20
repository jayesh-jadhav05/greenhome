import React from 'react';
import './Organicdetails.scss';

const GridContainer = ({ title, question, answer,iframeSrc,styles }) => {

   return (
      <div className='grid-layout' style={styles}>
         <div className='details same'>
            <h2>{question}</h2>
            <p>{answer}</p>
         </div>
         <div className='videos same'>
            <div className='iframe'>
               <iframe src={iframeSrc} title={title} width='400' height='300'></iframe>
            </div>
         </div>
      </div>
   );
};

const OrganicDetails = () => {
   return (
      <>
      <div className='Container-Head'>
         <h1> 📗Lets Grow With Organic Farming 💚</h1>
         <GridContainer title={'organic'} question={'What is Organic Farming Meaning ?'} iframeSrc={'https://youtube.com/embed/wougJaN_Ha0?autoplay=0&mute=1'} answer={'Organic farming is an agricultural approach that prioritizes natural and sustainable practices. It involves cultivating crops and raising livestock without the use of synthetic chemicals, GMOs, or artificial inputs.They manage weeds and pests using natural methods like crop diversity, beneficial insects, and physical barriers. Animal welfare is emphasized in organic livestock farming, with access to the outdoors and organic feed. Synthetic inputs are avoided, and natural alternatives like compost and manure are used. Organic farming certifications ensure adherence to standards, promoting environmentally friendly and biodiversity-supporting production.Overall, organic farming aims to provide consumers with sustainable and ecologically responsible products.'} />
         <GridContainer title={'organic'} styles={{flexFlow : "row-reverse"}} question={'How You Can Start Organic Farming ?'} iframeSrc={'https://youtube.com/embed/8KNu8nubxYo'} answer={'Begin by transitioning your farm from conventional to organic practices, gradually reducing the use of synthetic fertilizers, pesticides, and herbicides.Focus on building and maintaining healthy soil through techniques like composting, using cover crops, and incorporating organic matter.Adopt crop rotation strategies to prevent soil nutrient depletion and minimize pest and disease pressure.Implement integrated pest management (IPM) methods, including natural predators, traps, and physical barriers, to control pests without relying on chemical pesticides.Use organic-approved methods for weed control, such as mulching, hand weeding, or mechanical cultivation.Select organic-certified seeds and avoid genetically modified organisms (GMOs) to preserve the integrity of organic farming practices.'}/>
      </div>
      </>
   );
};

export default OrganicDetails;