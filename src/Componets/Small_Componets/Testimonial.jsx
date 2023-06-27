import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import user1 from '../Images/user1.jpeg';
import user2 from '../Images/user2.jpeg';
import user4 from '../Images/user4.jpg';
import user5 from '../Images/user6.jpg';
import user6 from '../Images/user7.jpeg';
import user7 from '../Images/user8.jpeg'
import '../../Styles/testimonial.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function Arrow(props){

    const { className,style,onClick } = props;
    return(
        <div className={className} style={{...style, display:"block",background:"black"}} onClick={onClick} />
    );
}

const UserReview = (props) => {

    return (
        <div className='userCard'>
            <img src={props.imgsrc} alt="product" />
            <h3>{props.username}</h3>
            <h6><span><i class="fa-sharp fa-solid fa-star"></i></span> <span><i class="fa-sharp fa-solid fa-star"></i></span> <span><i class="fa-sharp fa-solid"></i></span> <span><i class="fa-sharp fa-solid fa-star"></i></span> <span><i class="fa-sharp fa-solid fa-star" id='NoRate'></i></span> </h6>
            <p>
            A user is someone who employs or uses a particular thing, like a user of 
            nicotine or a user of an internet site. Since you are reading this, you are a user of Vocabulary.com...
            </p>
        </div>
    )
}


const Testimonial = () => {
    const settings = {
        dots:true,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay: true,
         speed:2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    };

    return (
        <div className='container'>
         <h2 className='testi'>♂️ Our Testimonial🙂</h2>
         <div className='sliderContainer'>
         <Slider {...settings}>
         <UserReview imgsrc={user1} username="JAYESH JADHAV"/>
         <UserReview imgsrc={user2} username="JON DOE"/>
         <UserReview imgsrc={user4} username="MOHAN D"/>
         <UserReview imgsrc={user5} username="RAKESH PATIL"/>
         <UserReview imgsrc={user6} username="MOHAN D"/>
         <UserReview imgsrc={user7} username="RAKESH PATIL"/>
         </Slider>
         </div>
        </div>
    )
}

export default Testimonial;