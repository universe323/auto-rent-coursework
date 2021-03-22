import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AvatarImg1 from '../../img/feed/feed_1.jpg'
import AvatarImg2 from '../../img/feed/feed_2.jpg'
import AvatarImg3 from '../../img/feed/feed_3.jpg'
import AvatarImg4 from '../../img/feed/feed_4.jpg'

const FeedbackSlider = () => {

    const settings =
        {
            infinite: true,
            adaptiveHeight: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 4000,
            dots: true
        };

    return (
        <section id="feed" className="feed">
            <div className="container">
                <h2 className="feed__title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
                <div className="feed__wrapper">
                    <Slider {...settings}>
                        <div>
                            <div className="feed__container">
                                <img className="feed__img" src={AvatarImg1} alt=""/>
                                <div className="feed__reviews">
                                    10 из 10
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="feed__container">
                                <img className="feed__img" src={AvatarImg3} alt=""/>
                                <div className="feed__reviews">
                                    брал тут короче тачку малую покатать хаха, так она так визжала от нее что сразу мне на хуй вскочила, хаха
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="feed__container">
                                <img className="feed__img" src={AvatarImg2} alt=""/>
                                <div className="feed__reviews">
                                    Пацыки кароче ровные, тачку завезли харошую, небиту некрашену. Всё четко!
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="feed__container">
                                <img className="feed__img" src={AvatarImg4} alt=""/>
                                <div className="feed__reviews">
                                    Гуглил порнуху, а попал на этот сайт. Остался доволен
                                </div>
                            </div>
                        </div>

                    </Slider>
                    {/*<div className="feed__carousel">*/}
                    {/*    <img className="feed__img" src={AvatarImg2} alt=""/>*/}
                    {/*    <img className="feed__img" src={AvatarImg3} alt=""/>*/}
                    {/*    <img className="feed__img" src={AvatarImg4} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="feed__rewievs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa*/}
                    {/*    deserunt quidem aspernatur ullam cupiditate voluptatem modi? Deserunt explicabo corporis*/}
                    {/*    laboriosam voluptatibus quidem tempore perferendis excepturi possimus, recusandae rerum in*/}
                    {/*    voluptate.*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSlider;
