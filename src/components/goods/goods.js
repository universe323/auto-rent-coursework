import React from 'react';

import TempImgForGoods1 from '../../img/rent/rent_1.jpg'
import TempImgForGoods2 from '../../img/rent/rent_2.jpg'
import TempImgForGoods3 from '../../img/rent/rent_3.jpg'
import TempImgForGoods4 from '../../img/rent/rent_4.jpg'
import TempImgForGoods5 from '../../img/rent/rent_5.jpg'
import TempImgForGoods6 from '../../img/rent/rent_6.jpg'

const Goods = () => {
    return (
        <section className="goods">
            <div className="container">
                <h2 className="goods__title">ПРОКАТ АВТО</h2>
                <div className="goods__wrapper">
                    <div className="goods__item">
                        <img src={TempImgForGoods1} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods5} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods2} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods3} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods4} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods5} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods6} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods1} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                    <div className="goods__item">
                        <img src={TempImgForGoods3} alt="1" className="goods__img"/>
                        <div className="goods__item-subtitle">HYUNDAI GENESIS</div>
                        <hr/>
                        <div className="goods__item-descr">2016 | Автомат | 270км/ч |<br/>
                            Пробег: 25 000 км | Расход: 9л/100
                        </div>
                        <div className="goods__item-price">8 000 руб</div>
                        <button className="button button__price">АРЕНДОВАТЬ</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Goods;