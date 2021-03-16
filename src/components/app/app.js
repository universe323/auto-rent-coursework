import React from 'react';
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Advantages from "../advantages/advantages";
import Statistics from "../statistics/statistics";
import Goods from "../goods/goods";
import Questions from "../questions/questions";
import FeedbackSlider from "../feedback-slider/feedback-slider";

import Footer from "../footer/footer";
import '../../scss/style.sass';

function App() {
    return (
        <>
            <Header/>
            <Carousel/>
            <Advantages/>
            <Statistics/>
            <Goods/>
            {/*<Questions/>*/}
            <FeedbackSlider/>
            <Footer/>
        </>
    );

}

export default App;