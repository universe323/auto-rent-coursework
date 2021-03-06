import React from 'react';

import ChoiceIcon1 from '../../img/icons/choice/Choice_1.png'
import ChoiceIcon2 from '../../img/icons/choice/choice_2.png'
import ChoiceIcon3 from '../../img/icons/choice/choice_3.png'
import ChoiceIcon4 from '../../img/icons/choice/choice_4.png'

const Advantages = () => {
    return (
        <section  id="advantages" className="advantages">
            <div className="container">
                <div className="advantages__wrapper">
                    <h2 className="advantages__title">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
                    <div className="advantages__reasons">
                        <div className="advantages__reasons-item">
                            <div className="advantages__reasons-round">
                                <img src={ChoiceIcon1} alt="Выгодно"/>
                            </div>
                            <div className="advantages__reasons-subtitle">ВЫГОДНО</div>
                            <div className="advantages__reasons-descr">Плата за аренду только за количество дней.</div>
                        </div>
                        <div className="advantages__reasons-item">
                            <div className="advantages__reasons-round">
                                <img src={ChoiceIcon2} alt="Быстро"/>
                            </div>
                            <div className="advantages__reasons-subtitle">БЫСТРО</div>
                            <div className="advantages__reasons-descr">Быстрое оформление за 15 минут.</div>
                        </div>
                        <div className="advantages__reasons-item">
                            <div className="advantages__reasons-round">
                                <img  src={ChoiceIcon3} alt="Безопасно"/>
                            </div>
                            <div className="advantages__reasons-subtitle">БЕЗОПАСНО</div>
                            <div className="advantages__reasons-descr">Все автомобили застрахованы и в отличном
                                состоянии.
                            </div>
                        </div>
                        <div className="advantages__reasons-item">
                            <div className="advantages__reasons-round">
                                <img src={ChoiceIcon4} alt="Комфортно"/>
                            </div>
                            <div className="advantages__reasons-subtitle">КОМФОРТНО</div>
                            <div className="advantages__reasons-descr">У нас только новые и комфортные автомобили.</div>
                        </div>
                    </div>
                    <div  className="advantages__discount">
                        <h2 className="advantages__discount-title">СКИДКА 15% ДО КОНЦА МЕСЯЦА</h2>
                        <div className="advantages__discount-descr">
                            Успей оставить заявку до конца месяца и получи пирожок абсолютно бесплатно
                        </div>
                        <form id="discount-form" action="#" className="form form__discount">
                            <input name="name" required placeholder="Имя" type="text"/>
                                <input name="phone" required placeholder="Телефон"/>
                                    <input name="days" required placeholder="Кол-во дней" type="number"/>
                                        <button className="button button__discount-form">ПОЕХАЛИ</button>
                        </form>
                    </div>
                </div>

            </div>
            <section className="statistics">
                <div className="statistics__bg">
                    <div className="container">
                        <div className="statistics__wrapper">
                            <div className="statistics__item">
                                <h2>150+</h2>
                                <div className="statistics__descr">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
                            </div>
                            <div className="statistics__item">
                                <h2>5+</h2>
                                <div className="statistics__descr">ЛЕТ НА РЫНКЕ ПРОКАТА</div>
                            </div>
                            <div className="statistics__item">
                                <h2>45+</h2>
                                <div className="statistics__descr">МАШИН В АВТОПАРКЕ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Advantages;