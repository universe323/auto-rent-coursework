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
import SignUp from "../signUp_modal/signUp_modal";
import SignIn from "../signIn_modal/signIn_modal";
import UserArea_profile from "../userArea/userArea_profile";
import UserArea_settings from "../userArea_settings/userArea_settings";
import UserArea_orders from "../userArea_orders/userArea_orders";

function App() {
    return (
        <>
            <Header/>
            <Carousel/>
            <Advantages/>
            {/*<Statistics/>*/}
            <Goods/>
            {/*<Questions/>*/}
            <FeedbackSlider/>
            <Footer/>
            {/*<SignUp/>*/}
            {/*<SignIn/>*/}
            <UserArea_profile/>
            <UserArea_settings/>
            <UserArea_orders/>
        </>
    );

};

export default App;
