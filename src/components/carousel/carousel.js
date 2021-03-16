import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImg1 from '../../img/main_carousel/1.jpg'
import SliderImg2 from '../../img/main_carousel/2.jpg'

const Carousel = () => {
    const settings =
        {
            dots: false,
            infinite: true,
            adaptiveHeight: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 4000,
            arrows: false
        };

    return (
        <>
            <div className="carousel">
                <div className="carousel__wrapper">
                    <div className="carousel__inner">
                        <Slider {...settings}>
                            <div>
                                <img src={SliderImg1} alt="mercedes"/>
                                <div className="carousel__block">
                                    <div className="carousel__block-title">АРЕНДА АВТОМОБИЛЯ</div>
                                    <div className="carousel__rent">
                                        <div className="carousel__rent-cars">MERSEDES BENZ CL-500 <br/><br/></div>
                                    </div>
                                    <div className="carousel__block-price">В СУТКИ ОТ <span> 3000 р.</span></div>
                                    <button className="button">ВЗЯТЬ В АРЕНДУ</button>
                                </div>
                            </div>
                            <div>
                                <img src={SliderImg2} alt="alfa-romeo"/>
                                <div className="carousel__block">
                                    <div className="carousel__block-title">АРЕНДА АВТОМОБИЛЯ</div>
                                    <div className="carousel__rent">
                                        <div className="carousel__rent-cars">HYNDAI GENESIS<br/><br/></div>

                                    </div>
                                    <div className="carousel__block-price">В СУТКИ ОТ <span> 3000 р.</span></div>
                                    <button className="button">ВЗЯТЬ В АРЕНДУ</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;
