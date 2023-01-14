import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/slider-1.JPG'
import slider2 from '../assets/slider-2.JPG'
import slider3 from '../assets/slider-3.JPG'


const SliderItem = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <div>
                <Slider {...settings}>
                <div style={{width:"100%"}}>
                   <img style={{width:"100%",padding:"20px 0"}} src={slider1} alt="" />
                </div>
                <div style={{width:"100%"}}>
                   <img style={{width:"100%",padding:"20px 0"}} src={slider2} alt="" />
                </div>
                <div style={{width:"100%"}}>
                   <img style={{width:"100%",padding:"20px 0"}} src={slider3} alt="" />
                </div>
                <div style={{width:"100%"}}>
                   <img style={{width:"100%",padding:"20px 0"}} src={slider1} alt="" />
                </div>
                <div style={{width:"100%"}}>
                   <img style={{width:"100%",padding:"20px 0"}} src={slider2} alt="" />
                </div>
                <div style={{width:"100%"}}>
                   <img style={{width:"100%",padding:"20px 0"}} src={slider3} alt="" />
                </div>
                </Slider>
            </div>
        </div>
    );
};

export default SliderItem;