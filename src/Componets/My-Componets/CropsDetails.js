import React, { useState } from 'react'
import '../../Componets/My-Componets/Cropsdetails.scss';
import Data from './CropsApi';
import { NavLink } from 'react-router-dom';

const CropsDetails = () => {

  const [searchCrop,setCropSearch] = useState("");
  const [CropInfo,setCropInfo] = useState({ title: "SugarCane (गन्ना)",crop : 'Sugar Cane Farming',img: "productsImages/sugarCane.jpg",seeds: "stem cuttings or setts",dieases: "Red Rot || Smut || Leaf Scald",whentoplant: "Sugar Cane is Planted in pre-monsoon or monsoon season",howmuchtimetaken: " 10 to 14 Months",fertilizer: "Secondary and Micronutrient fertilizers || Organic fertilizers",viewMore : 'https://en.wikipedia.org/wiki/Sugarcane'});

  const searchCropDetails = () => {
    const searchInput = searchCrop.toLowerCase();
    const result = Data.filter((crop) => crop.title.split(" ")[0].toLowerCase() === searchInput);
    setCropInfo(result[0]);
    setCropSearch("");
  };

  return (
    <React.Fragment>
      <div className="main-container">
          <h2>Find Your Crops Details 💯</h2>
        <div className="search-bar">
          <input type="text" placeholder="Ex - Cotton" value={searchCrop} onChange={(e)=> setCropSearch(e.target.value)}/>
          <button onClick={() => searchCropDetails()}>Search</button>
        </div>
        <div className="grid-box">
          <div className="left-side">
            <div className="img-box">
              <img src={CropInfo.img} alt={CropInfo.title}/>
            </div>
          </div>
          <div className="right-side">
            <div className="information">
              <h2>{CropInfo.crop} 🧑‍🌾</h2>
              <ul>
                <li><b>Crop Name :</b>{CropInfo.title}</li>
                <li><b>Seeds :</b>{CropInfo.seeds}</li>
                <li><b>Dieases :</b>{CropInfo.dieases}</li>
                <li><b>When to Plant :</b>{CropInfo.whentoplant}</li>
                <li><b>How Much Time Taken :</b>{CropInfo.howmuchtimetaken}</li>
                <li><b>Required Fertilizers :</b>{CropInfo.fertilizer}</li>
              </ul>
              <NavLink to={CropInfo.viewMore}><button className="view-more">View More</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CropsDetails;