import React, { useState } from 'react';
import img_carousel1 from "..//..//img/carousel1.jpg"
import img_carousel2 from "..//..//img/carousel2.jpg"
import img_carousel3 from "..//..//img/carousel3.jpg"
import "..//carousel/style/carousel_style.min.css"
const Carousel = ()=>{
return(
    <div className="slider">
        <div className='slider_border_main'>
            <div className="slider__contents">
                <img className='slider__image' src={img_carousel1}></img>
            </div>
            <div className="slider__contents">
                <img className='slider__image' src={img_carousel2}></img>
            </div>
            <div className="slider__contents">
                <img className='slider__image' src={img_carousel3}></img>
            </div>
            <script src="/examples/vendors/jquery/jquery-3.3.1.min.js"></script>
            <script src="/examples/vendors/bootstrap-3.3.7/js/bootstrap.min.js"></script>


        </div>
        <div className='nav_button'>
            <button className='butt_left' type='button'>
                <img src='https://s8.vcdn.biz/static/46309111/carousel-left.svg'></img>
            </button>
            <button className='butt_right' type='button'>
            <img src='https://s9.vcdn.biz/static/46309151/carousel-right.svg'></img>
            </button>
        </div>
    </div>


        
);
}

export default Carousel;